import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Component from '@/components/component'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({ 
  children,
 }: Readonly<{ children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Component />
      </body>
    </html>
  )
}