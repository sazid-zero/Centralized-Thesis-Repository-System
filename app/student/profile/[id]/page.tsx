import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Mail, MapPin, Calendar, FileText } from "lucide-react"
import { StudentSidebar } from "@/components/student-sidebar"

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  // Mock student data
  const student = {
    id: params.id,
    name: "Sharif Mahmud",
    email: "asm42@sust.edu.bd",
    department: "Computer Science",
    joinDate: "2022-01-15",
    bio: "Passionate about machine learning and data science. Currently working on thesis about AI applications in healthcare.",
    thesesCount: 1,
    theses: [
      {
        id: "1",
        title: "Machine Learning in Healthcare",
        status: "Approved",
        year: 2024,
        abstract: "This thesis explores the application of machine learning algorithms in healthcare diagnostics...",
      },
    ],
  }

  return (
      <div className="flex h-screen bg-background">
        <StudentSidebar />
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="border-b border-border bg-card">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
              <Link href="/browse" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              <h1 className="text-3xl font-bold text-foreground">Student Profile</h1>
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Profile Card */}
            <Card className="border-border bg-card p-8 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                    {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground">{student.name}</h2>
                  <p className="text-muted-foreground">{student.department}</p>
                  <p className="text-sm text-muted-foreground mt-2">{student.bio}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid gap-4 md:grid-cols-2 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-foreground">{student.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Department</p>
                    <p className="text-foreground">{student.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Member Since</p>
                    <p className="text-foreground">{new Date(student.joinDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Theses</p>
                    <p className="text-foreground">{student.thesesCount}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Theses */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Published Theses</h3>
              <div className="space-y-4">
                {student.theses.map((thesis) => (
                    <Card key={thesis.id} className="border-border bg-card p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">{thesis.title}</h4>
                        <Badge className="bg-green-600 text-white">{thesis.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{thesis.abstract}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">Year: {thesis.year}</p>
                        <Link href={`/thesis/${thesis.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
