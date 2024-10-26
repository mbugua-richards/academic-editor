"use client"

import { useDocument } from "@/hooks/use-document"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function DocumentSettings() {
  const { document, updateDocument } = useDocument()

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Font Family</Label>
            <Select
              value={document.settings.font}
              onValueChange={(value) =>
                updateDocument({
                  ...document,
                  settings: { ...document.settings, font: value },
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                <SelectItem value="Arial">Arial</SelectItem>
                <SelectItem value="Calibri">Calibri</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Font Size: {document.settings.fontSize}px</Label>
            <Slider
              value={[document.settings.fontSize]}
              min={8}
              max={24}
              step={1}
              onValueChange={([value]) =>
                updateDocument({
                  ...document,
                  settings: { ...document.settings, fontSize: value },
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Line Spacing: {document.settings.lineSpacing}</Label>
            <Slider
              value={[document.settings.lineSpacing]}
              min={1}
              max={3}
              step={0.5}
              onValueChange={([value]) =>
                updateDocument({
                  ...document,
                  settings: { ...document.settings, lineSpacing: value },
                })
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}