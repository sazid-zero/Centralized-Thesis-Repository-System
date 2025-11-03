"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
    Search,
    Download,
    Eye,
    X,
    BookOpen,
    Zap,
    Microscope,
    TrendingUp,
    Github,
    User,
    BarChart3,
    LayoutDashboard,
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { thesesDatabase } from "@/lib/data/theses"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BrowseRepositoryPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
    const [selectedYear, setSelectedYear] = useState("All Years")
    const [selectedField, setSelectedField] = useState("All Fields")
    const [navSearchQuery, setNavSearchQuery] = useState("")

    const filteredTheses = thesesDatabase.filter((thesis) => {
        const searchTerm = searchQuery || navSearchQuery
        const matchesSearch =
            thesis.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            thesis.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            thesis.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesDepartment = selectedDepartment === "All Departments" || thesis.department === selectedDepartment
        const matchesYear = selectedYear === "All Years" || thesis.year.toString() === selectedYear
        const matchesField =
            selectedField === "All Fields" ||
            thesis.keywords.some((k) => k.toLowerCase().includes(selectedField.toLowerCase()))

        return matchesSearch && matchesDepartment && matchesYear && matchesField
    })

    const clearFilters = () => {
        setSearchQuery("")
        setNavSearchQuery("")
        setSelectedDepartment("All Departments")
        setSelectedYear("All Years")
        setSelectedField("All Fields")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                                <Search className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Research Portal
              </span>
                        </Link>

                        <div className="flex-1 max-w-md hidden md:block ">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    value={navSearchQuery}
                                    onChange={(e) => setNavSearchQuery(e.target.value)}
                                    placeholder="Quick search..."
                                    className="pl-9 bg-background border-border text-foreground placeholder:text-muted-foreground h-9"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <Link href="/#about" className="text-foreground hover:text-primary font-medium text-sm hidden lg:block">
                                About
                            </Link>
                            <Link href="/help" className="text-foreground hover:text-primary font-medium hidden text-sm lg:block">
                                Help
                            </Link>
                            <Link href="/student/dashboard">
                                <Button variant="outline" size="sm" className="border-border hover:bg-primary bg-transparent">
                                    <LayoutDashboard className="h-5 w-5 mr-2" />
                                    <span className="hidden sm:inline ">Dashboard</span>
                                </Button>
                            </Link>
                            <ThemeToggle />
                            <Link href="/settings">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 cursor-pointer hover:border-primary/50 transition-colors">
                                    <User className="h-5 w-5 text-primary" />
                                </div>
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
                        <Card className="border-2 border-border bg-card backdrop-blur-sm p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-foreground">Filters</h2>
                                {(searchQuery !== "" ||
                                    selectedDepartment !== "All Departments" ||
                                    selectedYear !== "All Years" ||
                                    selectedField !== "All Fields") && (
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
                                {/* Field Filter */}
                                <div>
                                    <Label className="text-foreground font-medium mb-2 block">Field</Label>
                                    <Select value={selectedField} onValueChange={setSelectedField}>
                                        <SelectTrigger className="bg-background border-border text-foreground">
                                            <SelectValue placeholder="All Fields" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-popover border-border">
                                            <SelectItem value="All Fields">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4" />
                                                    All Fields
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Machine Learning">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="h-4 w-4" />
                                                    Artificial Intelligence
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Biomedical">
                                                <div className="flex items-center gap-2">
                                                    <Microscope className="h-4 w-4" />
                                                    Biotechnology
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Physics">
                                                <div className="flex items-center gap-2">
                                                    <TrendingUp className="h-4 w-4" />
                                                    Physics and Mathematics
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Chemistry">
                                                <div className="flex items-center gap-2">
                                                    <Microscope className="h-4 w-4" />
                                                    Chemistry
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Environmental">
                                                <div className="flex items-center gap-2">
                                                    <TrendingUp className="h-4 w-4" />
                                                    Environmental Science
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Robotics">
                                                <div className="flex items-center gap-2">
                                                    <Github className="h-4 w-4" />
                                                    Robotics and Automation
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Economics">
                                                <div className="flex items-center gap-2">
                                                    <BarChart3 className="h-4 w-4" />
                                                    Economics
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Agriculture">
                                                <div className="flex items-center gap-2">
                                                    <Microscope className="h-4 w-4" />
                                                    Agriculture and Food Technology
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="Computer Science">
                                                <div className="flex items-center gap-2">
                                                    <Github className="h-4 w-4" />
                                                    Computer Science
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Department Filter */}
                                <div>
                                    <Label className="text-foreground font-medium mb-2 block">Department</Label>
                                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                                        <SelectTrigger className="bg-background border-border text-foreground">
                                            <SelectValue placeholder="All Departments" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-popover border-border">
                                            <SelectItem value="All Departments">All Departments</SelectItem>
                                            <SelectItem value="Computer Science & Engineering">Computer Science & Engineering</SelectItem>
                                            <SelectItem value="Electrical & Electronic Engineering">
                                                Electrical & Electronic Engineering
                                            </SelectItem>
                                            <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                                            <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                                            <SelectItem value="Biochemistry">Biochemistry</SelectItem>
                                            <SelectItem value="Physics">Physics</SelectItem>
                                            <SelectItem value="Mathematics">Mathematics</SelectItem>
                                            <SelectItem value="Chemistry">Chemistry</SelectItem>
                                            <SelectItem value="Environmental Science">Environmental Science</SelectItem>
                                            <SelectItem value="Robotics & Automation">Robotics & Automation</SelectItem>
                                            <SelectItem value="Economics">Economics</SelectItem>
                                            <SelectItem value="Agriculture & Food Technology">Agriculture & Food Technology</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Year Filter */}
                                <div>
                                    <Label className="text-foreground font-medium mb-2 block">Year</Label>
                                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                                        <SelectTrigger className="bg-background border-border text-foreground">
                                            <SelectValue placeholder="All Years" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-popover border-border">
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
                                        <span className="font-semibold text-foreground">{thesesDatabase.length}</span> theses
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
                                                <Link href={`/thesis/${thesis.id}`}>
                                                    <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                                                        {thesis.title}
                                                    </h3>
                                                </Link>
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
                                                    <Link href={`/thesis/${thesis.id}`}>
                                                        <Button variant="outline" size="sm" className="border-border hover:bg-muted bg-transparent">
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Button>
                                                    </Link>
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
