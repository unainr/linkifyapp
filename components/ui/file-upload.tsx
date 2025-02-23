import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload, IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
const mainVariant = {
	initial: {
		x: 0,
		y: 0,
	},
	animate: {
		x: 20,
		y: -20,
		opacity: 0.9,
	},
};

const secondaryVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export const FileUpload = ({
	onChange,
}: {
	onChange?: (files: File[]) => void;
}) => {
	const [files, setFiles] = useState<File[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const handleFileChange = (newFiles: File[]) => {
		setFiles((prevFiles) => [...prevFiles, ...newFiles]);
		onChange && onChange(newFiles);

		// Create preview URL for the first image
		if (newFiles[0] && newFiles[0].type.startsWith("image/")) {
			const previewUrl = URL.createObjectURL(newFiles[0]);
			setImagePreview(previewUrl);
		}
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};
	const handleCancel = () => {
		setFiles([]);
		setImagePreview(null);
	};
	const { getRootProps, isDragActive } = useDropzone({
		multiple: false,
		noClick: true,
		onDrop: handleFileChange,
		onDropRejected: (error) => {
			console.log(error);
		},
	});

	return (
		<div className="w-full" {...getRootProps()}>
			<motion.div
				onClick={handleClick}
				whileHover="animate"
				className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden">
				<input
					ref={fileInputRef}
					id="file-upload-handle"
					type="file"
					onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
					className="hidden"
				/>
				<div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
					<GridPattern />
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
						Upload file
					</p>
					<p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
						Drag or drop your files here or click to upload
					</p>
					<div className="relative w-full  max-w-xl mx-auto">
						{files.length > 0 &&
							files.map((file, idx) => (
								<motion.div
									key={"file" + idx}
									layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
									className={cn(
										"relative overflow-hidden z-40 flex flex-col items-center justify-center h-[400px] p-4 mt-4 w-full mx-auto rounded-xl",
										"shadow-lg hover:shadow-xl transition-shadow duration-300"
									)}>
									{imagePreview && (
										<div className="flex flex-1 justify-center w-full h-[400px] relative p-5 lg:p-10">
											<Image
												src={imagePreview}
												alt="Upload preview"
												fill
												className="object-contain rounded-md"
												priority
											/>
											<button
												className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
												onClick={handleCancel}>
												<IconX size={20} />
											</button>
										</div>
									)}

									<div className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											layout
											className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 ">
											{file.type}
										</motion.p>

										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											layout>
											modified{" "}
											{new Date(file.lastModified).toLocaleDateString()}
										</motion.p>
									</div>
								</motion.div>
							))}
						{!files.length && (
							<motion.div
								layoutId="file-upload"
								variants={mainVariant}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 20,
								}}
								className={cn(
									"relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
									"shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
								)}>
								{isDragActive ? (
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="text-neutral-600 flex flex-col items-center">
										Drop it
										<IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
									</motion.p>
								) : (
									<IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
								)}
							</motion.div>
						)}

						{!files.length && (
							<motion.div
								variants={secondaryVariant}
								className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"></motion.div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export function GridPattern() {
	const columns = 41;
	const rows = 11;
	return (
		<div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
			{Array.from({ length: rows }).map((_, row) =>
				Array.from({ length: columns }).map((_, col) => {
					const index = row * columns + col;
					return (
						<div
							key={`${col}-${row}`}
							className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
								index % 2 === 0
									? "bg-gray-50 dark:bg-neutral-950"
									: "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
							}`}
						/>
					);
				})
			)}
		</div>
	);
}
