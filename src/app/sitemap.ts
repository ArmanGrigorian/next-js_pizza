
import { prisma } from "@/prisma/prisma-client"
import { Category, Product } from '@prisma/client'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      select: {
        id: true,
        name: true,
        updatedAt: true,
      },
    }),
    prisma.category.findMany({
      select: {
        id: true,
        name: true,
        updatedAt: true,
      },
    }),
  ])
  const staticRoutes = [
    '',
    '/menu',
    '/cart',
    '/orders',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Product routes
  const productRoutes = products.map((product: Pick<Product, 'id' | 'name' | 'updatedAt'>) => ({
    url: `${baseUrl}/menu/${product.id}`,
    lastModified: product.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Category routes
  const categoryRoutes = categories.map((category: Pick<Category, 'id' | 'name' | 'updatedAt'>) => ({
    url: `${baseUrl}/menu/category/${category.id}`,
    lastModified: category.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...productRoutes,
    ...categoryRoutes,
  ]
} 