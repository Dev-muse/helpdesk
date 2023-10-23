import './globals.css'
import { Inter } from 'next/font/google';
 
// app will build app at build time dynamically cos it relies on cookies data
export const dynamic = 'force-dynamic';

// fonts
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Help Desk | Every little helps',
  description: 'Help desk web application that collates all tech issues that needs to be resolved',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
