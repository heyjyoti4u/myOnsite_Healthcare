import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function EvaluationFramework() {
  const metrics = [
    { name: "Accuracy", description: "Manual validation of execution correctness", value: 92 },
    { name: "Latency", description: "Time to execute task", value: 85 },
    { name: "Robustness", description: "Recovery from bad inputs", value: 88 },
  ]

  const tiers = [
    { name: "Tier 1: Simple Tasks", description: "Basic operations like opening applications", percentage: 40 },
    {
      name: "Tier 2: Multi-step Tasks",
      description: "Complex workflows like editing and saving files",
      percentage: 40,
    },
    {
      name: "Tier 3: Integrative Tasks",
      description: "Advanced operations like build & deploy projects",
      percentage: 20,
    },
  ]

  return (
    <section id="evaluation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Evaluation Framework</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive testing methodology with 50 test cases across multiple complexity tiers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators for system evaluation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">{metric.name}</span>
                    <span className="text-primary font-bold">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Evaluation Dataset</CardTitle>
              <CardDescription>50 test cases distributed across complexity tiers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {tiers.map((tier, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">{tier.name}</span>
                    <span className="text-primary font-bold">{tier.percentage}%</span>
                  </div>
                  <Progress value={tier.percentage} className="h-2" />
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground text-center">Success Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{">90%"}</div>
                <div className="text-sm text-muted-foreground">Pass rate on evaluation dataset</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{"<3s"}</div>
                <div className="text-sm text-muted-foreground">Response time for 80% of tasks</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Autonomous task execution</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
