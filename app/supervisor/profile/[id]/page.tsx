import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Mail, MapPin, Calendar, Users } from "lucide-react"

export default function SupervisorProfilePage({ params }: { params: { id: string } }) {
  // Mock supervisor data
  const supervisor = {
    id: params.id,
    name: "Dr. Ahmed Hassan",
    email: "ahmed.hassan@sust.edu.bd",
    department: "Computer Science",
    joinDate: "2020-01-15",
    bio: "Professor specializing in machine learning, artificial intelligence, and data science. Supervising multiple thesis projects.",
    studentsCount: 8,
    thesesReviewedCount: 12,
    students: [
      { id: "1", name: "Sarah Johnson", status: "Active" },
      { id: "2", name: "John Smith", status: "Active" },
      { id: "3", name: "Emma Davis", status: "Completed" },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/browse" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Supervisor Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <Card className="border-border bg-card p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xl font-bold">
                {supervisor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{supervisor.name}</h2>
              <p className="text-muted-foreground">{supervisor.department}</p>
              <p className="text-sm text-muted-foreground mt-2">{supervisor.bio}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid gap-4 md:grid-cols-2 pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-foreground">{supervisor.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Department</p>
                <p className="text-foreground">{supervisor.department}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Member Since</p>
                <p className="text-foreground">{new Date(supervisor.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Students</p>
                <p className="text-foreground">{supervisor.studentsCount}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Card className="border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-2">Active Students</p>
            <p className="text-3xl font-bold text-primary">{supervisor.studentsCount}</p>
          </Card>
          <Card className="border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-2">Theses Reviewed</p>
            <p className="text-3xl font-bold text-secondary">{supervisor.thesesReviewedCount}</p>
          </Card>
        </div>

        {/* Students */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Supervised Students</h3>
          <div className="space-y-3">
            {supervisor.students.map((student) => (
              <Card
                key={student.id}
                className="border-border bg-card p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-medium text-foreground">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.status}</p>
                </div>
                <Link href={`/student/profile/${student.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
