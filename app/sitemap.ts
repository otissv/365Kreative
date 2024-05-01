import { MetadataRoute } from 'next'
import { env } from '@/config/env'

const { baseUrl } = env()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseUrl}`
    }
  ]
}
