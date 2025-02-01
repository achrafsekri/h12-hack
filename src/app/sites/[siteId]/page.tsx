import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface SitePageProps {
  params: Promise<{
    siteId: string;
  }>;
}

export default async function SitePage({ params }: SitePageProps) {
  const { siteId } = await params;

  return (
    <main className="container mx-auto py-6">
      <div className="mb-6">
        <Link href="/sites">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Sites
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Site Details: {siteId}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a dynamic route showing details for site ID: {siteId}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
