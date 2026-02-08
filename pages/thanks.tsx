import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// This page is for spam/bot submissions - looks identical to thank-you.tsx
// but is a different URL so Google Ads conversion tracking only fires on real submissions
export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You | Dillon Grannis</title>
        <meta name="description" content="Thank you for reaching out!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* noindex so this page doesn't appear in search results */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 tracking-tight inline-block">Thank You!</h1>
            <div className="h-0.5 bg-blue-900 mt-2"></div>
          </div>
          
          <div className="bg-blue-50 rounded-3xl p-8 text-center">
            <div className="text-6xl mb-6">✓</div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your message has been sent successfully!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I typically respond within 24-48 hours. Looking forward to connecting with you!
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-2xl hover:bg-blue-800 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
