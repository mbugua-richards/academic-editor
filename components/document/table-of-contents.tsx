"use client"

import { useDocument } from "@/hooks/use-document"
import { Card } from "@/components/ui/card"

export function TableOfContents() {
  const { document } = useDocument()

  const extractHeadings = () => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(document.content, "text/html")
    const headings = Array.from(doc.querySelectorAll("h1, h2, h3"))
    return headings.map((heading) => ({
      level: heading.tagName.toLowerCase(),
      text: heading.textContent || "",
    }))
  }

  const headings = extractHeadings()

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-2xl font-bold">Table of Contents</h2>
      <div className="space-y-2">
        {headings.map((heading, index) => (
          <div
            key={index}
            className={`${
              heading.level === "h1"
                ? "ml-0"
                : heading.level === "h2"
                ? "ml-4"
                : "ml-8"
            }`}
          >
            <p className="text-muted-foreground hover:text-foreground">
              {heading.text}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}