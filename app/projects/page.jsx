import React from 'react'
import Left from '../components/Left'
import { ExternalLink, Star, GitFork, Lock, Globe } from 'lucide-react'
import Link from 'next/link'

const projects = [
  
  {
    name: "SOP Generator",
    desc: "An AI-powered Statement of Purpose generator that helps students craft personalized SOPs for university applications.",
    href: "https://github.com/manish012321/SOP-Generator",
    visibility: "Public",
    stars: 8,
    forks: 1,
    tags: ["React", "OpenAI", "Tailwind"],
    img: "/sop.png",
  },
  {
    name: "Explain This Diff - Browser Extension",
    desc: "Reviewing a pull request often means reading a wall of red/green diff lines before understanding what actually changed and why. This extension adds a one-click summary layer on top of GitHub's own diff view, so a reviewer gets the gist immediately and can dig into specifics only where needed.",
    href: "https://github.com/manish012321/Explain-This-Diff",
    visibility: "Public",
    stars: 10,
    forks: 3,
    tags: ["Javascript", "AI", "Express"],
    img: null,
  },
  {
    name: "Vingo - Food Delivery App",
    desc: "A full-stack food delivery app with real-time order tracking, cart management, and payment integration.",
    href: "https://github.com/manish012321/vingo",
    visibility: "Public",
    stars: 12,
    forks: 3,
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    img: "/vingo.jpeg",
  },
  {
    name: "MacOS Portfolio",
    desc: "A macOS-inspired developer portfolio with draggable windows, dock navigation, and a terminal.",
    href: "https://github.com/manish012321/macos-portfolio",
    visibility: "Public",
    stars: 24,
    forks: 5,
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    img: "/macos.png",
  },
]

const page = () => {
  return (
    <section className='dark:bg-zinc-900 min-h-screen w-full md:flex'>

      <Left />

      {/* Right Content */}
      <div className='md:w-3/5 p-4 md:p-8'>
        <div className='rounded-none md:rounded-xl border-y md:border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0D1117]'>

          {/* Header */}
          <div className='flex items-center gap-2 px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 md:rounded-t-xl'>
            <div className='flex gap-1.5'>
              <span className='w-3 h-3 rounded-full bg-red-400' />
              <span className='w-3 h-3 rounded-full bg-yellow-400' />
              <span className='w-3 h-3 rounded-full bg-green-400' />
            </div>
            <p className='text-xs font-mono text-gray-500 dark:text-gray-400 ml-2'>
              manishsuriyal/<span className='text-gray-800 dark:text-gray-200'>Projects</span>
              <span className='text-gray-400'>.md</span>
            </p>
          </div>

          {/* Projects List */}
          <div className='divide-y divide-zinc-200 dark:divide-zinc-700'>
            {projects.map((project) => (
              <div key={project.name} className='p-5 md:p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors'>
                <div className='flex items-start gap-4'>

                  {/* Image or Placeholder */}
                  <div className='w-12 h-12 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shrink-0 flex items-center justify-center'>
                    {project.img ? (
                      <img src={project.img} alt={project.name} className='w-full h-full object-cover' />
                    ) : (
                      <span className='text-xl'>🗂️</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className='flex-1 min-w-0'>

                    {/* Title row */}
                    <div className='flex items-center gap-2 flex-wrap'>
                      <Link
                        href={project.href}
                        target='_blank'
                        className='text-base font-semibold text-blue-500 dark:text-blue-400 hover:underline'
                      >
                        {project.name}
                      </Link>
                      <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium
                        ${project.visibility === 'Public'
                          ? 'border-green-300 dark:border-green-700 text-green-600 dark:text-green-400'
                          : 'border-zinc-300 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400'
                        }`}>
                        {project.visibility === 'Public' ? <Globe size={10} /> : <Lock size={10} />}
                        {project.visibility}
                      </span>
                    </div>

                    {/* Description */}
                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed'>
                      {project.desc}
                    </p>

                    {/* Tags & Stats */}
                    <div className='flex items-center justify-between mt-3 flex-wrap gap-2'>
                      <div className='flex flex-wrap gap-1.5'>
                        {project.tags.map(tag => (
                          <span key={tag} className='text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono'>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className='flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400'>
                        <span className='flex items-center gap-1'>
                          <Star size={12} /> {project.stars}
                        </span>
                        <span className='flex items-center gap-1'>
                          <GitFork size={12} /> {project.forks}
                        </span>
                        <Link href={project.href} target='_blank' className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
                          <ExternalLink size={12} /> View
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}

export default page