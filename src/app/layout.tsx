import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { quicksand } from '@/constants/fonts/quicksand'

import './globals.css'
import { ShortProvider } from '@/components/context/shortProvider'

export const metadata: Metadata = {
  title: 'kctsshort',
  description: 'Acortador de urls, gratuito y sin espera'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body suppressHydrationWarning className={quicksand.className}>
        <ShortProvider>{children}</ShortProvider>
      </body>
    </html>
  )
}
