"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye, Share2, FileText, Music, Video, File } from "lucide-react"
import { getThesisById } from "@/lib/data/theses"
import { notFound, useRouter } from "next/navigation"
import { useEffect, useRef, use } from "react"

export default function ThesisDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const thesis = getThesisById(Number.parseInt(id))
    const hasScrolled = useRef(false)
    const router = useRouter()

    if (!thesis) {
        notFound()
    }

    useEffect(() => {
        const navigationType = window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        const isBackForward = navigationType?.type === "back_forward"

        if (!isBackForward && !hasScrolled.current) {
            window.scrollTo(0, 0)
            hasScrolled.current = true
        }
    }, [id])

    const getFileIcon = (type: string) => {
        switch (type) {
            case "pdf":
            case "presentation":
                return FileText
            case "video":
                return Video
            case "audio":
                return Music
            default:
                return File
        }
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "approved":
                return <Badge className="bg-green-100 text-green-800">Approved</Badge>
            case "pending":
                return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
            case "rejected":
                return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
            case "in-review":
                return <Badge className="bg-blue-100 text-blue-800">In Review</Badge>
            default:
                return null
        }
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
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-primary hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Repository
                </button>

                {/* Title and Status */}
                <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-foreground mb-3">{thesis.title}</h1>
                            <div className="flex items-center gap-3 flex-wrap">
                                {getStatusBadge(thesis.status)}
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
                            const Icon = getFileIcon(file.type)
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
