"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { updateDocument } from "@/lib/store/documentSlice"
import { FileDown, Type } from "lucide-react"
import { jsPDF } from "jspdf"

export function Toolbar() {
  const document = useSelector((state: RootState) => state.document)
  const dispatch = useDispatch()

  const exportPDF = () => {
    const doc = new jsPDF()
    doc.html(document.content, {
      callback: function (doc) {
        doc.save('academic-paper.pdf')
      },
      x: 15,
      y: 15,
      width: 170,
      windowWidth: 650
    })
  }

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-8 flex items-center gap-4">
      <Select
        value={document.style}
        onValueChange={(value) => dispatch(updateDocument({ style: value }))}
      >
        <SelectTrigger className="w-[180px]">
          <Type className="w-4 h-4 mr-2" />
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="times-new-roman">Times New Roman</SelectItem>
          <SelectItem value="arial">Arial</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={exportPDF}>
        <FileDown className="w-4 h-4 mr-2" />
        Export PDF
      </Button>
    </div>
  )
}