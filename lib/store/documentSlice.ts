import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DocumentState {
  content: string
  style: string
}

const initialState: DocumentState = {
  content: "<h1>Title</h1><p>Start writing your academic paper here...</p>",
  style: "times-new-roman",
}

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    updateDocument: (state, action: PayloadAction<Partial<DocumentState>>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { updateDocument } = documentSlice.actions
export default documentSlice.reducer