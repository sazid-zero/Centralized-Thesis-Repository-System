"use client"

import { SupervisorSidebar } from "@/components/supervisor-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function SupervisorDashboard() {
  const stats = [
    { label: "Pending Reviews", value: "5", icon: Clock, color: "text-yellow-600" },
    { label: "Approved", value: "12", icon: CheckCircle, color: "text-green-600" },
    { label: "My Students", value: "8", icon: Users, color: "text-primary" },
    { label: "Total Reviewed", value: "17", icon: FileText, color: "text-blue-600" },
  ]

  const pendingReviews = [
    {
      id: 1,
      title: "AI-Powered Recommendation Systems",
      student: "Ahmed Khan",
      department: "Computer Science & Engineering",
      submitted: "2024-11-10",
    },
    {
      id: 2,
      title: "Smart Grid Technology Implementation",
      student: "Fatima Ali",
      department: "Electrical & Electronic Engineering",
      submitted: "2024-11-08",
    },
    {
      id: 3,
      title: "Sustainable Urban Planning",
      student: "Hassan Mahmud",
      department: "Civil Engineering",
      submitted: "2024-11-05",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <SupervisorSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, Dr. Ahmed Hassan</p>
            </div>
            <Link href="/supervisor/reviews">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Review Submissions</Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} className="border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Pending Reviews */}
          <Card className="border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
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
