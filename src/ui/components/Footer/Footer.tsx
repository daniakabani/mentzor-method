'use client'

import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='border-t border-gray-800 bg-gradient-to-r from-gray-950 via-black to-gray-950'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Footer Brand */}
          <div>
            <div className='mb-4 flex items-center gap-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700'>
                <span className='text-sm font-black text-white'>M</span>
              </div>
              <span className='text-lg font-bold text-white'>Mentzer Method</span>
            </div>
            <p className='text-sm leading-relaxed text-gray-400'>
              Discover the power of Mike Mentzer&apos;s Heavy Duty training system. Maximum results
              through scientific intensity principles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-4 font-semibold text-white'>Training Guides</h3>
            <div className='space-y-2'>
              <Link
                href='/blogs/back-workout'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                Back Workout
              </Link>
              <Link
                href='/blogs/chest-workout'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                Chest Workout
              </Link>
              <Link
                href='/blogs/arm-workout'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                Arm Workout
              </Link>
              <Link
                href='/blogs/leg-workout'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                Leg Workout
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className='mb-4 font-semibold text-white'>Tools & Resources</h3>
            <div className='space-y-2'>
              <Link
                href='/tracker'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                Intensity Tracker
              </Link>
              <Link
                href='/about'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                About HIT Training
              </Link>
              <Link
                href='/blogs'
                className='block text-sm text-gray-400 transition-colors hover:text-white'
              >
                All Articles
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-800 pt-8 text-center'>
          <p className='text-sm text-gray-500'>
            Disclaimer: This is an independent educational site and is not affiliated with Mike
            Mentzer or his estate.
          </p>
        </div>
      </div>
    </footer>
  )
}
