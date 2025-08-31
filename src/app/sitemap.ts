import { posts } from './blogs/data'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mentzermethod.com'

  // Static pages with fixed dates for static export
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tracker`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic blog pages with fixed dates
  const blogPages = posts.map(post => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date('2024-01-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
