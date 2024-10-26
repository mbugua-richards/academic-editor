"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { updateDocument } from "@/lib/store/documentSlice"
import { cn } from "@/lib/utils"

export default function DocumentEditor() {
  const document = useSelector((state: RootState) => state.document)
  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 min-h-[842px] w-full max-w-[595px] mx-auto">
      <div 
        className={cn(
          "prose prose-sm max-w-none",
          "font-serif text-base leading-relaxed",
          document.style === "times-new-roman" && "font-times",
          document.style === "arial" && "font-arial"
        )}
        contentEditable
        onInput={(e) => dispatch(updateDocument({ content: e.currentTarget.innerHTML }))}
        dangerouslySetInnerHTML={{ __html: document.content }}
      />
    </div>
  )
}