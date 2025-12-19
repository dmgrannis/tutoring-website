import Head from 'next/head'
import Navbar from '@/components/Navbar'

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
      <main className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-12 text-blue-900">Contact Me</h1>
          
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'd love to hear from you! Whether you have questions about my tutoring services, want to schedule a session, or just want to learn more, feel free to reach out. I'm happy to provide advice, including about whether my services are right for you.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Email me at <a 
                href="mailto:dillongranis@gmail.com" 
                className="text-blue-900 hover:opacity-80 underline"
              >
                dillongranis@gmail.com
              </a>
            </p>

            <div className="mt-12 text-center text-gray-700">
              <p>I typically respond within 24-48 hours. Looking forward to hearing from you!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
