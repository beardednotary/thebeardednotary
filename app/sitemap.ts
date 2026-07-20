import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebeardednotary.com'

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
    lastModified: Date
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1, lastModified: new Date('2026-07-20') },
    { path: '/best-printers-for-notaries', changeFrequency: 'monthly', priority: 0.9, lastModified: new Date('2026-07-17') },
    { path: '/best-portable-printers-for-notaries', changeFrequency: 'monthly', priority: 0.9, lastModified: new Date('2026-07-17') },
    { path: '/best-scanners-for-notaries', changeFrequency: 'monthly', priority: 0.9, lastModified: new Date('2026-07-15') },
    { path: '/how-much-to-charge-mobile-notary', changeFrequency: 'monthly', priority: 0.9, lastModified: new Date('2026-07-17') },
    { path: '/first-30-days-new-notary', changeFrequency: 'monthly', priority: 0.85, lastModified: new Date('2026-07-17') },
    { path: '/smart-money-management-for-notaries', changeFrequency: 'monthly', priority: 0.85, lastModified: new Date('2026-07-17') },
    { path: '/free-marketing-sites-notaries', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
    { path: '/target-industries-for-notaries', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
    { path: '/document-types-notaries-glossary', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
    { path: '/how-to-become-a-notary-in-california', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
    { path: '/cost-to-become-a-notary-in-california', changeFrequency: 'monthly', priority: 0.85, lastModified: new Date('2026-07-19') },
    { path: '/how-to-pass-california-notary-exam', changeFrequency: 'monthly', priority: 0.85, lastModified: new Date('2026-07-19') },
    { path: '/notary-public-vs-loan-signing-agent', changeFrequency: 'monthly', priority: 0.85, lastModified: new Date('2026-07-20') },
    { path: '/essential-notary-books', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-15') },
    { path: '/mobile-notary-supplies', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
    { path: '/notary-business-resources', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
    { path: '/why-now-is-perfect-time-loan-signing-agent', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-07-17') },
  ]

  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
