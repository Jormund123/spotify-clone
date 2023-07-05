"use client";

import { Box } from "./Box";
import {usePathname} from "next/navigation";
import { useMemo } from "react";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";


interface SidebarProps {
    children: React.ReactNode; // children can hold an array of react elements, string, number or a boolean.
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();

    //array of possible routes
    const routes = useMemo(()=>[
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search', // home is active every time the pathname is not search
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        },
    ],[pathname]); // routes are only rendered when the pathname is changed

    return (
        <div className = "flex h-full">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2 ">
                <Box>
                    Sidebar Navigation
                </Box>
            </div>
        </div>
    )
}
export default Sidebar;