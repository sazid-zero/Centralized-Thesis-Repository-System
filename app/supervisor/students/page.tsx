"use client"

import { SupervisorSidebar } from "@/components/supervisor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Mail, FileText } from "lucide-react"
import Link from "next/link"

export default function SupervisorStudentsPage() {
  const students = [
    {
      id: 1,
      name: "Md. Hasan Ali",
      email: "hasan.ali@sust.edu",
      department: "Computer Science",
      thesesCount: 1,
      status: "active",
      lastSubmission: "2024-02-20",
    },
    {
      id: 2,
      name: "Fatima Begum",
      email: "fatima.begum@sust.edu",
      department: "Computer Science",
      thesesCount: 2,
      status: "active",
      lastSubmission: "2024-02-18",
    },
    {
      id: 3,
      name: "Karim Hassan",
      email: "karim.hassan@sust.edu",
      department: "Computer Science",
      thesesCount: 1,
      status: "active",
      lastSubmission: "2024-02-15",
    },
    {
      id: 4,
      name: "Noor Alam",
      email: "noor.alam@sust.edu",
      department: "Computer Science",
      thesesCount: 0,
      status: "inactive",
      lastSubmission: null,
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <SupervisorSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Students</h1>
            <p className="text-muted-foreground">Manage and track your supervised students</p>
          </div>

          <div className="grid gap-4">
            {students.map((student) => (
              <Card key={student.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{student.name}</CardTitle>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {student.email}
                      </CardDescription>
                    </div>
                    <Badge variant={student.status === "active" ? "default" : "secondary"}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Department</p>
                        <p className="font-medium">{student.department}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Theses Submitted</p>
                        <p className="font-medium flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {student.thesesCount}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Last Submission</p>
                        <p className="font-medium">
                          {student.lastSubmission ? new Date(student.lastSubmission).toLocaleDateString() : "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Link href={`/student/profile/${student.id}`}>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        Send Message
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
