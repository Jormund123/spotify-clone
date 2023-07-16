"use client"

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
            Modals!
        </>
    );
}

export default ModalProvider;