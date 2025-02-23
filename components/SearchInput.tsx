"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const SearchInput = () => {
    const  router = useRouter();
	const [link, setLink] = useState("");
	const handleCreateTree = () => {
        router.push(`/generate/?username=${link}`);
    };
	return (
		<>
			<Input
				type="text"
            onChange={(e) => setLink(e.target.value)}
			placeholder="linkify/@yourhandle"
			className="w-full sm:w-96 px-6 py-4  border-1 border-gray-700 bg-gray-700/60 backdrop-blur-sm text-white placeholder:text-gray-400  transition-all duration-300"
			/>
			<Button
				onClick={() => {
					handleCreateTree();
				}}
				type="submit"
				variant={"destructive"}
				 className="bg-red-500 hover:bg-red-600"
				>
				Claim Your Link
			</Button>
		</>
	);
};

export default SearchInput;
