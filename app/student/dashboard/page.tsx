"use client"

import { StudentSidebar } from "@/components/student-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle, Plus } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const stats = [
    { label: "Total Theses", value: "3", icon: FileText, color: "text-primary" },
    { label: "Approved", value: "2", icon: CheckCircle, color: "text-green-600" },
    { label: "In Progress", value: "1", icon: Clock, color: "text-yellow-600" },
    { label: "Rejected", value: "0", icon: XCircle, color: "text-red-600" },
  ]

  const submissions = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      supervisor: "Dr. Ahmed Hassan",
      department: "Computer Science & Engineering",
      status: "approved",
      submitted: "2024-10-15",
    },
    {
      id: 2,
      title: "Renewable Energy Systems Analysis",
      supervisor: "Dr. Fatima Khan",
      department: "Electrical & Electronic Engineering",
      status: "pending",
      submitted: "2024-11-01",
    },
    {
      id: 3,
      title: "Structural Design of Sustainable Buildings",
      supervisor: "Dr. Karim Ahmed",
      department: "Civil Engineering",
      status: "approved",
      submitted: "2024-09-20",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, Sharif Mahmud</p>
            </div>
            <Link href="/student/submit">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Plus className="h-4 w-4" />
                New Submission
              </Button>
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

          {/* Submissions Table */}
          <Card className="border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">My Submissions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Supervisor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Submitted</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{submission.title}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{submission.supervisor}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{submission.department}</td>
                      <td className="px-6 py-4">
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{submission.submitted}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                          View
                        </Button>
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

import { FileText } from "lucide-react"
