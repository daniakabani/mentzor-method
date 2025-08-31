import Link from 'next/link'
import { getPostBySlug, posts } from '../data'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const baseTitle = post ? post.title : 'Blog Post'
  const description =
    post?.description ?? 'Read our latest article on the Mentzer Method and Heavy Duty training.'
  const url = `/blogs/${slug}`
  return {
    title: baseTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: baseTitle,
      description,
      type: 'article',
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-2xl font-bold md:text-3xl'>Post not found</h1>
        <p className='mt-3 text-white/70'>The article you&apos;re looking for doesn&apos;t exist.</p>
        <div className='mt-6'>
          <Link href='/blogs' className='font-semibold text-red-400 hover:text-red-300'>
            ← Back to all blogs
          </Link>
        </div>
      </section>
    )
  }

  // Basic breadcrumbs for UX and SEO (visible text)
  return (
    <div>
      <nav className='mx-auto max-w-4xl px-6 pt-8 text-sm'>
        <div className='flex items-center space-x-2 text-gray-400'>
          <Link href='/' className='transition-colors hover:text-white'>
            Home
          </Link>
          <span className='text-gray-600'>/</span>
          <Link href='/blogs' className='transition-colors hover:text-white'>
            Blogs
          </Link>
          <span className='text-gray-600'>/</span>
          <span className='font-medium text-gray-200'>{post.title.split(':')[0]}</span>
        </div>
      </nav>

      <article className='mx-auto max-w-4xl px-6 py-12'>
        {/* Enhanced header */}
        <header className='mb-16 text-center'>
          <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
            <div className='h-2 w-2 rounded-full bg-red-500'></div>
            <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
              Heavy Duty Training
            </span>
          </div>
          <h1 className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl leading-tight font-black tracking-tight text-transparent md:text-5xl lg:text-6xl'>
            {post.title}
          </h1>
          <p className='mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl'>
            {post.description}
          </p>

          {/* Tags */}
          <div className='mt-8 flex flex-wrap justify-center gap-2'>
            {post.tags.map(tag => (
              <span
                key={tag}
                className='rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-sm font-medium text-gray-300'
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content with custom styling */}
        <div
          className='blog-content prose prose-lg prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-red-400 prose-h2:border-b prose-h2:border-gray-800 prose-h2:pb-3 prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-100 prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-gray-200 prose-h4:font-semibold prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-white prose-strong:font-semibold prose-ul:space-y-2 prose-li:text-gray-300 prose-li:leading-relaxed prose-ol:space-y-4 prose-ol:counter-reset-[list-item] max-w-none [&_ol_li]:mb-4 [&_ol_li]:rounded-lg [&_ol_li]:border [&_ol_li]:border-gray-800 [&_ol_li]:bg-gray-900/50 [&_ol_li]:p-4 [&_ul_li]:relative [&_ul_li]:pl-6 [&_ul_li::before]:absolute [&_ul_li::before]:top-[0.6em] [&_ul_li::before]:left-0 [&_ul_li::before]:h-2 [&_ul_li::before]:w-2 [&_ul_li::before]:rounded-full [&_ul_li::before]:bg-red-500'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Enhanced footer */}
        <footer className='mt-16 border-t border-gray-800 pt-8'>
          <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
            <Link
              href='/blogs'
              className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700'
            >
              <span>←</span> Back to All Articles
            </Link>

            {/* Related posts */}
            <div className='flex flex-col items-center gap-4 md:flex-row'>
              <span className='text-sm font-medium text-gray-400'>Related Articles:</span>
              <div className='flex flex-wrap gap-3'>
                {posts
                  .filter(p => p.slug !== post.slug)
                  .slice(0, 2)
                  .map(p => (
                    <Link
                      key={p.slug}
                      href={`/blogs/${p.slug}`}
                      className='rounded-md border border-gray-700 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-gray-600 hover:text-white'
                    >
                      {p.title.replace('Mike Mentzer ', '').split(':')[0]}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
