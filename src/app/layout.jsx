import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'meThinks',
  description: 'A website to write and share md'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${inter.className} container mx-auto h-screen max-w-6xl ` }>
        { children }
      </body>
    </html>
  )
}
