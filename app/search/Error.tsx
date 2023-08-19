"use client"

import { Box } from "@/components/Box";

export const Error: React.FC<{}> = () => {
    return (
        <Box className = "h-full flex items-center justify-center">
            <div className = "text-neutral-400">
                Something Went Wrong.
            </div>
        </Box>
    )
};