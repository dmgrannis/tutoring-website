import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Message presets for short URLs (e.g., /contact?preset=help) and buttons
// Edit these messages anytime without changing your ad URLs
const MESSAGE_PRESETS: Record<string, { label: string; message: string }> = {
  help: {
    label: 'See if I can help',
    message: `Hi Dillon,

I'm looking for tutoring to help [a student] with [a test, course or topic].

Is this something you can help with? [Optional: Any other questions.]

Thanks!`,
  },
  trial: {
    label: 'Schedule a trial session',
    message: `Hi Dillon,

I'd like to schedule a trial session to help [a student] with [a test, course or topic].

Here are a few times that work:
[Times]

Do any of these work for you?

Thanks!`,
  },
  consultation: {
    label: 'Schedule a free consultation',
    message: `Hi Dillon,

I'd like to schedule a free consultation to discuss how you could help [a student] with [a test, course or topic].

Here are a few times that work:
[Times]

Do any of these work for you?

Thanks!`,
  },
  plan: {
    label: 'Get a custom learning plan',
    message: `Hi Dillon,

I'm interested in having you propose a custom learning plan for [the student].

Objective: [What's your end goal?]
Current progress: [The student's current understanding / grade level / background]
Timing: [When do you want your goal to be completed? How much time can the student commit?]

Thanks!`,
  },
}

