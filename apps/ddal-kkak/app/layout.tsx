import './globals.css'
import '@ddal-kkak/tailwind-config/base.tailwind.css'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import { Open_Sans } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

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
    <html lang="en" className="bg-neutral-50 text-neutral-700">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={`${sans.className} flex min-h-screen justify-between w-full flex-col`}>
        <Header />
        <main className="grow w-full max-w-screen-xl px-10 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
