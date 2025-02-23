import z from "zod";

export const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: "username must be 2" })
		.max(40, { message: "username must be 40" }),
	description: z.string().max(200, { message: "description must be 200" }),
	sociallinks: z
		.array(z.string().url({ message: "Invalid URL format" }))
		.min(1, { message: "At least one social link is required" }),
	file: z.custom<File[]>(),
});


