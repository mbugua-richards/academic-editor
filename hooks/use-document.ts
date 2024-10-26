"use client"

import { create } from "zustand"

interface DocumentState {
  document: {
    content: string
    style: string
  }
  updateDocument: (updates: Partial<DocumentState["document"]>) => void
}

export const useDocument = create<DocumentState>((set) => ({
  document: {
    content: "<h1>Title</h1><p>Start writing your academic paper here...</p>",
    style: "times-new-roman",
  },
  updateDocument: (updates) =>
    set((state) => ({
      document: {
        ...state.document,
        ...updates,
      },
    })),
}))