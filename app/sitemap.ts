import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.skienbrannkonsult.no'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: '2026-07-16', changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/brannkonsept`, lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/brannprosjektering`, lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/branninspeksjon`, lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/uavhengig-kontroll`, lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/om-oss`, lastModified: '2026-07-17', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/kontakt-oss`, lastModified: '2026-07-17', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/artikler/pipebrann`, lastModified: '2026-07-17', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/brannslokker`, lastModified: '2026-07-17', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/artikler/roykvarsler`, lastModified: '2026-07-17', changeFrequency: 'yearly', priority: 0.6 },
  ]
}
