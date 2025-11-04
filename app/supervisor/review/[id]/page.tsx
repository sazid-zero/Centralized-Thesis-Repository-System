"use client"

import { SupervisorSidebar } from "@/components/supervisor-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { getThesisById } from "@/lib/data/theses"

export default function ReviewThesisPage({ params }: { params: { id: string } }) {
    const [feedback, setFeedback] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const thesis = getThesisById(Number.parseInt(params.id))

    if (!thesis) {
        return (
            <div className="flex min-h-screen bg-background">
                <SupervisorSidebar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground mb-2">Thesis Not Found</h1>
                        <Link href="/supervisor/reviews" className="text-primary hover:underline">
                            Back to Reviews
                        </Link>
                    </div>
                </main>
            </div>
        )
    }

    const handleApprove = () => {
        setIsSubmitting(true)
        setTimeout(() => setIsSubmitting(false), 1000)
    }

    const handleReject = () => {
        setIsSubmitting(true)
        setTimeout(() => setIsSubmitting(false), 1000)
    }

    return (
        <div className="flex min-h-screen bg-background">
            <SupervisorSidebar />

            <main className="flex-1">
                {/* Header */}
                <div className="border-b border-border bg-card p-6">
                    <Link href="/supervisor/reviews" className="flex items-center gap-2 text-primary hover:underline mb-4">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Reviews
                    </Link>
                    <h1 className="text-3xl font-bold text-foreground">{thesis.title}</h1>
                    <p className="text-muted-foreground mt-2">
                        Submitted by {thesis.author} on {thesis.submitted}
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 max-w-6xl space-y-6">
                    {/* Thesis Information */}
                    <Card className="border-border bg-card p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Thesis Information</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-muted-foreground">Student Name</p>
                                <p className="text-foreground font-medium mt-1">{thesis.author}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Student ID</p>
                                <p className="text-foreground font-medium mt-1">{thesis.authorId}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Department</p>
                                <p className="text-foreground font-medium mt-1">{thesis.department}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Submitted Date</p>
                                <p className="text-foreground font-medium mt-1">{thesis.submitted}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Abstract */}
                    <Card className="border-border bg-card p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Abstract</h2>
                        <p className="text-foreground leading-relaxed">{thesis.abstract}</p>
                    </Card>

                    {/* Keywords */}
                    <Card className="border-border bg-card p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Keywords</h2>
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
                        <h2 className="text-lg font-bold text-foreground mb-4">Submitted Files</h2>
                        <div className="space-y-3">
                            {thesis.files.map((file, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border"
                                >
                                    <div className="flex items-center gap-3">
                                        <Eye className="h-5 w-5 text-primary" />
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
                            ))}
                        </div>
                    </Card>

                    {/* Feedback */}
                    <Card className="border-border bg-card p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Feedback & Comments</h2>
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="Provide detailed feedback for the student..."
                            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={6}
                        />
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <Button
                            onClick={handleApprove}
                            disabled={isSubmitting}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium h-10"
                        >
                            {isSubmitting ? "Processing..." : "Approve Thesis"}
                        </Button>
                        <Button
                            onClick={handleReject}
                            disabled={isSubmitting}
                            variant="outline"
                            className="flex-1 border-red-200 text-red-600 hover:bg-red-50 font-medium h-10 bg-transparent"
                        >
                            {isSubmitting ? "Processing..." : "Request Changes"}
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
