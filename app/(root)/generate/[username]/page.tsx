import GetLinks from "@/components/ui/forms/GetLinks";
import { Metadata } from "next";
import React from "react";

const UserPage = async ({
	params,
}: {
	params: Promise<{ username: string }>;
}) => {
	const {username} = (await params);
	return (
        <div className="flex flex-col items-center justify-center min-h-screen">

                <GetLinks  username={username}/>
    
    
    </div>
    )
};

export default UserPage;

export async function generateMetadata({
	params,
}: {
	params: Promise<{ username: string }>;
}): Promise<Metadata> {
        const {username} = (await params);
        return {
          title: `${username} | Linkify Profile`,
          description: `Check out ${username}'s links and content all in one place on Linkify.`,
        };
      }
      
