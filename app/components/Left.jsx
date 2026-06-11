import React from 'react'
import { GitBranch, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Left = () => {
  return (
    <>
     {/* Left Profile - 2/5 */}
      <div className='md:w-2/5 w-full flex justify-center border-r border-gray-200 dark:border-zinc-700 bg-gray-200 dark:bg-[#0D1117]'>
        <div className='pt-10 px-8 flex flex-col items-center text-center gap-4'>

          {/* Avatar */}
          <div className='w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-2 dark:ring-offset-zinc-800'>
            <Image
              src="/image.png"
              alt='Manish Suriyal'
              height={160}
              width={160}
              priority
              className='aspect-square object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>

          {/* Name & Title */}
          <div>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Manish Suriyal
            </h1>
            <span className='inline-block mt-1 px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium'>
              Full Stack Developer
            </span>
          </div>

          {/* Bio */}
          <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
            🌱 Learning, building, and growing — one project at a time.
          </p>

          {/* Divider */}
          <div className='w-full border-t border-gray-200 dark:border-zinc-700' />

          {/* Location & GitHub */}
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
              <MapPin size={16} className='text-blue-500' />
              <span>Uttarakhand, India</span>
            </div>

            <Link
              href="https://github.com/manish012321"
              target='_blank'
              className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
            >
              <GitBranch size={16} className='text-blue-500' />
              <span>github.com/manishsuriyal</span>
              <ExternalLink size={12} />
            </Link>
          </div>

          {/* Stats */}
          <div className='flex gap-6 w-full justify-center pt-2'>
            <div className='text-center'>
              <p className='text-xl font-bold text-gray-900 dark:text-white'>5</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>Projects</p>
            </div>
            <div className='w-px bg-gray-200 dark:bg-zinc-700' />
            <div className='text-center'>
              <p className='text-xl font-bold text-gray-900 dark:text-white'>Mern</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>Stack</p>
            </div>
            <div className='w-px bg-gray-200 dark:bg-zinc-700' />
            <div className='text-center'>
              <p className='text-xl font-bold text-gray-900 dark:text-white'>10+</p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>Technologies Learned</p>
            </div>
          </div>

        </div>
      </div>
      </>
  )
}

export default Left