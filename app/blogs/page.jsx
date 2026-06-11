import React from 'react'
import Left from '../components/Left'

const page = () => {
  return (
    <section className='dark:bg-zinc-800 min-h-screen w-full md:flex'>

     <Left />

      {/* Right Content - 3/5 */}
      <div className='md:w-3/5 p-8'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Overview</h2>
      </div>

    </section>
  )
}

export default page