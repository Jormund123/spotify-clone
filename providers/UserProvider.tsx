"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderPros {
    children: React.ReactNode;
}
const UserProvider: React.FC<UserProviderPros> = ({children}) => {
    return(
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default UserProvider;