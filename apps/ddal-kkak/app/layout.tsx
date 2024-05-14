import './globals.css'
import '@ddal-kkak/tailwind-config/base.tailwind.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import ReactQueryProviders from 'context/ReactQueryProvider'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '[딸깍] 세상을 평정할 웹빌더',
    template: '딸깍 | %s',
  },
  description: '딸깍으로 세상을 평정해보세요.',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${sans.className}`}>
        <ReactQueryProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  )
}
