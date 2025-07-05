import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CVE-2025-29927',
    description: 'Next.js CVE-2025-29927 PoC',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
