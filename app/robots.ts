import { MetadataRoute } from 'next'
import { env } from '@/config/env'

const { baseUrl } = env()

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/subscribe', '/contact']
    },
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
