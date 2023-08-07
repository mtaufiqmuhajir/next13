import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import LayoutProvider from './layoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Judul website',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}
