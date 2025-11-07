"use client"

import { SupervisorSidebar } from "@/components/supervisor-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, FileText } from "lucide-react"
import Link from "next/link"
import { getAllTheses } from "@/lib/data/theses"

export default function SupervisorDashboard() {
    const allTheses = getAllTheses()

    const pendingReviews = allTheses.slice(0, 3).map((thesis) => ({
        id: thesis.id,
        title: thesis.title,
        student: `Student ${thesis.id}`,
        department: thesis.department,
        submitted: `2024-11-${String((thesis.id % 28) + 1).padStart(2, "0")}`,
    }))

    const stats = [
        { label: "Pending Reviews", value: pendingReviews.length.toString(), icon: Clock, color: "text-yellow-600" },
        { label: "Approved", value: (allTheses.length * 0.7).toFixed(0), icon: CheckCircle, color: "text-green-600" },
        { label: "My Students", value: Math.ceil(allTheses.length / 3).toString(), icon: Users, color: "text-primary" },
        { label: "Total Reviewed", value: allTheses.length.toString(), icon: FileText, color: "text-blue-600" },
    ]

    return (
        <div className="flex h-screen bg-background">
            <SupervisorSidebar />

            <main className="w-full">
                {/* Header */}
                <div className="border-b border-border bg-card p-4 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Welcome back, Dr. Ahmed Hassan</p>
                        </div>
                        <Link href="/supervisor/reviews">
                            <Button className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-primary to-accent hover:scale-105 text-primary-foreground">
                                <span className="hidden sm:inline text-base">Review Submission</span>
                                <span className="sm:hidden">Review</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                    {/* Stats Grid */}
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon
                            return (
                                <Card key={idx} className="border-border bg-card p-4 sm:p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                                            <p className="text-xl sm:text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                                        </div>
                                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Pending Reviews */}
                    <Card className="mb-20 gap-0 border-border bg-card overflow-auto">
                        <div className="pt-0 p-4 sm:p-6 sm:pt-0 border-b border-border flex items-center justify-between">
                            <h2 className="text-xl font-bold text-foreground">Pending Reviews</h2>
                            <Badge className="bg-yellow-100 text-yellow-800">{pendingReviews.length} Pending</Badge>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-border bg-muted/50">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Thesis Title</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Student</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submitted</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {pendingReviews.map((review) => (
                                    <tr key={review.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-foreground font-medium">{review.title}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{review.student}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{review.department}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{review.submitted}</td>
                                        <td className="px-6 py-4">
                                            <Link href={`/supervisor/review/${review.id}`}>
                                                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                                                    Review
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
