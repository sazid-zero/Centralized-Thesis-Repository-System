import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, FileText, Search } from "lucide-react"

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-l from-background via-primary/10 to-accent/20 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-gradient-to-l from-background via-primary/5 to-accent/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-foreground">SUST Thesis</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/login">
                  <Button variant="ghost" className="text-foreground hover:bg-primary/80">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                    Centralized Thesis Repository
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A modern platform for managing, sharing, and discovering academic research at Shahjalal University of
                    Science and Technology.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                      Submit Your Thesis
                    </Button>
                  </Link>
                  <Link href="/browse">
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-border hover:bg-primary/70 bg-transparent"
                    >
                      Browse Repository
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Image Placeholder */}
              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10 text-center">
                  <BookOpen className="h-24 w-24 mx-auto text-primary/30 mb-4" />
                  <p className="text-muted-foreground">Academic Research Hub</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative border-t border-border/50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Total Theses", value: "2,847", icon: FileText },
                { label: "Active Users", value: "1,250+", icon: Users },
                { label: "Departments", value: "12", icon: BookOpen },
                { label: "Years Archived", value: "5+", icon: Search },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                    <Card
                        key={idx}
                        className="border-border bg-background/40 backdrop-blur-sm p-6 text-center shadow-xl hover:shadow-2xl hover:bg-background/80 transition-all"
                    >
                      <Icon className="h-8 w-8 mx-auto text-primary mb-3" />
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                    </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative border-t border-border/50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Powerful Features for Academic Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage, share, and discover academic research
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Easy Submission",
                  description: "Upload your thesis with support for PDF, presentations, videos, and audio files.",
                  icon: FileText,
                },
                {
                  title: "Smart Search",
                  description: "Find relevant research by department, year, keywords, and supervisor.",
                  icon: Search,
                },
                {
                  title: "Secure Review",
                  description: "Supervisors can review, approve, or request changes with detailed feedback.",
                  icon: Users,
                },
                {
                  title: "Role-Based Access",
                  description: "Customized dashboards for students, supervisors, and administrators.",
                  icon: BookOpen,
                },
                {
                  title: "Multimedia Support",
                  description: "Store and access theses in multiple formats for comprehensive research.",
                  icon: FileText,
                },
                {
                  title: "Analytics",
                  description: "Track submissions, approvals, and repository growth with detailed insights.",
                  icon: Search,
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                    <Card
                        key={idx}
                        className="border-border bg-background/60 backdrop-blur-sm p-8 hover:shadow-xl hover:bg-background/80 transition-all"
                    >
                      <Icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative border-t border-border/50 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join the SUST Thesis Repository and contribute to our growing academic knowledge base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
              <Link href="/login">
                <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary/90 bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-sm py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-foreground">SUST Thesis</span>
                </div>
                <p className="text-sm text-muted-foreground">Centralized repository for academic research at SUST.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/browse" className="hover:text-primary transition-colors">
                      Browse Theses
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="hover:text-primary transition-colors">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="hover:text-primary transition-colors">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>© 2025 SUST Thesis Repository. All rights reserved.</p>
              <p className="mt-2">Shahjalal University of Science and Technology</p>
            </div>
          </div>
        </footer>
      </div>
  )
}
