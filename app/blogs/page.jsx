import React from 'react'
import Left from '../components/Left'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const blogs = [
  {
    title: "Building a Full-Stack Food Delivery App with Next.js",
    desc: "A deep dive into how I built Vingo — covering authentication, real-time order tracking, and payment integration using the MERN stack and Next.js.",
    date: "May 12, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "MongoDB", "Full Stack"],
    href: "https://blog-ten-pearl-13.vercel.app/",
  },
  {
    title: "Why I Switched from React Router to Next.js App Router",
    desc: "My experience migrating a portfolio project from React Router to Next.js's App Router — the gotchas, the wins, and what I'd do differently.",
    date: "April 28, 2026",
    readTime: "4 min read",
    tags: ["Next.js", "React"],
    href: "https://blog-ten-pearl-13.vercel.app/",
  },
  {
    title: "Dark Mode Done Right: Hydration Issues in Next.js",
    desc: "How I fixed annoying hydration mismatch errors when implementing a persistent dark mode toggle using localStorage in Next.js.",
    date: "April 10, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://blog-ten-pearl-13.vercel.app/",
  },
  {
    title: "100 Days of Code: What I Learned Staying Consistent",
    desc: "Lessons from completing a 100-day coding challenge — habit building, avoiding burnout, and how consistency compounds over time.",
    date: "March 22, 2026",
    readTime: "3 min read",
    tags: ["Productivity", "Learning"],
    href: "https://blog-ten-pearl-13.vercel.app/",
  },
]

const page = () => {
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
              manishsuriyal/<span className='text-gray-800 dark:text-gray-200'>Blogs</span>
              <span className='text-gray-400'>.md</span>
            </p>
          </div>

          <div className='p-6 md:p-8 space-y-8'>

            {/* Header */}
            <div className='text-center space-y-2 pb-6 border-b border-zinc-200 dark:border-zinc-700'>
              <p className='text-xs font-mono text-blue-500 dark:text-blue-400 tracking-widest uppercase'>
                — Thoughts & Writing —
              </p>
              <h1 className='text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white'>
                From My Blog ✍️
              </h1>
              <p className='text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed'>
                Notes on what I'm building, learning, and figuring out along the way.
              </p>
            </div>

            {/* Blog List */}
            <div className='space-y-4'>
              {blogs.map((blog) => (
                <Link
                  key={blog.title}
                  href={blog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm transition-all group'
                >
                  <div className='flex items-start justify-between gap-3'>
                    <h2 className='text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors'>
                      {blog.title}
                    </h2>
                    <ArrowUpRight
                      size={16}
                      className='text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors shrink-0 mt-1'
                    />
                  </div>

                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed'>
                    {blog.desc}
                  </p>

                  <div className='flex items-center justify-between mt-4 flex-wrap gap-2'>
                    <div className='flex flex-wrap gap-1.5'>
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-xs px-2 py-0.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className='flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500'>
                      <span className='flex items-center gap-1'>
                        <Calendar size={12} /> {blog.date}
                      </span>
                      <span className='flex items-center gap-1'>
                        <Clock size={12} /> {blog.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default page