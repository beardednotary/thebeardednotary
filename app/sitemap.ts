import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebeardednotary.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-12-16'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/why-now-is-perfect-time-loan-signing-agent`,
      lastModified: new Date('2026-01-02'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-printers-for-notaries`,
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-marketing-sites-notaries`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/target-industries-for-notaries`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/document-types-notaries-glossary`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-to-become-a-notary-in-california`,
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/essential-notary-books`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobile-notary-supplies`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notary-business-resources`,
      lastModified: new Date('2025-12-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-much-to-charge-mobile-notary`,
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
     {
      url: `${baseUrl}/smart-money-management-for-notaries`,
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },   
     {
      url: `${baseUrl}/first-30-days-new-notary`,
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },    
  ]
}
