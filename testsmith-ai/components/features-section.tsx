import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Parses user stories and feature specifications in natural language with advanced NLP capabilities.",
      icon: "🧠",
    },
    {
      title: "Automated Test Generation",
      description: "Generates Python/JS Selenium test cases automatically from requirements and specifications.",
      icon: "⚡",
    },
    {
      title: "Headless Execution",
      description: "Executes headless tests and captures outcomes with comprehensive logs and screenshots.",
      icon: "🖥️",
    },
    {
      title: "Structured Reporting",
      description: "Produces detailed test reports in JSON and Excel formats with comprehensive metrics.",
      icon: "📊",
    },
    {
      title: "Dynamic Model Swapping",
      description: "Handles zero-downtime migrations and rollback capabilities for continuous operation.",
      icon: "🔄",
    },
    {
      title: "Multi-Modal Interaction",
      description: "Supports both text and voice commands for flexible user interaction patterns.",
      icon: "🎤",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">System Overview & Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accelerate QA cycles and ensure consistent quality in web applications through comprehensive end-to-end
            automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
