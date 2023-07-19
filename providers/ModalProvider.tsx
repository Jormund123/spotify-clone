"use client"

import { AuthModal } from "@/components/AuthModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //since we are doing server side rendering, modals can cause hydration errors
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    
    return (
        <>
            <AuthModal/>
        </>
    );
}

export default ModalProvider;