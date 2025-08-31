import Link from 'next/link'
import { homePageMetadata } from 'src/constants/metadata'
import { organizationData, websiteData } from 'src/constants/websiteData'
import { StructuredData } from 'src/ui/components'

export const metadata = homePageMetadata

export default function HomePage() {
  return (
    <>
      <StructuredData type='Organization' data={organizationData} />
      <StructuredData type='WebSite' data={websiteData} />
      <div className='min-h-screen'>
        {/* Enhanced Hero Section */}
        <section className='hero-gradient relative flex min-h-screen items-center overflow-hidden'>
          {/* Overlay gradient */}
          <div className='absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/70'></div>

          <div className='relative z-20 mx-auto max-w-6xl px-6 py-20 text-center'>
            <div className='mb-8 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
              <div className='h-2 w-2 animate-pulse rounded-full bg-red-500'></div>
              <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
                Heavy Duty Training
              </span>
            </div>

            <h1 className='mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-5xl leading-tight font-black tracking-tight text-transparent md:text-7xl lg:text-8xl'>
              The Mike Mentzer Method
            </h1>

            <h2 className='mb-8 text-2xl font-bold text-red-400 md:text-4xl'>
              High-Intensity Training Revolution
            </h2>

            <p className='mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl'>
              Discover the power of <strong className='text-white'>brief, intense workouts</strong>{' '}
              that changed bodybuilding forever. Train smarter, not longer, with
              scientifically-backed methods that deliver maximum results.
            </p>

            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link
                href='/tracker'
                className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-red-700 hover:shadow-xl'
              >
                Start Training Now
                <span className='transition-transform group-hover:translate-x-1'>→</span>
              </Link>
              <Link
                href='#principles'
                className='inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-200 hover:border-gray-500 hover:text-white'
              >
                Learn the Method
                <span>↓</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section
          id='principles'
          className='bg-gradient-to-br from-gray-950 via-black to-gray-900 py-8 md:py-24'
        >
          <div className='mx-auto max-w-6xl px-6'>
            <div className='mb-16 text-center'>
              <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
                <div className='h-2 w-2 rounded-full bg-red-500'></div>
                <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
                  The Science
                </span>
              </div>
              <h2 className='mb-6 text-4xl font-black text-white md:text-5xl'>
                What is High-Intensity Training?
              </h2>
              <p className='mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl'>
                High-Intensity Training revolutionizes muscle building through{' '}
                <strong className='text-white'>
                  brief, infrequent, and brutally intense workouts
                </strong>
                . One all-out set per exercise, performed to momentary muscular failure with strict
                form and controlled tempo.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className='mb-16 grid gap-8 md:grid-cols-3'>
              <div className='rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 transition-all duration-300 hover:border-red-500/30'>
                <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10'>
                  <span className='text-xl font-bold text-red-400'>⚡</span>
                </div>
                <h3 className='mb-4 text-xl font-bold text-white'>Maximum Efficiency</h3>
                <p className='leading-relaxed text-gray-300'>
                  Achieve better results in 20-30 minutes than traditional 2-hour workouts. Every
                  rep counts when intensity is maximized.
                </p>
              </div>

              <div className='rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 transition-all duration-300 hover:border-red-500/30'>
                <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10'>
                  <span className='text-xl font-bold text-red-400'>🎯</span>
                </div>
                <h3 className='mb-4 text-xl font-bold text-white'>Precise Progression</h3>
                <p className='leading-relaxed text-gray-300'>
                  Track exact progress with measurable intensity. No guesswork—just systematic
                  advancement toward your goals.
                </p>
              </div>

              <div className='rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 transition-all duration-300 hover:border-red-500/30'>
                <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10'>
                  <span className='text-xl font-bold text-red-400'>🛡️</span>
                </div>
                <h3 className='mb-4 text-xl font-bold text-white'>Joint-Friendly</h3>
                <p className='leading-relaxed text-gray-300'>
                  Low volume reduces joint stress while controlled movements and proper form
                  minimize injury risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HIT vs Volume Comparison */}
        <section className='bg-black py-8 md:py-24'>
          <div className='mx-auto max-w-6xl px-6'>
            <div className='mb-16 text-center'>
              <h2 className='mb-6 text-4xl font-black text-white md:text-5xl'>
                HIT vs. Traditional Volume Training
              </h2>
              <p className='mx-auto max-w-3xl text-lg text-gray-300'>
                See why champions like Dorian Yates chose Heavy Duty over endless gym sessions
              </p>
            </div>

            <div className='grid gap-8 lg:grid-cols-2'>
              {/* HIT Benefits */}
              <div className='relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 to-red-800/10 p-8'>
                <div className='absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-red-500/5'></div>
                <div className='relative'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='h-3 w-3 rounded-full bg-red-500'></div>
                    <h3 className='text-2xl font-bold text-red-400'>Heavy Duty Training</h3>
                  </div>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-red-400'>✓</span>
                      <span className='text-gray-300'>
                        <strong className='text-white'>20-30 minute sessions</strong> - Maximum
                        efficiency
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-red-400'>✓</span>
                      <span className='text-gray-300'>
                        <strong className='text-white'>Recovery prioritized</strong> - Growth
                        happens during rest
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-red-400'>✓</span>
                      <span className='text-gray-300'>
                        <strong className='text-white'>Reduced joint stress</strong> - Sustainable
                        long-term
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-red-400'>✓</span>
                      <span className='text-gray-300'>
                        <strong className='text-white'>Measurable progress</strong> - Clear tracking
                        systems
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-red-400'>✓</span>
                      <span className='text-gray-300'>
                        <strong className='text-white'>Time efficient</strong> - Perfect for busy
                        schedules
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Traditional Volume */}
              <div className='relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8'>
                <div className='absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gray-600/5'></div>
                <div className='relative'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='h-3 w-3 rounded-full bg-gray-500'></div>
                    <h3 className='text-2xl font-bold text-gray-300'>Traditional Volume</h3>
                  </div>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-gray-500'>•</span>
                      <span className='text-gray-400'>
                        <strong className='text-gray-300'>2+ hour sessions</strong> - Time consuming
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-gray-500'>•</span>
                      <span className='text-gray-400'>
                        <strong className='text-gray-300'>Fatigue masks intensity</strong> - Hard to
                        gauge effort
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-gray-500'>•</span>
                      <span className='text-gray-400'>
                        <strong className='text-gray-300'>Higher injury risk</strong> - Accumulating
                        joint stress
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-gray-500'>•</span>
                      <span className='text-gray-400'>
                        <strong className='text-gray-300'>Recovery underestimated</strong> - Plateau
                        potential
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 text-gray-500'>•</span>
                      <span className='text-gray-400'>
                        <strong className='text-gray-300'>Difficult progression</strong> - Complex
                        tracking needed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='bg-gradient-to-r from-red-900/20 via-red-800/10 to-red-900/20 py-8 md:py-24'>
          <div className='mx-auto max-w-4xl px-6 text-center'>
            <h2 className='mb-6 text-4xl font-black text-white md:text-5xl'>
              Ready to Transform Your Training?
            </h2>
            <p className='mb-12 text-lg leading-relaxed text-gray-300 md:text-xl'>
              Join thousands who&#39;ve discovered the power of brief, intense workouts. Start tracking
              your intensity and watch your strength soar.
            </p>

            <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
              <Link
                href='/tracker'
                className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-red-700'
              >
                Try the Intensity Tracker
                <span className='transition-transform group-hover:translate-x-1'>→</span>
              </Link>

              <Link
                href='/blogs'
                className='inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-200 hover:border-gray-500 hover:text-white'
              >
                Read Training Guides
                <span>📖</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
