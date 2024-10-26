import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DocumentHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FileText className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Academic Writer</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Select defaultValue="apa">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Citation Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apa">APA Style</SelectItem>
            <SelectItem value="mla">MLA Style</SelectItem>
            <SelectItem value="chicago">Chicago Style</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  )
}