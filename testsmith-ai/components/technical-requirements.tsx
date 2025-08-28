import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechnicalRequirements() {
  return (
    <section id="requirements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Technical Requirements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical specifications and integration capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                <span className="text-primary">🎯</span>
                Primary Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Natural Language Understanding (NLU)</Badge>
                <Badge variant="secondary">Task Execution Automation</Badge>
              </div>
              <p className="text-muted-foreground">
                Core capabilities focused on interpreting natural language requirements and automating complex testing
                workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                <span className="text-accent">🔧</span>
                Secondary Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Headless Browser Automation</Badge>
                <Badge variant="outline">Shell-level OS Commands</Badge>
              </div>
              <p className="text-muted-foreground">
                Advanced automation capabilities for comprehensive testing scenarios and system-level operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                <span className="text-primary">🔗</span>
                Integration Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20">Git</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">System APIs</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Voice Recognition</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">File Management</Badge>
              </div>
              <p className="text-muted-foreground">
                Seamless integration with development tools and enterprise systems for complete workflow automation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                <span className="text-accent">⚡</span>
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Dynamic command interpretation and fallback handling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Screenshot capture and error logging
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Background execution support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Multi-modal interaction (text/voice)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
