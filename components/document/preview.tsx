"use client"

import { useDocument } from "@/hooks/use-document"
import { Card } from "@/components/ui/card"

export function Preview() {
  const { document } = useDocument()

  return (
    <Card className="p-8">
      <div className="mx-auto max-w-[800px] space-y-8">
        <div className="text-center">
          <h1 className="mb-8 text-3xl font-bold">{document.title}</h1>
          <p className="mb-4 text-lg">{document.author}</p>
          <p className="mb-4">{document.institution}</p>
          <p>{new Date(document.date).toLocaleDateString()}</p>
        </div>
        <div
          className="prose max-w-none"
          style={{
            fontFamily: document.settings.font,
            fontSize: `${document.settings.fontSize}px`,
            lineHeight: document.settings.lineSpacing,
          }}
          dangerouslySetInnerHTML={{ __html: document.content }}
        />
      </div>
    </Card>
  )
}