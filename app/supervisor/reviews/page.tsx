"use client"

import { SupervisorSidebar } from "@/components/supervisor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { getAllTheses } from "@/lib/data/theses"

export default function SupervisorReviewsPage() {
    const allTheses = getAllTheses()

    const pendingReviews = allTheses
        .filter((_, i) => i % 2 === 0)
        .map((thesis) => ({
            id: thesis.id,
            title: thesis.title,
            student: `Student ${thesis.id}`,
            department: thesis.department,
            submittedDate: `2024-02-${String((thesis.id % 28) + 1).padStart(2, "0")}`,
            daysWaiting: (thesis.id % 10) + 1,
            priority: thesis.id % 3 === 0 ? "high" : thesis.id % 3 === 1 ? "medium" : "low",
        }))

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800"
            case "medium":
                return "bg-yellow-100 text-yellow-800"
            case "low":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="flex h-screen bg-background">
            <SupervisorSidebar />
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-2">Pending Reviews</h1>
                        <p className="text-muted-foreground">Review and approve student thesis submissions</p>
                    </div>

                    <div className="grid gap-4">
                        {pendingReviews.map((review) => (
                            <Card key={review.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <FileText className="h-5 w-5 text-primary" />
                                                <CardTitle className="text-lg">{review.title}</CardTitle>
                                            </div>
                                            <CardDescription>
                                                Student: {review.student} • Department: {review.department}
                                            </CardDescription>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge className={getPriorityColor(review.priority)}>
                                                {review.priority.charAt(0).toUpperCase() + review.priority.slice(1)} Priority
                                            </Badge>
                                            {review.daysWaiting > 7 && (
                                                <Badge variant="destructive" className="gap-1">
                                                    <AlertCircle className="h-3 w-3" />
                                                    {review.daysWaiting}d
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="h-4 w-4" />
                                            <span>Submitted {review.daysWaiting} days ago</span>
                                        </div>
                                        <Link href={`/supervisor/review/${review.id}`}>
                                            <Button className="gap-2">Review Now</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
