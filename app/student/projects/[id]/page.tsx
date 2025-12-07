"use client"

import { use, useState } from "react"
import { StudentSidebar } from "@/components/student-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, X, FileText, Download, Send, Clock, CheckCircle, Users, Settings, MessageSquare } from 'lucide-react'
import { getProjectById } from "@/lib/data/projects"
import Link from "next/link"

export default function ProjectWorkspacePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const project = getProjectById(Number.parseInt(id))

    const [files, setFiles] = useState<{ name: string; type: string; size: number }[]>([])
    const [keywords, setKeywords] = useState<string[]>(["Machine Learning", "AI"])
    const [keywordInput, setKeywordInput] = useState("")
    const [activity] = useState([
        { user: "Sarah", action: "uploaded thesis.pdf", time: "2 hours ago" },
        { user: "Ahmed", action: "added comments on methodology", time: "5 hours ago" },
        { user: "You", action: "updated abstract", time: "1 day ago" },
    ])

    if (!project) {
        return <div className="p-4 sm:p-6">Project not found</div>
    }

    const handleAddKeyword = () => {
        if (keywordInput.trim() && keywords.length < 5) {
            setKeywords([...keywords, keywordInput.trim()])
            setKeywordInput("")
        }
    }

    const handleRemoveKeyword = (index: number) => {
        setKeywords(keywords.filter((_, i) => i !== index))
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = e.currentTarget.files
        if (uploadedFiles) {
            Array.from(uploadedFiles).forEach((file) => {
                setFiles((prev) => [...prev, { name: file.name, type: file.type, size: file.size }])
            })
        }
    }

    const handleRemoveFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index))
    }

    const getStatusBadge = () => {
        const statusConfig = {
            draft_pending_team: { label: "Pending Team", color: "bg-yellow-100 text-yellow-800" },
            active_no_supervisor: { label: "Need Supervisor", color: "bg-orange-100 text-orange-800" },
            in_progress: { label: "In Progress", color: "bg-blue-100 text-blue-800" },
            pending_review: { label: "Under Review", color: "bg-purple-100 text-purple-800" },
            published: { label: "Published", color: "bg-green-100 text-green-800" },
        }
        const config = statusConfig[project.status as keyof typeof statusConfig]
        return <Badge className={config.color}>{config.label}</Badge>
    }

    return (
        <div className="flex min-h-screen bg-background">
            <StudentSidebar />

            <main className="flex-1 mb-20">
                {/* Header */}
                <div className="border-b border-border bg-card p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground truncate">{project.title}</h1>
                                {getStatusBadge()}
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                Created on {new Date(project.created_at).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                            <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 sm:h-9">
                                Save Draft
                            </Button>
                            {project.status === "in_progress" && (
                                <Button size="sm" className="bg-primary text-primary-foreground text-xs sm:text-sm h-8 sm:h-9">
                                    <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                    Submit for Review
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">Team:</span>
                        {project.collaborators.map((collab, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                                    <AvatarFallback className="text-xs">{collab.user_name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs sm:text-sm text-foreground">{collab.user_name}</span>
                                {collab.role === "primary" && (
                                    <Badge variant="outline" className="text-xs">Lead</Badge>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tabs Content */}
                <div className="p-3 sm:p-4 md:p-6">
                    <Tabs defaultValue="content" className="w-full">
                        <TabsList className="grid w-full grid-cols-5 mb-4 sm:mb-6 h-auto">
                            <TabsTrigger value="overview" className="text-xs sm:text-sm py-2">Overview</TabsTrigger>
                            <TabsTrigger value="content" className="text-xs sm:text-sm py-2">Content</TabsTrigger>
                            <TabsTrigger value="files" className="text-xs sm:text-sm py-2">Files</TabsTrigger>
                            <TabsTrigger value="activity" className="text-xs sm:text-sm py-2">Activity</TabsTrigger>
                            <TabsTrigger value="settings" className="text-xs sm:text-sm py-2">Settings</TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview" className="space-y-4 sm:space-y-6">
                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Project Overview</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Abstract</Label>
                                        <p className="text-xs sm:text-sm text-foreground mt-1 sm:mt-2">{project.abstract}</p>
                                    </div>
                                    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                                        <div>
                                            <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Field</Label>
                                            <p className="text-xs sm:text-sm text-foreground mt-1 sm:mt-2">{project.field}</p>
                                        </div>
                                        <div>
                                            <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Supervisor</Label>
                                            <p className="text-xs sm:text-sm text-foreground mt-1 sm:mt-2">
                                                {project.supervisor_id ? "Dr. Ahmed Hassan" : "Not assigned yet"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Timeline</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium text-foreground">Project Created</p>
                                            <p className="text-xs text-muted-foreground">{new Date(project.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium text-foreground">Currently Working</p>
                                            <p className="text-xs text-muted-foreground">Team collaboration in progress</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        {/* Content Tab */}
                        <TabsContent value="content" className="space-y-4 sm:space-y-6">
                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Research Content</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <Label htmlFor="title" className="text-foreground font-medium text-xs sm:text-sm">
                                            Title
                                        </Label>
                                        <Input
                                            id="title"
                                            defaultValue={project.title}
                                            className="mt-2 bg-input border-border text-foreground text-xs sm:text-sm"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="abstract" className="text-foreground font-medium text-xs sm:text-sm">
                                            Abstract
                                        </Label>
                                        <textarea
                                            id="abstract"
                                            defaultValue={project.abstract}
                                            className="mt-2 w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground text-xs sm:text-sm"
                                            rows={6}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="methodology" className="text-foreground font-medium text-xs sm:text-sm">
                                            Methodology
                                        </Label>
                                        <textarea
                                            id="methodology"
                                            placeholder="Describe your research methodology..."
                                            className="mt-2 w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-xs sm:text-sm"
                                            rows={6}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="results" className="text-foreground font-medium text-xs sm:text-sm">
                                            Results & Discussion
                                        </Label>
                                        <textarea
                                            id="results"
                                            placeholder="Present your findings and discuss the results..."
                                            className="mt-2 w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-xs sm:text-sm"
                                            rows={6}
                                        />
                                    </div>

                                    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                                        <div>
                                            <Label htmlFor="department" className="text-foreground font-medium text-xs sm:text-sm">
                                                Department
                                            </Label>
                                            <Select defaultValue="cse">
                                                <SelectTrigger className="mt-2 bg-input border-border text-foreground text-xs sm:text-sm">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                                                    <SelectItem value="eee">Electrical & Electronic Engineering</SelectItem>
                                                    <SelectItem value="ce">Civil Engineering</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label htmlFor="field" className="text-foreground font-medium text-xs sm:text-sm">
                                                Field
                                            </Label>
                                            <Input
                                                id="field"
                                                defaultValue={project.field}
                                                className="mt-2 bg-input border-border text-foreground text-xs sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Keywords</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex gap-2">
                                        <Input
                                            value={keywordInput}
                                            onChange={(e) => setKeywordInput(e.target.value)}
                                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddKeyword())}
                                            placeholder="Add keyword and press Enter"
                                            className="bg-input border-border text-foreground text-xs sm:text-sm"
                                        />
                                        <Button
                                            type="button"
                                            onClick={handleAddKeyword}
                                            size="sm"
                                            className="text-xs sm:text-sm h-8 sm:h-9"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {keywords.map((keyword, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                <span className="text-xs sm:text-sm">{keyword}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveKeyword(idx)}
                                                    className="hover:opacity-70"
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        {/* Files Tab */}
                        <TabsContent value="files" className="space-y-4 sm:space-y-6">
                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Upload Files</h2>
                                <label className="flex items-center justify-center w-full px-3 py-6 sm:py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                                    <div className="text-center">
                                        <Upload className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-muted-foreground mb-2" />
                                        <p className="text-xs sm:text-sm text-foreground font-medium">Click to upload or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">PDF, DOCX, PPTX, MP3, MP4 up to 50MB</p>
                                    </div>
                                    <input
                                        type="file"
                                        multiple
                                        accept=".pdf,.docx,.pptx,.mp3,.mp4"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                </label>
                            </Card>

                            {files.length > 0 && (
                                <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                    <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Uploaded Files</h2>
                                    <div className="space-y-2">
                                        {files.map((file, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50 border border-border"
                                            >
                                                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                                    <FileText className="h-4 w-4 flex-shrink-0" />
                                                    <div className="min-w-0">
                                                        <p className="text-xs sm:text-sm font-medium text-foreground truncate">{file.name}</p>
                                                        <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 flex-shrink-0">
                                                    <Button variant="ghost" size="sm" className="h-7 w-7 sm:h-8 sm:w-8 p-0">
                                                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                                                    </Button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveFile(idx)}
                                                        className="text-muted-foreground hover:text-foreground h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center"
                                                    >
                                                        <X className="h-3 w-3 sm:h-4 sm:w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            )}
                        </TabsContent>

                        {/* Activity Tab */}
                        <TabsContent value="activity">
                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Recent Activity</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    {activity.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                                            <Avatar className="h-8 w-8 flex-shrink-0">
                                                <AvatarFallback className="text-xs">{item.user.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs sm:text-sm text-foreground">
                                                    <span className="font-medium">{item.user}</span> {item.action}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 space-y-3">
                                    <Label className="text-xs sm:text-sm font-medium text-foreground">Add Comment</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Write a comment..."
                                            className="bg-input border-border text-foreground text-xs sm:text-sm"
                                        />
                                        <Button size="sm" className="h-8 sm:h-9">
                                            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        {/* Settings Tab */}
                        <TabsContent value="settings" className="space-y-4 sm:space-y-6">
                            <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Team Management</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    {project.collaborators.map((collab, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarFallback className="text-xs">{collab.user_name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-xs sm:text-sm font-medium text-foreground">{collab.user_name}</p>
                                                    <p className="text-xs text-muted-foreground capitalize">{collab.role} Author</p>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className={`text-xs ${collab.invitation_status === "accepted" ? "text-green-600" : "text-yellow-600"}`}>
                                                {collab.invitation_status}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {!project.supervisor_id && (
                                <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                                    <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Find Supervisor</h2>
                                    <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                                        Your project needs a supervisor to proceed. Browse available supervisors and send a request.
                                    </p>
                                    <Link href="/student/browse-supervisors">
                                        <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-9">
                                            Browse Supervisors
                                        </Button>
                                    </Link>
                                </Card>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}
