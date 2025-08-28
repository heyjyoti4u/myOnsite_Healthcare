import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Version 1.0 • myOnsite Healthcare
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            TestSmith AI
            <span className="block text-primary mt-2">The Autonomous Selenium Test Engineer</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            An intelligent agent designed to automate the entire QA testing pipeline. Interprets natural language
            requirements and generates, executes, and reports on Selenium test cases autonomously.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Testing Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              View Documentation
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{">90%"}</div>
              <div className="text-sm text-muted-foreground">Pass Rate on Evaluation Dataset</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{"<3s"}</div>
              <div className="text-sm text-muted-foreground">Response Time for 80% of Tasks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5hrs</div>
              <div className="text-sm text-muted-foreground">Time Allocation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
