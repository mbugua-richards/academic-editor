"use client"

import { useDocument } from "@/hooks/use-document"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContentEditor() {
  const { document, updateDocument } = useDocument()

  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center space-x-2">
        <Select defaultValue="p">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Paragraph Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h1">Heading 1</SelectItem>
            <SelectItem value="h2">Heading 2</SelectItem>
            <SelectItem value="h3">Heading 3</SelectItem>
            <SelectItem value="p">Paragraph</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        className="min-h-[500px] w-full rounded-md border border-input bg-background px-3 py-2"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          updateDocument({ ...document, content: e.currentTarget.innerHTML })
        }
        style={{
          fontFamily: document.settings.font,
          fontSize: `${document.settings.fontSize}px`,
          lineHeight: document.settings.lineSpacing,
        }}
      />
    </Card>
  )
}