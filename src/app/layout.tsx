import { defaultMetadata } from '../constants/metadata'
import './globals.css'
import { CookieBanner, Footer, NavBar } from '../ui/components'
import { GoogleAnalytics } from '../ui/components/GoogleAnalytics/GoogleAnalytics'

export const metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className='flex min-h-screen flex-col bg-black text-white antialiased'>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <NavBar />
        <div className='pt-20'>
          <main className='flex-1'>{children}</main>
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
