import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dillon Grannis | Personal Tutoring</title>
        <meta name="description" content="Virtual tutoring in math, physics, economics, and computer science" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-blue-900">
              Unlock Your Academic Potential
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Personalized tutoring tailored to your learning style and goals
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="pb-8 px-4 -mt-4">
          <div className="max-w-6xl mx-auto">
            <div className="w-full">
              <Image
                src="/images/tutoringpic.jpeg"
                alt="Dillon Grannis tutoring students at a blackboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* My Service Section */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900">My Service:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Virtual tutoring in math, physics, economics, and computer science. Available to anyone.
            </p>
          </div>
        </section>

        {/* About You Section - Side by Side */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-blue-900">About You:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Struggling Students - Left */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Struggling students:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Since each class tends to build on the last, falling behind a little can make your life a lot harder. Tutoring is a great way to keep your head above water. Also, some students struggle in math because they find it boring or dumb. I love math and try to make it exciting for my students by focusing on the cool concepts instead of drilling plug-and-chug procedures. This approach can really help students who don't like math.
                </p>
              </div>

              {/* Thriving Students - Right */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Thriving students:</h3>
                <p className="text-gray-700 leading-relaxed">
                  I was in this boat myself. I breezed through my classes but regret not being challenged more. That changed in high school. I self-studied pre-calculus and Algebra II so I could take calculus early and then begin dual enrollment. I was able to take 8 classes at Columbia University before finishing high school. If your child finds their math classes easy, I'd especially recommend my services. I can create a learning plan that allows them to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Background Section */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900">My background:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I grew up in New York City, attending the charter school Success Academy K-12. I graduated cum laude from UChicago with a double major in Math and Econ and a minor in Computer Science. I'm currently doing a math PhD at UT Austin, with the prestigious Provost's Graduate Excellence Fellowship.
            </p>
          </div>
        </section>

        {/* Why Me Section */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900">Why me?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a great teacher. I focus on intuition to demystify formulas. I lead with examples to make abstract theory concrete. I discuss applications to motivate material. I am flexible, adapting to my tutees' learning styles and focusing on their individual learning objectives. I am professional, compassionate and ambitious about your learning.
            </p>
            
            {/* Testimonials */}
            <div className="space-y-4 mt-8">
              <p className="text-lg text-gray-700 italic">
                "Dillon is the best math teacher I've ever had"
              </p>
              <p className="text-gray-600">– Hannah</p>
              
              <p className="text-lg text-gray-700 italic mt-6">
                "Again, that's the best that's ever been explained to me"
              </p>
              <p className="text-gray-600">– Anonymous</p>
            </div>
          </div>
        </section>

        {/* Session Format Section */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900">Session format:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I typically guide students through practice problems from their course, answer their questions or introduce them to new topics of their request. But I'm open to any format best serving the student's needs — feel free to request any style of tutoring you think makes sense for you.
            </p>
          </div>
        </section>

        {/* Rate Section */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-900">Rate:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              My standard rate is $100 per hour.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-900 text-white px-8 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
