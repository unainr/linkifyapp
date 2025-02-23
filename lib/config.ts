export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    imagebucketId: process.env.NEXT_PUBLIC_APPWRITE_IMAGE_BUCKET_ID!,
    linkId: process.env.NEXT_PUBLIC_APPWRITE_LINK_COLLECTION_ID!,

}