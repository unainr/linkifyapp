"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			className="p-2 rounded-full hover:opacity-80 transition-opacity"
			variant="secondary"
			size="icon"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? <Sun/> : <Moon/>}
		</Button>
	);
}
