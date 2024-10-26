"use client"

import { useDocument } from "@/hooks/use-document"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export function References() {
  const { document, updateDocument } = useDocument()
  const [newReference, setNewReference] = useState({
    id: "",
    type: "book",
    title: "",
    authors: [""],
    year: "",
    source: "",
  })

  const addReference = () => {
    const updatedReferences = [
      ...document.references,
      { ...newReference, id: Date.now().toString() },
    ]
    updateDocument({ ...document, references: updatedReferences })
    setNewReference({
      id: "",
      type: "book",
      title: "",
      authors: [""],
      year: "",
      source: "",
    })
  }

  const removeReference = (id: string) => {
    const updatedReferences = document.references.filter((ref) => ref.id !== id)
    updateDocument({ ...document, references: updatedReferences })
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label>Add New Reference</Label>
            <Input
              placeholder="Title"
              value={newReference.title}
              onChange={(e) =>
                setNewReference({ ...newReference, title: e.target.value })
              }
            />
            <Input
              placeholder="Authors (comma separated)"
              value={newReference.authors.join(", ")}
              onChange={(e) =>
                setNewReference({
                  ...newReference,
                  authors: e.target.value.split(",").map((a) => a.trim()),
                })
              }
            />
            <Input
              placeholder="Year"
              value={newReference.year}
              onChange={(e) =>
                setNewReference({ ...newReference, year: e.target.value })
              }
            />
            <Input
              placeholder="Source"
              value={newReference.source}
              onChange={(e) =>
                setNewReference({ ...newReference, source: e.target.value })
              }
            />
            <Button onClick={addReference}>
              <Plus className="mr-2 h-4 w-4" />
              Add Reference
            </Button>
          </div>
          <div className="space-y-4">
            <Label>References List</Label>
            {document.references.map((ref) => (
              <div
                key={ref.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium">{ref.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {ref.authors.join(", ")} ({ref.year})
                  </p>
                  <p className="text-sm text-muted-foreground">{ref.source}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeReference(ref.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}