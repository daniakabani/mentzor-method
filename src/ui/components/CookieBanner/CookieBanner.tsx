'use client'

import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted')
    if (!hasAccepted) {
      setShowNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <div className='fixed right-0 bottom-0 left-0 z-50 border-t border-gray-700 bg-gray-900 p-4'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row'>
        <p className='text-sm text-gray-300'>
          We use cookies to analyze site usage and improve your experience.
        </p>
        <button
          onClick={acceptCookies}
          className='rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700'
        >
          Accept
        </button>
      </div>
    </div>
  )
}
