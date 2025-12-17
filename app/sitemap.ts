import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebeardednotary.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/why-now-is-perfect-time-loan-signing-agent`,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-printers-for-notaries`,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-to-become-a-notary-in-california`,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/essential-notary-books`,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile-notary-supplies`,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notary-business-resources`,
      lastModified: new Date('2024-12-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
