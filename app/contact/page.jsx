'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Left from '../components/Left'
import { Mail, MapPin, Send, Download } from 'lucide-react'
import Link from 'next/link'

const contacts = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "manishsuriyal21@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=manishsuriyal21@gmail.com",
  },
  {
    icon: <MapPin size={16} />,
    label: "Location",
    value: "Uttarakhand, India",
    href: null,
  },
  {
    icon: <Mail size={16} />,
    label: "GitHub",
    value: "github.com/manishsuriyal",
    href: "https://github.com/manishsuriyal",
  },
  {
    icon: <img src="/linkedin.png" alt="linkedin" className="w-4 h-4 object-contain" />,
    label: "LinkedIn",
    value: "manish-suriyal",
    href: "https://www.linkedin.com/in/manish-suriyal-8aaba82b0",
  },
  {
    icon: <img src="/twitter.png" alt="twitter" className="w-4 h-4 object-contain" />,
    label: "X (Twitter)",
    value: "@manish161615",
    href: "https://x.com/manish161615",
  },
]

const page = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('') // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_gjc785e',
        'template_q6vyfdp',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Yi2t776wcZU7VLKck'
      )
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className='dark:bg-zinc-900 min-h-screen w-full md:flex'>

      <Left />

      {/* Right Content */}
      <div className='md:w-3/5 p-4 md:p-8'>
        <div className='rounded-none md:rounded-xl border-y md:border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0D1117]'>

          {/* File Header */}
          <div className='flex items-center gap-2 px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 md:rounded-t-xl'>
            <div className='flex gap-1.5'>
              <span className='w-3 h-3 rounded-full bg-red-400' />
              <span className='w-3 h-3 rounded-full bg-yellow-400' />
              <span className='w-3 h-3 rounded-full bg-green-400' />
            </div>
            <p className='text-xs font-mono text-gray-500 dark:text-gray-400 ml-2'>
              manishsuriyal/<span className='text-gray-800 dark:text-gray-200'>Contact</span>
              <span className='text-gray-400'>.md</span>
            </p>
          </div>

          <div className='p-6 md:p-8 space-y-8'>

            {/* Hero */}
            <div className='text-center space-y-2 pb-6 border-b border-zinc-200 dark:border-zinc-700'>
              <p className='text-xs font-mono text-blue-500 dark:text-blue-400 tracking-widest uppercase'>
                — Get In Touch —
              </p>
              <h1 className='text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white'>
                Let's Work Together 🤝
              </h1>
              <p className='text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed'>
                I'm always open to new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out through any of the channels below.
              </p>

              {/* Resume Download */}
              <div className='flex justify-center pt-2'>
                <a
                  href="/Manish_Suriyal_Resume.pdf"
                  download="Manish_Suriyal_Resume.pdf"
                  className='flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm transition-all text-sm font-medium text-gray-700 dark:text-gray-200'>

                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Contact Links */}
            <div className='space-y-3'>
              <h2 className='text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
                📬 Contact Info
              </h2>
              <div className='grid grid-cols-1 gap-3'>
                {contacts.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm transition-all group'
                      >
                        <span className='text-blue-500 dark:text-blue-400'>{item.icon}</span>
                        <div className='flex-1'>
                          <p className='text-xs text-gray-400 dark:text-gray-500'>{item.label}</p>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors'>
                            {item.value}
                          </p>
                        </div>
                        <span className='text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors text-sm'>↗</span>
                      </Link>
                    ) : (
                      <div className='flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800'>
                        <span className='text-blue-500 dark:text-blue-400'>{item.icon}</span>
                        <div>
                          <p className='text-xs text-gray-400 dark:text-gray-500'>{item.label}</p>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Message Form */}
            <form onSubmit={handleSubmit} className='space-y-3'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='space-y-1'>
                  <label className='text-xs text-gray-500 dark:text-gray-400'>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Your name'
                    className='w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors'
                  />
                </div>
                <div className='space-y-1'>
                  <label className='text-xs text-gray-500 dark:text-gray-400'>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='your@email.com'
                    className='w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors'
                  />
                </div>
              </div>

              <div className='space-y-1'>
                <label className='text-xs text-gray-500 dark:text-gray-400'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder='Write your message here...'
                  className='w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors resize-none'
                />
              </div>

              <button
                type='submit'
                disabled={status === 'sending'}
                className='flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors cursor-pointer disabled:opacity-50'
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className='text-sm text-green-500'>✅ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className='text-sm text-red-500'>❌ Something went wrong. Try again.</p>
              )}
            </form>

          </div>
        </div>
      </div>

    </section>
  )
}

export default page