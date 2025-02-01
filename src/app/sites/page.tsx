import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import Link from "next/link"

export default function SitesPage() {
  return (
    <main className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sites</h1>
        <Button>Add New Site</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Example site card */}
        <Link href="/sites/example-site">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Example Site</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Click to view details</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  )
} 