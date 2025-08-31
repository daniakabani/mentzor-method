'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])
  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-black/90 shadow-lg backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div className='mx-auto max-w-6xl px-6 py-4'>
          <div className='flex items-center justify-between'>
            {/* Enhanced Logo */}
            <Link href='/' className='group flex items-center gap-3' onClick={closeMobileMenu}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700'
              >
                <span className='text-lg font-black text-white'>M</span>
              </motion.div>
              <div className='flex flex-col'>
                <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl leading-none font-black tracking-tight text-transparent'>
                  Mentzer Method
                </span>
                <span className='text-xs font-medium tracking-wide text-red-400'>HEAVY DUTY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden items-center gap-8 lg:flex'>
              <Link
                href='/about'
                className='group relative font-medium text-gray-300 transition-colors duration-200 hover:text-white'
              >
                About
                <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
              </Link>

              <div className='group relative'>
                <Link
                  href='/blogs'
                  className='flex items-center gap-1 font-medium text-gray-300 transition-colors duration-200 hover:text-white'
                >
                  Blogs
                  <motion.svg
                    className='h-4 w-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </motion.svg>
                </Link>

                {/* Desktop Dropdown */}
                <div className='invisible absolute top-full left-0 mt-2 w-64 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
                  <div className='rounded-xl border border-gray-700/50 bg-gray-900/95 p-2 shadow-xl backdrop-blur-lg'>
                    {[
                      { href: '/blogs/back-workout', label: 'Back Workout' },
                      { href: '/blogs/chest-workout', label: 'Chest Workout' },
                      { href: '/blogs/arm-workout', label: 'Arm Workout' },
                      { href: '/blogs/leg-workout', label: 'Leg Workout' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className='group/item flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 transition-all duration-200 hover:border-red-500/20 hover:bg-red-600/10'
                        >
                          <div className='h-2 w-2 rounded-full bg-red-500'></div>
                          <span className='font-medium text-gray-300 group-hover/item:text-white'>
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href='/tracker'
                  className='group relative rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-red-700'
                >
                  Intensity Tracker
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 transition-all duration-200 hover:border-gray-600 hover:bg-gray-700/50 lg:hidden'
              aria-label='Toggle mobile menu'
              whileTap={{ scale: 0.95 }}
            >
              <div className='flex h-5 w-5 flex-col items-center justify-center'>
                <motion.span
                  className='h-0.5 w-4 bg-white'
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 2 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className='mt-1 h-0.5 w-4 bg-white'
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className='mt-1 h-0.5 w-4 bg-white'
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -2 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </header>
      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <motion.div
              className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden'
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className='fixed inset-y-0 right-0 z-50 w-80 max-w-[90vw] border-l border-gray-700/50 bg-gray-900/95 backdrop-blur-lg lg:hidden'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
            >
              <div className='flex h-full flex-col overflow-y-auto p-6'>
                {/* Mobile Menu Header */}
                <motion.div
                  className='mb-8 flex items-center justify-between'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className='flex items-center gap-3'>
                    <motion.div
                      className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700'
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className='font-black text-white'>M</span>
                    </motion.div>
                    <span className='text-lg font-bold text-white'>Menu</span>
                  </div>
                  <motion.button
                    onClick={closeMobileMenu}
                    className='flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 transition-colors hover:bg-gray-700/50'
                    aria-label='Close mobile menu'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className='text-lg text-white'>×</span>
                  </motion.button>
                </motion.div>

                {/* Mobile Menu Items */}
                <nav className='flex-1 space-y-2'>
                  {[
                    { href: '/', label: 'Home', delay: 0.15 },
                    { href: '/about', label: 'About', delay: 0.2 },
                    { href: '/blogs', label: 'All Blogs', delay: 0.25 },
                  ].map(item => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className='group flex items-center gap-3 rounded-xl border border-transparent p-4 transition-all duration-200 hover:border-red-500/20 hover:bg-red-600/10'
                      >
                        <motion.div
                          className='h-2 w-2 rounded-full bg-red-500'
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        />
                        <span className='font-medium text-gray-300 group-hover:text-white'>
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Blog Sub-items */}
                  <motion.div
                    className='ml-6 space-y-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {[
                      { href: '/blogs/back-workout', label: 'Back Workout', delay: 0.35 },
                      { href: '/blogs/chest-workout', label: 'Chest Workout', delay: 0.4 },
                      { href: '/blogs/arm-workout', label: 'Arm Workout', delay: 0.45 },
                      { href: '/blogs/leg-workout', label: 'Leg Workout', delay: 0.5 },
                    ].map(item => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className='group flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-gray-800/50'
                        >
                          <motion.div
                            className='h-1.5 w-1.5 rounded-full bg-gray-500'
                            whileHover={{ scale: 1.5, backgroundColor: '#ef4444' }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          />
                          <span className='text-sm text-gray-400 group-hover:text-gray-300'>
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tracker Button */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55, duration: 0.3 }}
                  >
                    <Link
                      href='/tracker'
                      onClick={closeMobileMenu}
                      className='group flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-600/20 p-4 transition-all duration-200 hover:bg-red-600/30'
                    >
                      <motion.div
                        className='h-2 w-2 rounded-full bg-red-500'
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      <span className='font-semibold text-white'>Intensity Tracker</span>
                    </Link>
                  </motion.div>
                </nav>

                {/* Mobile Menu Footer */}
                <motion.div
                  className='mt-auto border-t border-gray-800 pt-8'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <div className='text-center'>
                    <motion.div
                      className='mb-4 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className='h-2 w-2 rounded-full bg-red-500'
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
                        Heavy Duty
                      </span>
                    </motion.div>
                    <p className='text-sm leading-relaxed text-gray-400'>
                      Train with maximum intensity,
                      <br />
                      minimum time investment.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
