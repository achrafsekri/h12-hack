import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { Prisma } from "@prisma/client"

import { Site } from "@/components/sites/site"
 // This is just example data. In a real application, you'd fetch this from an API or database.
const sitesList = [
  {
    id: 1,
    title: "Personal Blog",
    description: "A minimalist blog built with Next.js",
    imageUrl: "/placeholder.svg?height=200&width=350",
    href: "/sites/personal-blog",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Online store using React and Stripe",
    imageUrl: "/placeholder.svg?height=200&width=350",
    href: "/sites/ecommerce-store",
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "Showcase your work with this sleek portfolio",
    imageUrl: "/placeholder.svg?height=200&width=350",
    href: "/sites/portfolio",
  },
  {
    id: 4,
    title: "News Aggregator",
    description: "Stay updated with this custom news site",
    imageUrl: "/placeholder.svg?height=200&width=350",
    href: "/sites/news-aggregator",
  },
  {
    id: 5,
    title: "Recipe Collection",
    description: "Share your favorite recipes with the world",
    imageUrl: "/placeholder.svg?height=200&width=350",
    href: "/sites/recipe-collection",
  },
]

export default function SitesPage() {
  return (
    <main className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sites</h1>
        <Button>Add New Site</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sitesList.map((site) => (
          <Site
            key={site.id}
            title={site.title}
            description={site.description}
            imageUrl={site.imageUrl}
            href={site.href}
          />
        ))}
      </div>
    </main>
  )
}