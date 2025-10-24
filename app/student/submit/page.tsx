"use client"

import type React from "react"

import { useState } from "react"
import { StudentSidebar } from "@/components/student-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X, FileText, Music, Video, Presentation } from "lucide-react"

export default function SubmitThesisPage() {
  const [files, setFiles] = useState<{ name: string; type: string; size: number }[]>([])
  const [keywords, setKeywords] = useState<string[]>([])
  const [keywordInput, setKeywordInput] = useState("")

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

  const getFileIcon = (type: string) => {
    if (type.includes("audio")) return <Music className="h-4 w-4" />
    if (type.includes("video")) return <Video className="h-4 w-4" />
    if (type.includes("presentation")) return <Presentation className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card p-6">
          <h1 className="text-3xl font-bold text-foreground">Submit Thesis</h1>
          <p className="text-muted-foreground mt-1">Upload your thesis with supporting materials</p>
        </div>

        {/* Content */}
        <div className="p-6 max-w-4xl">
          <form className="space-y-8">
            {/* Thesis Title */}
            <Card className="border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Thesis Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-foreground font-medium">
                    Thesis Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter your thesis title"
                    className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="abstract" className="text-foreground font-medium">
                    Abstract
                  </Label>
                  <textarea
                    id="abstract"
                    placeholder="Write a brief abstract of your thesis (200-300 words)"
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={6}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="department" className="text-foreground font-medium">
                      Department
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 bg-input border-border text-foreground">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                        <SelectItem value="eee">Electrical & Electronic Engineering</SelectItem>
                        <SelectItem value="ce">Civil Engineering</SelectItem>
                        <SelectItem value="me">Mechanical Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="supervisor" className="text-foreground font-medium">
                      Supervisor
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 bg-input border-border text-foreground">
                        <SelectValue placeholder="Select supervisor" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="dr-ahmed">Dr. Ahmed Hassan</SelectItem>
                        <SelectItem value="dr-fatima">Dr. Fatima Khan</SelectItem>
                        <SelectItem value="dr-karim">Dr. Karim Ahmed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>

            {/* Keywords */}
            <Card className="border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Keywords</h2>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddKeyword())}
                    placeholder="Add keyword and press Enter"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Button
                    type="button"
                    onClick={handleAddKeyword}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((keyword, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      <span className="text-sm">{keyword}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveKeyword(idx)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* File Uploads */}
            <Card className="border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">File Uploads</h2>
              <div className="space-y-6">
                {/* PDF Upload */}
                <div>
                  <Label className="text-foreground font-medium mb-2 block">Thesis Document (PDF) - Required</Label>
                  <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PDF up to 50MB</p>
                    </div>
                    <input type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>

                {/* Other Files Upload */}
                <div>
                  <Label className="text-foreground font-medium mb-2 block">Supporting Materials (Optional)</Label>
                  <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">Audio, Video, Slides (MP3, MP4, PPT, PDF)</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept=".mp3,.wav,.mp4,.avi,.ppt,.pptx,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-foreground">Uploaded Files</h3>
                    <div className="space-y-2">
                      {files.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
                        >
                          <div className="flex items-center gap-3">
                            {getFileIcon(file.type)}
                            <div>
                              <p className="text-sm font-medium text-foreground">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(idx)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
                Save Draft
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Submit for Review</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
