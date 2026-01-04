import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me | Dillon Grannis</title>
        <meta name="description" content="Get in touch to schedule a tutoring session" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 tracking-tight inline-block">Contact Me</h1>
            <div className="h-0.5 bg-blue-900 mt-2"></div>
          </div>
          
          <div className="bg-blue-50 rounded-3xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
              I'd love to hear from you! Whether you want to schedule a session or just want to learn more, please reach out. I'm happy to provide advice, including about whether my services are right for you.
            </p>
            
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">Email me at:</p>
              <a 
                href="mailto:dillongranis@gmail.com" 
                className="text-blue-900 text-xl font-semibold hover:text-blue-800 transition-colors duration-200"
              >
                dillongranis@gmail.com
              </a>
            </div>

            <p className="text-gray-600 text-justify">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
