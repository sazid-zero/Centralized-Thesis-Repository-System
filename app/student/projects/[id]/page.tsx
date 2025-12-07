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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import {
  Upload, X, FileText, Send, Clock, CheckCircle, Users, Settings, MessageSquare, UserCheck,
  Code, Database, Brain, BarChart3
} from 'lucide-react'
import { getProjectById, createSupervisorRequest } from "@/lib/data/projects"
import Link from "next/link"

const mockSupervisors = [
  { id: 'supervisor1', name: 'Dr. Ahmed Hassan', department: 'Computer Science & Engineering', specialization: 'Machine Learning', currentProjects: 5 },
  { id: 'supervisor2', name: 'Dr. Sarah Khan', department: 'Computer Science & Engineering', specialization: 'IoT & Networks', currentProjects: 3 },
  { id: 'supervisor3', name: 'Dr. Michael Wong', department: 'Computer Science & Engineering', specialization: 'Blockchain & Security', currentProjects: 4 },
  { id: 'supervisor4', name: 'Dr. Emily Davis', department: 'Electrical & Electronic Engineering', specialization: 'Power Systems', currentProjects: 6 },
]

export default function ProjectWorkspacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = getProjectById(id)

  const [keywords, setKeywords] = useState<string[]>(["Machine Learning", "AI"])
  const [keywordInput, setKeywordInput] = useState("")

  const [activity] = useState([
    { user: "Sharif", action: "uploaded thesis.pdf", time: "2 hours ago" },
    { user: "Ahmed", action: "added comments on methodology", time: "5 hours ago" },
    { user: "You", action: "updated abstract", time: "1 day ago" },
  ])

  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)
  const [selectedSupervisor, setSelectedSupervisor] = useState<string>("")
  const [requestMessage, setRequestMessage] = useState("")
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false)

  if (!project) {
    return (
      <div className="flex h-screen bg-background">
        <StudentSidebar/>
       
        <main className="flex-1 p-6">
          <Card className="border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Project Not Found</h2>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
            <Link href="/student/projects"><Button>Back to Projects</Button></Link>
          </Card>
        </main>
      </div>
    )
  }

  const availableSupervisors = mockSupervisors.filter(s => s.department === project.department)

  const handleAddKeyword = () => {
    if (keywordInput.trim() && keywords.length < 10) {
      setKeywords([...keywords, keywordInput.trim()])
      setKeywordInput("")
    }
  }

  const handleRemoveKeyword = (i: number) => setKeywords(keywords.filter((_, idx) => idx !== i))

  const handleSendRequest = () => {
    if (!selectedSupervisor || !requestMessage.trim()) return
    const supervisor = availableSupervisors.find(s => s.id === selectedSupervisor)
    if (!supervisor) return

    createSupervisorRequest({
      projectId: project.id,
      supervisorId: supervisor.id,
      supervisorName: supervisor.name,
      status: 'pending',
      requestMessage: requestMessage.trim(),
    })

    setIsRequestDialogOpen(false)
    setSelectedSupervisor("")
    setRequestMessage("")
    alert(`Request sent to ${supervisor.name}!`)
  }

  const getStatusBadge = () => {
    const config: Record<string, { label: string; class: string }> = {
      draft_pending_team: { label: "Pending Team", class: "bg-yellow-100 text-yellow-800" },
      active_no_supervisor: { label: "Need Supervisor", class: "bg-orange-100 text-orange-800" },
      pending_supervisor: { label: "Pending Supervisor", class: "bg-blue-100 text-blue-800" },
      in_progress: { label: "In Progress", class: "bg-emerald-100 text-emerald-800" },
      pending_review: { label: "Under Review", class: "bg-purple-100 text-purple-800" },
      published: { label: "Published", class: "bg-green-100 text-green-800" },
    }
    const c = config[project.status] || config.in_progress
    return <Badge className={`font-medium ${c.class}`}>{c.label}</Badge>
  }

  // Link Manager Component
  function LinkManager({ placeholder }: { placeholder: string }) {
    const [links, setLinks] = useState<string[]>([])
    const [input, setInput] = useState("")

    const addLink = () => {
      const url = input.trim()
      if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
        setLinks([...links, url])
        setInput("")
      }
    }

    return (
      <div className="space-y-3">
        {links.map((link, i) => (
          <div key={i} className="flex items-center justify-between bg-muted/50 px-4 py-2.5 rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline truncate mr-3">
              {link}
            </a>
            <button onClick={() => setLinks(links.filter((_, idx) => idx !== i))} className="hover:text-destructive">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLink())}
            placeholder={placeholder}
            className="flex-1"
          />
          <Button onClick={addLink} size="sm">Add Link</Button>
        </div>
        {input && !input.startsWith("http") && (
          <p className="text-xs text-red-600">Include http:// or https://</p>
        )}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-border lg:bg-card lg:overflow-hidden">
        <StudentSidebar />
      </div>

      <main className="flex-1 lg:ml-64 overflow-y-auto">
        {/* Header */}
        <div className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
                  {getStatusBadge()}
                </div>
                <p className="text-muted-foreground">
                  Created on {new Date(project.createdAt).toLocaleDateString()} • {project.department}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <span className="font-medium text-muted-foreground">Team:</span>
                  {project.collaborators.map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Avatar className="h-8 w-8 ring-2 ring-background">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm">
                          {c.userName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-sm font-medium text-foreground">{c.userName}</span>
                        {c.role === "primary_author" && <Badge variant="secondary" className="ml-2 text-xs">Lead</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.status === "in_progress" && (
                  <Button
                    size="lg"
                    onClick={() => setIsSubmitDialogOpen(true)}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl px-8"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit for Review
                  </Button>
                )}
                <Button variant="outline" size="sm">Save Draft</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Files Tab */}
            <TabsContent value="files" className="space-y-8">
              {[
                { title: "Documents", icon: FileText, accept: ".pdf,.docx,.pptx,.doc", hasLinks: false },
                { title: "Code Repository", icon: Code, accept: ".zip,.rar,.7z", hasLinks: true, placeholder: "https://github.com/username/repo" },
                { title: "Datasets", icon: Database, accept: ".csv,.json,.parquet,.zip", hasLinks: true, placeholder: "https://kaggle.com/datasets/..." },
                { title: "Trained Models", icon: Brain, accept: ".pth,.pt,.h5,.onnx,.safetensors", hasLinks: true, placeholder: "https://huggingface.co/username/model" },
                { title: "Results & Images", icon: BarChart3, accept: "image/*,.csv,.xlsx,.pdf", hasLinks: false },
              ].map(({ title, icon: Icon, accept, hasLinks, placeholder }) => (
                <Card key={title} className="p-6 border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    {title}
                  </h3>

                  {hasLinks && <LinkManager placeholder={placeholder!} />}

                  <div className="mt-2">
                    <p className="text-sm font-medium text-foreground mb-3">Upload files (optional)</p>
                    <label className="block">
                      <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:bg-muted/50 transition cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="font-medium">Click to upload or drag & drop</p>
                        <p className="text-sm text-muted-foreground mt-1">Supported: {accept}</p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept={accept}
                        className="hidden"
                        onChange={(e) => e.target.files?.length && console.log(`${title} files:`, e.target.files)}
                      />
                    </label>
                  </div>
                </Card>
              ))}
            </TabsContent>

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
                        {project.supervisorId ? project.supervisorName : "Not assigned yet"}
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
                      <p className="text-xs text-muted-foreground">{new Date(project.createdAt).toLocaleDateString()}</p>
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
                          <AvatarFallback className="text-xs">{collab.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{collab.userName}</p>
                          <p className="text-xs text-muted-foreground capitalize">{collab.role.replace('_', ' ')}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${collab.invitationStatus === "accepted" ? "text-green-600" : "text-yellow-600"}`}>
                        {collab.invitationStatus}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {(project.status === "active_no_supervisor" || project.status === "pending_supervisor") && (
                <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <UserCheck className="h-5 w-5 text-primary" />
                    <h2 className="text-base sm:text-lg font-semibold text-foreground">Supervisor Assignment</h2>
                  </div>

                  {project.status === "pending_supervisor" ? (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-foreground">Supervision request pending</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Waiting for supervisor response. You'll be notified once they accept or decline.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                        Select a supervisor from your department ({project.department}) to guide your research project.
                      </p>

                      <div className="space-y-3">
                        <Label className="text-xs sm:text-sm font-medium text-foreground">Available Supervisors</Label>
                        <Select value={selectedSupervisor} onValueChange={setSelectedSupervisor}>
                          <SelectTrigger className="bg-input border-border text-foreground text-xs sm:text-sm">
                            <SelectValue placeholder="Select a supervisor" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableSupervisors.map(supervisor => (
                              <SelectItem key={supervisor.id} value={supervisor.id}>
                                <div className="flex flex-col">
                                  <span className="font-medium">{supervisor.name}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {supervisor.specialization} • {supervisor.currentProjects} projects
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {selectedSupervisor && (
                          <div className="mt-3 p-3 rounded-lg bg-muted/50 border border-border">
                            {(() => {
                              const supervisor = availableSupervisors.find(s => s.id === selectedSupervisor)
                              return supervisor ? (
                                <div className="space-y-2">
                                  <p className="text-xs sm:text-sm font-medium text-foreground">{supervisor.name}</p>
                                  <p className="text-xs text-muted-foreground">Specialization: {supervisor.specialization}</p>
                                  <p className="text-xs text-muted-foreground">Current Projects: {supervisor.currentProjects}</p>
                                </div>
                              ) : null
                            })()}
                          </div>
                        )}

                        <Button
                          onClick={() => setIsRequestDialogOpen(true)}
                          disabled={!selectedSupervisor}
                          size="sm"
                          className="w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-9 mt-2"
                        >
                          <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Send Supervision Request
                        </Button>
                      </div>
                    </>
                  )}
                </Card>
              )}

              {project.supervisorId && (
                <Card className="border-border bg-card p-3 sm:p-4 md:p-6">
                  <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Supervisor</h2>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-foreground">{project.supervisorName}</p>
                      <p className="text-xs text-muted-foreground">Supervising your project</p>
                    </div>
                  </div>
                </Card>
              )}
            </TabsContent>

          </Tabs>
        </div>
      </main>

      {/* Submit Dialog */}
      <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Submit Thesis for Review?</DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-5">
            <div className="flex gap-4">
              <CheckCircle className="h-12 w-12 text-emerald-600 flex-shrink-0" />
              <div className="space-y-3">
                <p className="font-semibold">You are submitting:</p>
                <p className="text-lg font-bold text-foreground">{project.title}</p>
                <p className="text-sm text-muted-foreground">
                  After submission, the thesis will be locked and sent to your supervisor.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex gap-3">
              <Clock className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm">You will no longer be able to edit after confirming.</p>
            </div>
          </div>
          <DialogFooter className="gap-3">
            <Button variant="outline" onClick={() => setIsSubmitDialogOpen(false)}>Cancel</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium" onClick={() => {
              alert("Thesis submitted successfully!")
              setIsSubmitDialogOpen(false)
            }}>
              <Send className="h-4 w-4 mr-2" />
              Confirm & Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Supervisor Request Dialog */}
      <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Send Supervision Request</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label className="text-sm font-medium text-foreground mb-2">Supervisor</Label>
              <p className="text-sm text-muted-foreground">
                {availableSupervisors.find(s => s.id === selectedSupervisor)?.name}
              </p>
            </div>
            <div>
              <Label className="text-sm font-medium text-foreground mb-2">Project</Label>
              <p className="text-sm text-muted-foreground">{project.title}</p>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                Request Message *
              </Label>
              <Textarea
                id="message"
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                placeholder="Explain why you'd like this supervisor to guide your research..."
                className="min-h-[120px] bg-input border-border text-foreground"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Include your research topic, methodology, and why you chose this supervisor.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRequestDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSendRequest} disabled={!requestMessage.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Send Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}