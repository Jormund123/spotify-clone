import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import { Player } from '@/components/Player'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Unlimited Music',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const userSongs = await getSongsByUserId();
    
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        {/* Supabase Provider is used to access the Supabase Database */}
        <SupabaseProvider>
        {/* UserProvider is used to access the user and subscription details using a MyUserContextProvider as the context */}
            <UserProvider> 
        {/* The components wrapped inside the UserProvider have access to user and subscription details */}
                <ModalProvider/>
                <Sidebar songs = {userSongs} >{children}</Sidebar>
                <Player />
            </UserProvider>
        </SupabaseProvider>
        </body>
    </html>
  )
}
