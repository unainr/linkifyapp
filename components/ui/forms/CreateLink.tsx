"use client";

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileUpload } from "../file-upload";
import { createLink } from "@/lib/actions/create.link";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../toast";
import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
// ✅ Define Form Schema
const formSchema = z.object({
	username: z.string().min(3, "Username must be at least 3 characters."),
	description: z.string().optional(),
	sociallinks: z
		.array(
			z.object({
				name: z.string().min(1, "Platform name is required."),
				value: z.string().url("Enter a valid URL."),
			})
		)
		.min(1, "At least one social link is required."),
	file: z.instanceof(File).optional(),
});

const CreateLink = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const [files, setFiles] = useState<File[]>([]);
	const searchParams = useSearchParams()
  const usernameFormParams = searchParams.get("username") || ""
  
  


	// 🎯 React Hook Form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: usernameFormParams,
			description: "",
			sociallinks: [{ name: "", value: "" }], // ✅ Default structure
			file: undefined,
		},
	});

  useEffect(() => {
		// Update the form value when usernameFromParams changes
		form.setValue("username", usernameFormParams);
	}, [usernameFormParams, form]);

	// 🎯 Use Field Array for Dynamic Social Links
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "sociallinks",
	});

	// 🎯 Handle File Upload
	// Handle File Upload
const handleFileUpload = (uploadedFiles: File[]) => {
  if (uploadedFiles.length > 0) {
    const fileSize = uploadedFiles[0].size / (1024 * 1024); // Convert bytes to MB
    const maxSize = 10; // Set max size to 10MB

    if (fileSize > maxSize) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Image size should be less than ${maxSize}MB.`,
        action: <ToastAction altText="Try again">Try Again</ToastAction>,
      });
      return; // Prevent setting the file
    }

    setFiles(uploadedFiles);
  }
};


	// 🎯 Submit Handler
	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoading(true);
		try {
			const formData = new FormData();
			formData.append("username", values.username);
			formData.append("description", values.description || "");
			formData.append("sociallinks", JSON.stringify(values.sociallinks));

			if (files.length > 0) {
				formData.append("file", files[0]);
			}
     

			const response = await createLink(formData);
			if (response.success) {
				toast({ title: "Link created successfully!" });
				form.reset();
				setFiles([]);
				router.push(`/generate/${values.username}`);
			} else {
				toast({ title: "Failed to create link", description: response.error });
			}
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Error",
				description: error.message || "Something went wrong",
				action: <ToastAction altText="Try again">Try Again</ToastAction>,
			});
		} finally {
			setLoading(false);
		}
	}

	return (
    <div className="container mx-auto py-12 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Form Section */}
      <div className=" p-6 rounded-lg ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter username"
                      {...field}
                      className=" rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter description"
                      {...field}
                      className=" rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Social Links */}
            <div>
              <FormLabel>Social Links</FormLabel>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex gap-2 items-center mb-2"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name={`sociallinks.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Platform (e.g. Twitter, LinkedIn)"
                            {...field}
                            className=" rounded-md focus:ring-2 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {/* URL Field */}
                  <FormField
                    control={form.control}
                    name={`sociallinks.${index}.value`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="URL"
                            {...field}
                            className=" rounded-md focus:ring-2 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {/* Remove Button */}
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => remove(index)}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      <Trash className="h-4 w-4 text-white" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={() => append({ name: "", value: "" })}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white"
              >
                + Add Another Social Link
              </Button>
            </div>

            {/* File Upload */}
            <FileUpload onChange={handleFileUpload} />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>

      {/* Image Section */}
      <div className="relative bg-gradient-to-r from-red-800 to-red-500 rounded-lg  overflow-hidden">
        <Image
          src="/banner.jpeg"
          alt="Social Media"
          width={700}
          height={400} /* Increased height for better visibility and balance */
          className="w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 to-transparent"></div> {/* Subtle overlay for depth */}
      </div>
    </div>
  </div>
	);
};

export default CreateLink;
