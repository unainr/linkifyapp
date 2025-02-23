"use client";
import { getLinks } from "@/lib/actions/create.link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import Link from "next/link";
import GetLinkSkeleton from "@/components/skeleton/GetLinkSkeleton";
import Image from "next/image";


const GetLinks = ({ username }: { username: string }) => {
	const [userData, setUserData] = useState<any | null>(null);

	useEffect(() => {
		const fetchLinks = async () => {
			try {
				const response: any = await getLinks();
				if (response.success && Array.isArray(response.data)) {
					// Filter only the data for the given username
					const user = response.data.find(
						(user: any) => user.username === username
					);
					setUserData(user || null);
				}
			} catch (error: any) {
				console.error("Error in GetLinks:", error);
			}
		};
		fetchLinks();
	}, [username]);

	return (
		<>
			{userData ? (
				<div className="min-h-screen w-full bg-gradient-to-b from-background via-background/90 to-background/50">
					{/* Refined background with subtle pattern */}
					<div className="fixed inset-0 -z-10 h-full w-full">
						<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]" />
						<div className="absolute inset-0 bg-gradient-to-tr from-red-500/2 via-transparent to-blue-500/2" />
					</div>

					<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
						{/* Elegant Profile Section */}
						<section className="text-center space-y-8">
							<div className="relative inline-block">
								<div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full blur-xl" />
								<div className="relative">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-75" />
									<Image
										src={userData.imageUrl}
										alt="Profile Picture"
										width={112}
										height={112}
										priority
										className="relative w-28 h-28 rounded-full object-cover border-[3px] border-white dark:border-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300"
									/>
								</div>
							</div>

							<div className="space-y-3">
								<h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
									{`@${userData.username}`}
								</h1>
								<p className="text-base text-muted-foreground max-w-lg mx-auto">
									{userData.description}
								</p>
							</div>
						</section>

						{/* Clean Links Section */}
						<section className="mt-12 space-y-3">
							{Array.isArray(userData.sociallinks) &&
								userData.sociallinks.map((link: string, index: number) => {
									if (!link.includes("https://") && !link.includes("http://"))
										return null;

									const parts = link.split(":");
									const name = parts[0];
									const url = parts.slice(1).join(":").trim();

									return (
										<Button
											key={index}
											variant="outline"
											className="w-full h-14 text-sm font-medium group relative border border-neutral-200 dark:border-neutral-800 hover:border-red-500 rounded-lg transition-all duration-300 overflow-hidden bg-white/5 backdrop-blur-sm"
											asChild>
											<Link
												href={url}
												target="_blank"
												rel="noopener noreferrer">
												<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent w-0 group-hover:w-full transition-all duration-500" />
												<div className="relative flex items-center justify-center gap-3">
													<Globe className="w-5 h-5 opacity-80 group-hover:text-red-500 group-hover:rotate-12 transition-all duration-300" />
													<span className="font-medium tracking-wide group-hover:text-red-500 transition-colors">
														{name}
													</span>
												</div>
											</Link>
										</Button>
									);
								})}
						</section>

						{/* Minimal Footer */}
						<footer className="mt-16 text-center text-sm text-muted-foreground">
							<div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 pb-4">
								© 2025 {userData.username}
							</div>
							<a
								href="mailto:hello@example.com"
								className="inline-flex items-center px-5 py-2 text-red-500 hover:text-red-600 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-red-500">
								<Mail className="w-4 h-4 mr-2" />
								Contact
							</a>
						</footer>
					</main>
				</div>
			) : (
				<GetLinkSkeleton />
			)}
		</>
	);
};

export default GetLinks;
