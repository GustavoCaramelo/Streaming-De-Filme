import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { CssBaseline } from '@mui/material'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Clone da interface do Netflix com Next.js e MUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CssBaseline />
        <Header />
        {children}
      </body>
    </html>
  )
}