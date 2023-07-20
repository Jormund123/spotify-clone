import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Unlimited Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
                <Sidebar>{children}</Sidebar>
            </UserProvider>
        </SupabaseProvider>
        </body>
    </html>
  )
}