export default function Contact() {
  const router = useRouter()
  const editorRef = useRef<HTMLDivElement>(null)
  const isUserTyping = useRef(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Render message with highlighted brackets
  const renderHighlightedMessage = (text: string): string => {
    if (!text) return ''
    // Escape HTML entities first, then highlight brackets
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    // Wrap [bracketed text] in highlighted spans
    return escaped
      .replace(/\[([^\]]+)\]/g, '<span class="bracket-highlight">[$1]</span>')
      .replace(/\n/g, '<br>')
  }

  // Update editor content when message changes from external source (not user typing)
  useEffect(() => {
    if (editorRef.current && !isUserTyping.current) {
      editorRef.current.innerHTML = renderHighlightedMessage(formData.message)
    }
    isUserTyping.current = false
  }, [formData.message])

  // Pre-fill form fields from URL query parameters or presets
  useEffect(() => {
    if (router.isReady) {
      const { message, name, email, preset } = router.query
      
      // Check for preset first
      if (typeof preset === 'string' && MESSAGE_PRESETS[preset]) {
        setFormData(prev => ({
          ...prev,
          message: MESSAGE_PRESETS[preset].message
        }))
      } else if (message || name || email) {
        // Fall back to direct query parameters
        setFormData(prev => ({
          name: typeof name === 'string' ? name : prev.name,
          email: typeof email === 'string' ? email : prev.email,
          message: typeof message === 'string' ? message : prev.message
        }))
      }
    }
  }, [router.isReady, router.query])

  // Handle preset button click
  const selectPreset = (presetKey: string) => {
    if (MESSAGE_PRESETS[presetKey]) {
      setFormData(prev => ({
        ...prev,
        message: MESSAGE_PRESETS[presetKey].message
      }))
    }
  }

  // Handle contenteditable input
  const handleMessageInput = () => {
    if (editorRef.current) {
      isUserTyping.current = true
      // Get plain text from contenteditable, preserving line breaks
      const text = editorRef.current.innerText
      setFormData(prev => ({ ...prev, message: text }))
      
      // Clear error messages when user starts typing
      if (submitStatus !== 'idle') {
        setSubmitStatus('idle')
        setErrorMessage('')
      }
    }
  }

  // Re-apply highlights when user finishes editing
  const handleMessageBlur = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = renderHighlightedMessage(formData.message)
    }
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate-limit'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [canSubmit, setCanSubmit] = useState(true)

  // Rate limiting is checked when email is entered and before submission

  const checkRateLimit = (email?: string) => {
    if (typeof window === 'undefined') return

    if (!email) return

    const today = new Date().toDateString()
    const storedData = localStorage.getItem('contactFormSubmissions')
    
    if (storedData) {
      const submissions = JSON.parse(storedData)
      const emailKey = email.toLowerCase().trim()
      const emailSubmissions = submissions[emailKey] || {}
      const todayCount = emailSubmissions[today] || 0
      
      // Limit: 5 emails per day per email address
      if (todayCount >= 5) {
        setCanSubmit(false)
        setSubmitStatus('rate-limit')
        setErrorMessage('You have reached the daily submission limit (5 emails per day). Please try again tomorrow.')
      } else {
        setCanSubmit(true)
        setSubmitStatus('idle')
        setErrorMessage('')
      }
    }
  }

  const updateRateLimit = (email: string) => {
    if (typeof window === 'undefined') return

    const today = new Date().toDateString()
    const storedData = localStorage.getItem('contactFormSubmissions')
    const submissions = storedData ? JSON.parse(storedData) : {}
    
    const emailKey = email.toLowerCase().trim()
    const emailSubmissions = submissions[emailKey] || {}
    
    // Increment today's count for this email
    emailSubmissions[today] = (emailSubmissions[today] || 0) + 1
    
    // Clean up old dates (keep only last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    
    Object.keys(emailSubmissions).forEach(date => {
      if (new Date(date) < sevenDaysAgo) {
        delete emailSubmissions[date]
      }
    })
    
    submissions[emailKey] = emailSubmissions
    
    // Clean up emails with no recent submissions
    Object.keys(submissions).forEach(key => {
      const emailData = submissions[key]
      const hasRecentData = Object.keys(emailData).some(date => {
        return new Date(date) >= sevenDaysAgo
      })
      if (!hasRecentData) {
        delete submissions[key]
      }
    })
    
    localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // Check rate limit when email is entered
    if (e.target.name === 'email' && e.target.value.trim()) {
      checkRateLimit(e.target.value.trim())
    }
    
    // Clear error messages when user starts typing
    if (submitStatus !== 'idle' && e.target.name !== 'email') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please fill in all fields.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    // Check rate limit again with email
    if (!canSubmit) {
      checkRateLimit(formData.email.trim())
      return
    }

    // Double-check rate limit before submitting
    const emailKey = formData.email.toLowerCase().trim()
    const today = new Date().toDateString()
    const storedData = typeof window !== 'undefined' ? localStorage.getItem('contactFormSubmissions') : null
    
    if (storedData) {
      const submissions = JSON.parse(storedData)
      const emailSubmissions = submissions[emailKey] || {}
      const todayCount = emailSubmissions[today] || 0
      
      if (todayCount >= 5) {
        setSubmitStatus('rate-limit')
        setErrorMessage('You have reached the daily submission limit (5 emails per day). Please try again tomorrow.')
        setCanSubmit(false)
        return
      }
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // FormSubmit - no configuration needed, just change the email address below
      const response = await fetch('https://formsubmit.co/ajax/dillongrannis@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Tutoring Inquiry from ${formData.name}`, // Unique subject per sender
          _replyto: formData.email, // Reply goes directly to sender
          _captcha: false
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      if (data.success) {
        // Update rate limit with email address
        updateRateLimit(formData.email.trim())
        
        // Redirect to thank you page
        router.push('/thank-you')
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
      
    } catch (error: any) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          
          <div className="bg-blue-50 rounded-3xl p-8 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Ready to book your first session? Have a question about my service or qualifications? Please don't hesitate to reach out. I respond within 48 hours.
            </p>

            {/* Prebuilt Messages */}
            <div className="mb-8">
              <p className="text-gray-700 mb-3">
                Here are some templates for your convenience. Just fill in the highlighted sections and hit send!
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(MESSAGE_PRESETS).map(([key, preset]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectPreset(key)}
                    className="px-4 py-2 bg-white border border-blue-200 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting || !canSubmit}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting || !canSubmit}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <div
                    ref={editorRef}
                    contentEditable={!isSubmitting && canSubmit}
                    onInput={handleMessageInput}
                    onBlur={handleMessageBlur}
                    className={`w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[168px] whitespace-pre-wrap ${
                      isSubmitting || !canSubmit ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                    }`}
                    style={{ wordBreak: 'break-word' }}
                    suppressContentEditableWarning={true}
                  />
                  {!formData.message && (
                    <div className="absolute top-3 left-4 text-gray-400 pointer-events-none">
                      What can I help you with?
                    </div>
                  )}
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-2xl bg-green-50 border border-green-200">
                  <p className="text-green-800 font-medium">
                    ✓ Message sent successfully! I'll get back to you within 24-48 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              )}

              {submitStatus === 'rate-limit' && (
                <div className="p-4 rounded-2xl bg-yellow-50 border border-yellow-200">
                  <p className="text-yellow-800 font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !canSubmit}
                className="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-2xl hover:bg-blue-800 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
