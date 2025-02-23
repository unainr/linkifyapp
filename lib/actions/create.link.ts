'use server';

import { ID, Query } from "appwrite";
import { databases, storage } from "../appwrite";
import { appwriteConfig } from "../config";

export async function createLink(formData: FormData) {
    try {
        const username = (formData.get("username") as string)?.trim();
        const description = (formData.get("description") as string)?.trim();
        const socialLinksString = formData.get("sociallinks") as string;
        const file = formData.get("file") as File | null;

        // Validate required fields
        if (!username || !description) {
            return { success: false, error: "Please fill all the fields." };
        }

        if (!file) {
            return { success: false, error: "No file uploaded." };
        }

        // Validate and parse social links
        let sociallinksArray: { name: string; value: string }[] = [];
        try {
            sociallinksArray = JSON.parse(socialLinksString || "[]");
        } catch (err) {
            return { success: false, error: "Invalid social links format." };
        }

        if (!Array.isArray(sociallinksArray) || sociallinksArray.length === 0) {
            return { success: false, error: "At least one social link is required." };
        }

        const sociallinks: string[] = sociallinksArray.map((link) => `${link.name}:${link.value}`);

        // Check if username already exists
        const existingUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.linkId,
            [Query.equal("username", username)]
        );

        if (existingUser.total > 0) {
            return { success: false, error: "Username already exists." };
        }

        // Upload image
        const imageUpload = await storage.createFile(
            appwriteConfig.imagebucketId,
            ID.unique(),
            file
        );

        // Generate image preview URL
        const imageUrl = storage.getFilePreview(
            appwriteConfig.imagebucketId,
            imageUpload.$id
        );

        // Save document to database
        const document = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.linkId,
            ID.unique(),
            {
                username,
                description,
                imageId: imageUpload.$id,
                sociallinks,
                imageUrl,
            }
        );

        return { success: true, data: document };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed to create link." };
    }
}

export async function getLinks() {
    try {
        const documents = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.linkId
        );

        return { success: true, data: documents.documents };
    } catch (error: any) {
        return { success: false, error: error.message || "Failed to fetch links." };
    }
}
