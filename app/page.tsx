import DocumentEditor from "@/components/document/editor"
import { Toolbar } from "@/components/document/toolbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Academic Writer</h1>
        <Toolbar />
        <DocumentEditor />
      </div>
    </main>
  )
}