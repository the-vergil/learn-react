import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning React',
  description: 'Learning React: function call, props, use-state hook, routing, real vs virtual dom, api call using axios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header/> */}
        {children}
      </body>
    </html>
  )
}
