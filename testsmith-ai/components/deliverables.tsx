import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Deliverables() {
  const deliverables = [
    {
      category: "System",
      items: [
        "Executable packages or Docker containers",
        "Complete source code with documentation",
        "Configuration files and deployment scripts",
      ],
      icon: "📦",
    },
    {
      category: "Evaluation",
      items: [
        "Test cases and comprehensive logs",
        "Metrics dashboard with real-time monitoring",
        "Performance benchmarking reports",
      ],
      icon: "📊",
    },
    {
      category: "Documentation",
      items: [
        "Installation guide and setup instructions",
        "User manual with examples",
        "API specifications and integration guides",
      ],
      icon: "📚",
    },
  ]

  return (
    <section id="deliverables" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Deliverables</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete package including system components, evaluation tools, and comprehensive documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {deliverables.map((deliverable, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{deliverable.icon}</div>
                <CardTitle className="text-2xl text-card-foreground">{deliverable.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {deliverable.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Transform your QA testing pipeline with TestSmith AI's autonomous capabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Download Documentation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
