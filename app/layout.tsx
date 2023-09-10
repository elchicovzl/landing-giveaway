import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from "@clerk/localizations";

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { LandingNavbar } from '@/components/landing-navbar';

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing demo Sorteos',
  description: 'Pagina web para visualizar sorteos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es" suppressHydrationWarning>
        <body className={font.className}>
          <div className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
              <ToasterProvider />
              <ModalProvider />
              <LandingNavbar />

              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
