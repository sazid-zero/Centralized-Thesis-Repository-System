"use client"

import { StudentSidebar } from "@/components/student-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, Trash2 } from "lucide-react"

export default function StudentSubmissionsPage() {
  const submissions = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      status: "approved",
      submittedDate: "2024-01-15",
      supervisor: "Dr. Ahmed Hassan",
      department: "Computer Science",
      files: ["thesis.pdf", "presentation.pptx"],
    },
    {
      id: 2,
      title: "Renewable Energy Solutions for Bangladesh",
      status: "pending",
      submittedDate: "2024-02-20",
      supervisor: "Dr. Fatima Khan",
      department: "Environmental Engineering",
      files: ["thesis.pdf", "demo.mp4"],
    },
    {
      id: 3,
      title: "Blockchain in Supply Chain Management",
      status: "rejected",
      submittedDate: "2024-01-10",
      supervisor: "Dr. Karim Ahmed",
      department: "Computer Science",
      files: ["thesis.pdf"],
      feedback: "Please revise the methodology section and resubmit",
    },
    {
      id: 4,
      title: "Water Quality Assessment Using IoT",
      status: "in-review",
      submittedDate: "2024-02-25",
      supervisor: "Dr. Noor Alam",
      department: "Civil Engineering",
      files: ["thesis.pdf", "slides.pptx", "audio.mp3"],
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
      case "in-review":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <StudentSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Submissions</h1>
            <p className="text-muted-foreground">Track and manage all your thesis submissions</p>
          </div>

          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{submission.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        Supervisor: {submission.supervisor} • Department: {submission.department}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(submission.status)}>
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1).replace("-", " ")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Submitted: {new Date(submission.submittedDate).toLocaleDateString()}</span>
                      <span>{submission.files.length} file(s)</span>
                    </div>

                    {submission.feedback && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm font-medium text-red-900 mb-1">Feedback:</p>
                        <p className="text-sm text-red-800">{submission.feedback}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {submission.files.map((file, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {file}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      {submission.status === "rejected" && (
                        <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                          Resubmit
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="gap-2 text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
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
