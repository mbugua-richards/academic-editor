import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-5 w-5" />
            <span className="font-bold">Home</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}