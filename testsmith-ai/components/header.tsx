import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TS</span>
          </div>
          <span className="text-xl font-bold text-foreground">TestSmith AI</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#requirements"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Requirements
          </a>
          <a
            href="#evaluation"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Evaluation
          </a>
          <a
            href="#deliverables"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Deliverables
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}
