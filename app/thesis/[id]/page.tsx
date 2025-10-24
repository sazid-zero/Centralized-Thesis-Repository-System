"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye, Share2, FileText, Music, Video } from "lucide-react"

export default function ThesisDetailsPage({ params }: { params: { id: string } }) {
  const thesis = {
    id: params.id,
    title: "Machine Learning Applications in Healthcare",
    author: "Ahmed Khan",
    authorId: "2020331001",
    department: "Computer Science & Engineering",
    supervisor: "Dr. Hassan Ahmed",
    year: 2024,
    submitted: "2024-10-15",
    status: "approved",
    abstract:
      "This comprehensive thesis explores the implementation and optimization of machine learning algorithms for healthcare applications. We propose a novel hybrid approach combining collaborative filtering with content-based methods to improve diagnostic accuracy and patient outcomes. The research includes extensive testing on real-world medical datasets and demonstrates significant improvements over existing methods.",
    keywords: ["Machine Learning", "Healthcare", "AI", "Diagnostics", "Neural Networks"],
    views: 1203,
    downloads: 245,
    files: [
      { name: "Thesis_Document.pdf", size: "2.5 MB", type: "pdf", icon: FileText },
      { name: "Presentation.pptx", size: "1.2 MB", type: "presentation", icon: FileText },
      { name: "Demo_Video.mp4", size: "45 MB", type: "video", icon: Video },
      { name: "Audio_Summary.mp3", size: "8.3 MB", type: "audio", icon: Music },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-foreground">SUST Thesis</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Back Button */}
        <Link href="/browse" className="flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Repository
        </Link>

        {/* Title and Status */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">{thesis.title}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-green-100 text-green-800">Approved</Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{thesis.year}</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        {/* Author Information */}
        <Card className="border-border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Author</p>
              <p className="text-foreground font-medium mt-1">{thesis.author}</p>
              <p className="text-xs text-muted-foreground mt-1">ID: {thesis.authorId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Supervisor</p>
              <p className="text-foreground font-medium mt-1">{thesis.supervisor}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Department</p>
              <p className="text-foreground font-medium mt-1">{thesis.department}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Submission Date</p>
              <p className="text-foreground font-medium mt-1">{thesis.submitted}</p>
            </div>
          </div>
        </Card>

        {/* Abstract */}
        <Card className="border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Abstract</h2>
          <p className="text-foreground leading-relaxed">{thesis.abstract}</p>
        </Card>

        {/* Keywords */}
        <Card className="border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {thesis.keywords.map((keyword, idx) => (
              <Badge key={idx} className="bg-primary/10 text-primary border border-primary/20">
                {keyword}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Files */}
        <Card className="border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Available Files</h2>
          <div className="space-y-3">
            {thesis.files.map((file, idx) => {
              const Icon = file.icon
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <Eye className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold text-foreground">{thesis.views}</p>
              </div>
            </div>
          </Card>
          <Card className="border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <Download className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Downloads</p>
                <p className="text-2xl font-bold text-foreground">{thesis.downloads}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Share */}
        <Card className="border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Share This Thesis</h2>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border hover:bg-muted bg-transparent gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
              Copy Link
            </Button>
          </div>
        </Card>
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
