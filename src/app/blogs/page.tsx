import Link from 'next/link'
import { posts } from './data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'In-depth Mike Mentzer Heavy Duty articles: back, chest, arms, legs — SEO-optimized breakdowns of exercises, sets, reps, frequency, and intensity techniques.',
  openGraph: {
    title: 'Mentzer Heavy Duty Blogs',
    description: 'Back, chest, arms, legs routines explained with HIT principles and progression.',
    type: 'website',
  },
  alternates: { canonical: '/blogs' },
}

export default function BlogsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900'>
      {/* Hero section */}
      <section className='mx-auto max-w-6xl px-6 py-16 md:py-24'>
        <div className='text-center'>
          <div className='mb-8 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
            <div className='h-2 w-2 rounded-full bg-red-500'></div>
            <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
              Training Articles
            </span>
          </div>

          <h1 className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-5xl leading-tight font-black tracking-tight text-transparent md:text-6xl lg:text-7xl'>
            Heavy Duty Training
          </h1>
          <h2 className='mt-4 text-2xl font-bold text-red-400 md:text-3xl'>
            Mike Mentzer&apos;s Methods
          </h2>

          <p className='mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl'>
            Dive deep into Mike Mentzer&apos;s revolutionary Heavy Duty training system. Each article
            breaks down his exact methods, exercises, set and rep schemes, and intensity techniques
            for maximum muscle growth with minimum time investment.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className='mx-auto max-w-6xl px-6 pb-24'>
        <div className='grid gap-8 md:grid-cols-2'>
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 transition-all duration-300 hover:scale-[1.02] hover:transform hover:border-red-500/30 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Card background effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>

              <div className={`relative p-8 ${index === 0 ? 'md:p-12' : ''}`}>
                <header>
                  {/* Muscle group badge */}
                  <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-600/10 px-3 py-1'>
                    <div className='h-1.5 w-1.5 rounded-full bg-red-500'></div>
                    <span className='text-xs font-medium tracking-wide text-red-400 uppercase'>
                      {post.title.includes('Back')
                        ? 'Back'
                        : post.title.includes('Chest')
                          ? 'Chest'
                          : post.title.includes('Arm')
                            ? 'Arms'
                            : 'Legs'}{' '}
                      Training
                    </span>
                  </div>

                  <h2
                    className={`leading-tight font-bold text-gray-100 transition-colors group-hover:text-white ${
                      index === 0 ? 'mb-6 text-3xl md:text-4xl' : 'mb-4 text-xl md:text-2xl'
                    }`}
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      className='transition-colors hover:text-red-400'
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p
                    className={`leading-relaxed text-gray-400 ${
                      index === 0 ? 'mb-8 text-lg' : 'mb-6 text-base'
                    }`}
                  >
                    {post.description}
                  </p>
                </header>

                {/* Tags */}
                <div className='mb-6 flex flex-wrap gap-2'>
                  {post.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className='rounded-md border border-gray-700/60 bg-gray-800/60 px-2 py-1 text-xs font-medium text-gray-400'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read more button */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-all duration-200 group-hover:gap-3 hover:bg-red-700'
                >
                  Read Full Article
                  <span className='transition-transform group-hover:translate-x-1'>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className='mx-auto max-w-4xl px-6 pb-24'>
        <div className='rounded-2xl border border-gray-700/50 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-12 text-center'>
          <h3 className='mb-4 text-2xl font-bold text-white md:text-3xl'>
            Ready to Transform Your Training?
          </h3>
          <p className='mb-8 text-lg text-gray-300'>
            Start implementing Mike Mentzer&apos;s Heavy Duty principles today and experience maximum
            results with minimum time.
          </p>
          <Link
            href='/tracker'
            className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700'
          >
            Try Our Workout Tracker
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
