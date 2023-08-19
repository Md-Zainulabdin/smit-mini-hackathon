'use client'
import './globals.css'
import Nav from './components/nav/page'
import AuthProvider from './components/AuthProvider/page'
import { BlogProvider } from '@/context/context'


export const metadata = {
  title: 'Shopping Cart',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <title>blogging App</title>
        </head>
        <body>
          <BlogProvider>
            <Nav />
            {children}
          </BlogProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
