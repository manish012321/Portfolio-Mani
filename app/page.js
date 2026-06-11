'use client'
import React from 'react'
import Left from './components/Left'
import { motion } from "motion/react"
import BoxGame from './components/BoxGame'


const page = () => {

  const techStack = {
    Frontend: [
      { name: "React", icon: "/reactjs-svgrepo-com.svg" },
      { name: "Next.js", icon: "/next-js-svgrepo-com.svg" },
      { name: "JavaScript", icon: "/javascript-svgrepo-com.svg" },
      { name: "Tailwind", icon: "/tailwind-css-svgrepo-com.svg" },
      { name: "Redux", icon: "/redux-svgrepo-com.svg" },
      { name: "HTML", icon: "/html-5-svgrepo-com.svg" },
      { name: "Vite", icon: "/vitejs-svgrepo-com.svg" },
    ],
    Backend: [
      { name: "Express", icon: "/express-svgrepo-com.svg" },
      { name: "MongoDB", icon: "/mongo-svgrepo-com.svg" },
      { name: "Firebase", icon: "/firebase-svgrepo-com.svg" },
      { name: "Docker", icon: "/docker-svgrepo-com.svg" },
    ],
    "Tools & DevOps": [
      { name: "Git", icon: "/git-svgrepo-com.svg" },
      { name: "GitHub", icon: "/github-svgrepo-com.svg" },
      { name: "Vercel", icon: "/vercel-svgrepo-com.svg" },
    ],
    "Cloud & Integrations": [
      { name: "AWS", icon: "/aws-svgrepo-com.svg" },
      { name: "NPM", icon: "/npm-svgrepo-com.svg" },
    ],
  }

  const focuses = [
    {
      emoji: "🚀",
      title: "Building Full-Stack Apps",
      desc: "Crafting scalable web apps with Next.js, Node.js, and MongoDB.",
    },
    {
      emoji: "📚",
      title: "Learning DSA & System Design",
      desc: "Strengthening problem-solving skills and understanding large-scale system architecture.",
    },
    {
      emoji: "🌐",
      title: "Open Source Contributions",
      desc: "Exploring and contributing to open source projects to grow and give back to the community.",
    },
    {
      emoji: "💼",
      title: "Seeking Internship Opportunities",
      desc: "Looking for internship roles where I can contribute, learn, and grow as a developer.",
    },
  ]

  return (
    <section className='dark:bg-zinc-900 min-h-screen w-full md:flex'>

      <Left />

      {/* Right Content */}
      <div className='md:w-3/5 p-4 md:p-8'>

        {/* Card */}
        <div className='rounded-none md:rounded-xl border-y md:border border-zinc-200 dark:border-zinc-700 bg-gray-200 dark:bg-[#0D1117]'>

          {/* File Header */}
          <div className='flex items-center gap-2 px-4 py-3 border-b border-zinc-400 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 md:rounded-t-xl'>
            <div className='flex gap-1.5'>
              <span className='w-3 h-3 rounded-full bg-red-400' />
              <span className='w-3 h-3 rounded-full bg-yellow-400' />
              <span className='w-3 h-3 rounded-full bg-green-400' />
            </div>
            <p className='text-xs font-mono text-gray-500 dark:text-gray-400 ml-2'>
              manishsuriyal/<span className='text-gray-800 dark:text-gray-200'>Overview</span>
              <span className='text-gray-400'>.md</span>
            </p>
          </div>

          {/* Content */}
          <div className='p-6 md:p-8 space-y-8'>

            {/* Hero Section */}
            <div className='text-center space-y-3 pb-6 border-b border-zinc-400 dark:border-zinc-700'>
              <p className='text-xs font-mono text-blue-500 dark:text-blue-400 tracking-widest uppercase'>
                — Welcome to My Digital Space —
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 4 }}
                 whileHover={{ scale: 1.1, color: "#3b82f6" }}
                className='text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-800'>
                Hi, I'm Manish Suriyal 👋
              </motion.h1>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                Full-Stack Developer · BSc IT Student · Uttarakhand, India
              </p>
            </div>

            {/* About Section */}
            <div className='space-y-3 pb-6 border-b border-zinc-400 dark:border-zinc-700'>
              <h2 className='text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
                <span>🧑‍💻</span> About Me
              </h2>
              <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                I'm a passionate <span className='text-blue-500 font-medium'>Full-Stack Developer</span> and
                BSc IT student from <span className='font-medium text-gray-800 dark:text-gray-200'>Uttarakhand, India</span>.
                This portfolio is a reflection of my journey in crafting impactful, scalable,
                and user-centric web applications using modern technologies.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-600 border-l-2 border-blue-400 pl-3'>
                I believe in learning by building — every project here represents my dedication
                to solving real-world problems through clean code and thoughtful design.
              </p>
            </div>

            {/* Tech Stack */}
            <div className='space-y-4 pb-6 border-b border-zinc-400 dark:border-zinc-700'>
              <h2 className='text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
                <span>🛠️</span> Tech Stack
              </h2>

              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className='space-y-3'>
                  <p className='text-xs font-mono uppercase tracking-widest text-gray-700 dark:text-gray-400'>
                    {category}
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    {items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        title={tech.name}
                        className='flex flex-col items-center gap-1 cursor-pointer group'
                      >
                        <div className='w-12 h-12 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-white group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-md transition-all p-2'>
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className='w-full h-full object-contain '
                          />
                        </div>
                        <span className='text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors'>
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}

              <p className='text-sm text-gray-500 dark:text-gray-600 border-l-2 border-blue-400 pl-3'>
                Continuously exploring new tools, frameworks, and best practices to improve
                scalability, maintainability, and developer experience.
              </p>
            </div>

            {/* Current Focus */}
            <div className='space-y-4'>
              <h2 className='text-lg font-bold '>
                🎯 Current Focus
              </h2>
              <div className='space-y-3'>
                {focuses.map((item) => (
                  <div
                    key={item.title}
                    className='flex items-start gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 hover:border-blue-400 dark:hover:border-blue-500 transition-all'
                  >
                    <span className='text-xl'>{item.emoji}</span>
                    <div>
                      <p className='text-sm font-medium text-gray-900 dark:text-white'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Me */}
            <div className='space-y-3'>
              <h2 className='text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2'>
                🧭 About Me
              </h2>

              <ul className='space-y-2'>
                {[
                  "🎓 Pursuing BSc in Information Technology at the DAV PG College Dehradun",
                  "💻 Passionate about building full-stack web applications",
                  "🌱 Always learning and exploring new technologies",
                  "🤝 Open to collaborations, internships, and open-source contributions",
                  "🎨 Constantly learning and applying modern web technologies through practical projects"
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <span className='mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* lets connect */}
            <div className='space-y-3'>
              <h2 className='text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2'>
                🧭 Lets connect
              </h2>
              <div className='flex gap-2'>
                <motion.div
                  className='flex flex-col gap-1 cursor-pointer group'
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <a className='w-12 h-12 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-white group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-md transition-all p-2'
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=manishsuriyal21@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src='/gmail-svgrepo-com.svg'
                      alt='gmail-icon'
                      className='w-full h-full object-contain '
                    />
                  </a>
                </motion.div>

                <motion.div
                  className='flex flex-col gap-1 cursor-pointer group'
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <a className='w-12 h-12 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-white group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-md transition-all p-2'
                    href="https://x.com/manish161615"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src='/twitter.png'
                      alt='x-icon'
                      className='w-full h-full object-contain '
                    />
                  </a>
                </motion.div>

                <motion.div
                  className='flex flex-col gap-1 cursor-pointer group'
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <a className='w-12 h-12 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-white group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-md transition-all p-2'
                    href="https://www.linkedin.com/in/manish-suriyal-8aaba82b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src='/linkedin.png'
                      alt='linkedin-icon'
                      className='w-full h-full object-contain '
                    />
                  </a>
                </motion.div>
              </div>


            </div>

            {/* Box Game */}
            <div className='space-y-3'>
              <h1 className='text-2xl font-bold '>🎮 Game</h1>
                <BoxGame />
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default page