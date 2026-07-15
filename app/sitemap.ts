import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebeardednotary.com'
  const lastModified = new Date('2026-07-14')

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/best-printers-for-notaries', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/best-scanners-for-notaries', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/how-much-to-charge-mobile-notary', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/first-30-days-new-notary', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/smart-money-management-for-notaries', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/free-marketing-sites-notaries', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/target-industries-for-notaries', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/document-types-notaries-glossary', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/how-to-become-a-notary-in-california', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/essential-notary-books', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/mobile-notary-supplies', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/notary-business-resources', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/why-now-is-perfect-time-loan-signing-agent', changeFrequency: 'monthly', priority: 0.8 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
