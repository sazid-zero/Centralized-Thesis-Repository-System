"use client"

import Link from "next/link"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {ArrowLeft, Mail, MapPin, Calendar, FileText, User, Award, Phone} from "lucide-react"
import { StudentSidebar } from "@/components/student-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function StudentProfilePage({ params }: { params: Promise<{ id: string }>}) {
    const { id } = React.use(params);
    // Mock student data
    const [isEditing, setIsEditing] = useState(false)
    const [student, setStudent] = useState({

        id,
        name: "Sharif Mahmud",
        email: "asm42@sust.edu.bd",
        department: "Computer Science & Engineering",
        Designation: "Student",
        Session:"2020-2021",
        Semester:"8th",
        Degree:"Bachelor of Science (Engineering)",
        joinDate: "2022-01-15",
        Phone: "+8801872283211",
        Registration:"2020331042",
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
    })

    // Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStudent((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex h-screen bg-background">
            <StudentSidebar />
            <main className="flex-1 overflow-auto mb-20">
                {/* Header */}
                <div className="border-b border-border bg-card">
                    <div className="px-8 py-6">
                        <h1 className="text-3xl font-bold text-foreground">Student Profile</h1>
                        <p className="text-muted-foreground mt-1">Review and update your personal and academic information</p>
                    </div>
                </div>

                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Tabs defaultValue="profile" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                            <TabsTrigger value="theses">Theses</TabsTrigger>
                        </TabsList>

                        {/* Profile Tab */}
                        <TabsContent value="profile" className="space-y-6">
                            <Card className="border-border bg-card p-8">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
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
                                    </div>
                                    <Button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                                    >
                                        {isEditing ? "Cancel" : "Edit Profile"}
                                    </Button>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Email</p>
                                            <p className="text-foreground">{student.email}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Phone</p>
                                            <p className="text-foreground">{student.Phone}</p>
                                        </div>
                                    </div>

                                    {/* Designation */}
                                    <div className="flex items-center gap-3">
                                        <User className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Designation</p>
                                            <p className="text-foreground">{student.Designation}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Department</p>
                                            <p className="text-foreground">{student.department}</p>
                                        </div>
                                    </div>

                                    {/* Registration */}
                                    <div className="flex items-center gap-3">
                                        <User className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Registration</p>
                                            <p className="text-foreground">{student.Registration}</p>
                                        </div>
                                    </div>

                                    {/* Session */}
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Session</p>
                                            <p className="text-foreground">{student.Session}</p>
                                        </div>
                                    </div>

                                    {/* Semester */}
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Semester</p>
                                            <p className="text-foreground">{student.Semester}</p>
                                        </div>
                                    </div>

                                    {/* Degree */}
                                    <div className="flex items-center gap-3">
                                        <Award className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Degree</p>
                                            <p className="text-foreground">{student.Degree}</p>
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
                            {/* Bio Card */}
                            <Card className="border-border bg-card p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-primary mb-2">Bio</h2>
                                        <p className="text-base text-muted-foreground">{student.bio}</p>
                                    </div>
                                </div>
                            </Card>
                            {/* Edit Form */}
                            {isEditing && (
                                <Card className="border-border bg-card p-8">
                                    <h3 className="text-lg font-semibold text-foreground mb-6">Edit Profile Information</h3>
                                    <div className="space-y-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-foreground">
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={student.name}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-foreground">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={student.email}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="department" className="text-foreground">
                                                    Department
                                                </Label>
                                                <Input
                                                    id="department"
                                                    name="department"
                                                    value={student.department}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="designation" className="text-foreground">
                                                    Designation
                                                </Label>
                                                <Input
                                                    id="designation"
                                                    name="designation"
                                                    value={student.Designation}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="session" className="text-foreground">
                                                    Session
                                                </Label>
                                                <Input
                                                    id="session"
                                                    name="session"
                                                    value={student.Session}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="semester" className="text-foreground">
                                                    Semester
                                                </Label>
                                                <Input
                                                    id="semester"
                                                    name="semester"
                                                    value={student.Semester}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="degree" className="text-foreground">
                                                    Degree
                                                </Label>
                                                <Input
                                                    id="degree"
                                                    name="degree"
                                                    value={student.Degree}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-foreground">
                                                    Phone
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={student.Phone}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="registration" className="text-foreground">
                                                    Registration
                                                </Label>
                                                <Input
                                                    id="registration"
                                                    name="registration"
                                                    value={student.Registration}
                                                    onChange={handleInputChange}
                                                    className="border-border bg-background text-foreground"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="bio" className="text-foreground">
                                                Bio
                                            </Label>
                                            <Textarea
                                                id="bio"
                                                name="bio"
                                                value={student.bio}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about yourself..."
                                                className="border-border bg-background text-foreground min-h-24"
                                            />
                                        </div>
                                        <div className="flex gap-3">
                                            <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
                                            <Button variant="outline" onClick={() => setIsEditing(false)}>
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            )}
                        </TabsContent>

                        {/* Thesis Tab */}
                        <TabsContent value="theses" className="space-y-4">
                            <h3 className="text-xl font-bold text-foreground mb-4">Published Theses</h3>
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
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}
