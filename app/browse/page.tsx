"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Eye, X } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function BrowseRepositoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const theses = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      author: "Ahmed Khan",
      department: "Computer Science & Engineering",
      year: 2024,
      abstract:
        "This thesis explores the implementation of machine learning algorithms for personalized recommendation systems and healthcare diagnostics.",
      keywords: ["Machine Learning", "Healthcare", "AI"],
      downloads: 245,
      views: 1203,
      files: ["PDF", "Slides", "Video"],
    },
    {
      id: 2,
      title: "Renewable Energy Systems Analysis",
      author: "Fatima Ali",
      department: "Electrical & Electronic Engineering",
      year: 2024,
      abstract:
        "A comprehensive study on the implementation and optimization of renewable energy systems in urban environments.",
      keywords: ["Renewable Energy", "Solar", "Wind Power"],
      downloads: 189,
      views: 856,
      files: ["PDF", "Slides"],
    },
    {
      id: 3,
      title: "Sustainable Urban Planning",
      author: "Hassan Mahmud",
      department: "Civil Engineering",
      year: 2023,
      abstract:
        "Innovative approaches to sustainable urban development with focus on green spaces and public transportation.",
      keywords: ["Urban Planning", "Sustainability", "Architecture"],
      downloads: 156,
      views: 723,
      files: ["PDF", "Video"],
    },
    {
      id: 4,
      title: "Advanced Structural Design Methods",
      author: "Karim Ahmed",
      department: "Civil Engineering",
      year: 2023,
      abstract: "Novel structural design methodologies for earthquake-resistant buildings in seismic zones.",
      keywords: ["Structural Design", "Earthquake", "Engineering"],
      downloads: 203,
      views: 945,
      files: ["PDF", "Slides", "Audio"],
    },
    {
      id: 5,
      title: "Quantum Computing Fundamentals",
      author: "Noor Hassan",
      department: "Computer Science & Engineering",
      year: 2024,
      abstract:
        "Exploration of quantum computing principles and their applications in solving complex computational problems.",
      keywords: ["Quantum Computing", "Physics", "Computer Science"],
      downloads: 312,
      views: 1567,
      files: ["PDF", "Slides"],
    },
    {
      id: 6,
      title: "Biomedical Signal Processing",
      author: "Aisha Khan",
      department: "Electrical & Electronic Engineering",
      year: 2023,
      abstract:
        "Advanced techniques for processing and analyzing biomedical signals for disease diagnosis and monitoring.",
      keywords: ["Signal Processing", "Biomedical", "Healthcare"],
      downloads: 178,
      views: 834,
      files: ["PDF", "Video"],
    },
  ]

  const filteredTheses = theses.filter((thesis) => {
    const matchesSearch =
      thesis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thesis.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thesis.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesDepartment = selectedDepartment === "All Departments" || thesis.department === selectedDepartment
    const matchesYear = selectedYear === "All Years" || thesis.year.toString() === selectedYear

    return matchesSearch && matchesDepartment && matchesYear
  })

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedDepartment("All Departments")
    setSelectedYear("All Years")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Search className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-foreground">SUST Thesis</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="border-b border-border bg-gradient-to-br from-background via-background to-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Thesis Repository</h1>
          <p className="text-lg text-muted-foreground">Search and discover academic research from SUST</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-foreground">Filters</h2>
                {(searchQuery !== "" || selectedDepartment !== "All Departments" || selectedYear !== "All Years") && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Department Filter */}
                <div>
                  <Label className="text-foreground font-medium mb-2 block">Department</Label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="All Departments">All Departments</SelectItem>
                      <SelectItem value="Computer Science & Engineering">Computer Science & Engineering</SelectItem>
                      <SelectItem value="Electrical & Electronic Engineering">
                        Electrical & Electronic Engineering
                      </SelectItem>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Year Filter */}
                <div>
                  <Label className="text-foreground font-medium mb-2 block">Year</Label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="All Years">All Years</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Results Count */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredTheses.length}</span> of{" "}
                    <span className="font-semibold text-foreground">{theses.length}</span> theses
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <Card className="border-border bg-card p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, author, or keywords..."
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
                />
              </div>
            </Card>

            {/* Results */}
            {filteredTheses.length > 0 ? (
              <div className="space-y-4">
                {filteredTheses.map((thesis) => (
                  <Card key={thesis.id} className="border-border bg-card p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      {/* Title and Author */}
                      <div>
                        <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                          {thesis.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          By <span className="font-medium">{thesis.author}</span> • {thesis.department} • {thesis.year}
                        </p>
                      </div>

                      {/* Abstract */}
                      <p className="text-foreground leading-relaxed line-clamp-2">{thesis.abstract}</p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2">
                        {thesis.keywords.map((keyword, idx) => (
                          <Badge key={idx} className="bg-primary/10 text-primary border border-primary/20">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats and Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>{thesis.views} views</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            <span>{thesis.downloads} downloads</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-border hover:bg-muted bg-transparent">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-border bg-card p-12 text-center">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No theses found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SUST Thesis Repository. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
