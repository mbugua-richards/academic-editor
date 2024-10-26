"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDocument } from "@/hooks/use-document"

export function TitlePage() {
  const { document, updateDocument } = useDocument()

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={document.title}
              onChange={(e) =>
                updateDocument({ ...document, title: e.target.value })
              }
              placeholder="Enter document title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={document.author}
              onChange={(e) =>
                updateDocument({ ...document, author: e.target.value })
              }
              placeholder="Enter author name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              value={document.institution}
              onChange={(e) =>
                updateDocument({ ...document, institution: e.target.value })
              }
              placeholder="Enter institution name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={document.date}
              onChange={(e) =>
                updateDocument({ ...document, date: e.target.value })
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}