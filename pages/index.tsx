import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      <main className="min-h-screen bg-white scroll-smooth">
        {/* Hero Section */}
        <section className="pt-8 pb-3 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-blue-900 leading-tight tracking-tight">
              Unlock Your Academic Potential
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Math tutoring tailored to your learning style and goals
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-full rounded-[2.5rem] overflow-hidden animate-fade-in">
              <Image
                src="/images/littletutoringpic.jpg"
                alt="Dillon Grannis tutoring students at a blackboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* My Qualifications Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-blue-900 inline-block">My Qualifications</h2>
              <div className="h-0.5 bg-blue-900 mt-2"></div>
            </div>
            
            {/* University Cards - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* UT Austin */}
              <div className="bg-blue-50 rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-1">UT Austin</h3>
                <p className="text-sm text-gray-500 mb-4">#13 nationally in math — US News</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    Current Math PhD student
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    Provost's Graduate Excellence Fellowship
                  </li>
                </ul>
              </div>
              
              {/* UChicago */}
              <div className="bg-blue-50 rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-1">UChicago</h3>
                <p className="text-sm text-gray-500 mb-4">#6 nationally in math — US News</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    BA Mathematics with Honors (3.9 GPA)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    BA Economics
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    Minor in Computer Science
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    Straight As in Honors Physics Sequence
                  </li>
                </ul>
              </div>
            </div>

            {/* High School Scores */}
            <div className="bg-blue-50 rounded-3xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">High School Exams</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-blue-200">AP Calculus BC: <strong className="text-blue-900">5</strong></span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-blue-200">AP Physics 1: <strong className="text-blue-900">5</strong></span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-blue-200">AP Physics C: <strong className="text-blue-900">5</strong></span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-blue-200">AP Microeconomics: <strong className="text-blue-900">5</strong></span>
                <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-blue-200">SAT Math: <strong className="text-blue-900">790</strong></span>
              </div>
            </div>

            {/* College Math Courses */}
            <details className="bg-blue-50 rounded-3xl p-6 mb-6">
              <summary className="text-lg font-semibold text-blue-900 cursor-pointer hover:text-blue-700 transition-colors">
                View Full College Math Transcript
              </summary>
              <div className="mt-4 grid md:grid-cols-2 gap-x-8 text-sm text-gray-700">
                {/* Left Column */}
                <div className="flex flex-col">
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Accelerated Analysis I</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Accelerated Analysis II</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">B+</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Accelerated Analysis III</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Abstract Linear Algebra</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Honors Basic Algebra I</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Honors Basic Algebra II</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">B+</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Honors Basic Algebra III</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Basic Complex Variables</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Advanced Numerical Analysis</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col">
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Basic Theory of ODEs</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Markov Chains & Martingales</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Graduate Analysis I</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Graduate Analysis II</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">B</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Point-Set Topology</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Mathematical Probability</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Advanced Statistical Theory & Methods</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                  <div className="py-1 border-b border-blue-100 flex justify-between">
                    <span>Graduate Brownian Motion & Stochastic Calc</span>
                    <span className="font-semibold text-blue-900 w-6 text-left">A</span>
                  </div>
                </div>
          </div>
            </details>
            
            {/* Testimonials - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-3xl p-8">
                <p className="text-lg text-gray-700 italic leading-relaxed text-center mb-3">
                  "Dillon is the best math teacher I've ever had"
                </p>
                <p className="text-gray-500 text-center">– Hannah</p>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8">
                <p className="text-gray-700 italic leading-relaxed text-center mb-3">
                  "That's the best that's ever been explained to me"
                </p>
                <p className="text-gray-500 text-center">– Anthony</p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Style Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-blue-900 inline-block">Teaching Style</h2>
              <div className="h-0.5 bg-blue-900 mt-2"></div>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                I focus on intuition to demystify formulas. I lead with examples to make abstract theory concrete. I motivate material by discussing its purpose upfront. I am flexible, adapting to my tutees' learning styles. I am professional, compassionate and ambitious about your learning.
              </p>
            </div>
          </div>
        </section>

        {/* Why Get Tutoring Section - Side by Side */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-blue-900 inline-block">Why Get Tutoring?</h2>
              <div className="h-0.5 bg-blue-900 mt-2"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-3xl p-8">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-medium text-blue-900 inline-block">Struggling students</h3>
                  <div className="h-px bg-blue-900 mt-2"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Since each class tends to build on the last, falling behind a little can make your life a lot harder. Tutoring is a great way to keep your head above water. Also, some students struggle in math because they find it boring or dumb. I love math and try to make it exciting for my students by focusing on the cool concepts instead of drilling plug-and-chug procedures. This approach can really help students who don't like math.
                </p>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-medium text-blue-900 inline-block">Thriving students</h3>
                  <div className="h-px bg-blue-900 mt-2"></div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  I was in this boat myself. I breezed through my classes but regret not being challenged more. That changed in high school. I self-studied pre-calculus and Algebra II so I could take calculus early and then begin dual enrollment. I was able to take 8 classes at Columbia University before finishing high school. If you find your math classes easy, I can create a learning plan that allows you to reach your full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Session Format Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-blue-900 inline-block">Session Format</h2>
              <div className="h-0.5 bg-blue-900 mt-2"></div>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
              I typically guide students through practice problems from their course, answer their questions or introduce them to new topics of their request. But I'm open to any format best serving your needs — feel free to request any style of tutoring you think makes sense for you.
            </p>
            </div>
          </div>
        </section>

        {/* Rate Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-blue-900 inline-block">Rate</h2>
              <div className="h-0.5 bg-blue-900 mt-2"></div>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                My standard rate is <span className="font-semibold text-blue-900">$100 per hour</span>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <p className="text-lg text-gray-600 mb-6">Ready to get started?</p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-900 text-white px-10 py-4 text-lg font-medium rounded-full hover:bg-blue-800 transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
