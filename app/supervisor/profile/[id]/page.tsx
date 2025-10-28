"use client"

import type React from "react"
import { useState } from "react"
import { SupervisorSidebar } from "@/components/supervisor-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Calendar, Award } from "lucide-react"

export default function SupervisorProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Dr. Ahmed",
    lastName: "Hassan",
    email: "ahmed.hassan@sust.edu.bd",
    phone: "+880-1234-567890",
    department: "Computer Science",
    designation: "Associate Professor",
    bio: "Specializing in artificial intelligence, machine learning, and data science research.",
    joinDate: "2018-01-15",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
      <div className="flex min-h-screen bg-background">
        <SupervisorSidebar />
        <main className="flex-1">
          {/* Header */}
          <div className="border-b border-border bg-card">
            <div className="px-8 py-6">
              <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
              <p className="text-muted-foreground mt-1">Manage your account information and settings</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="max-w-4xl">
              <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="profile">Profile Information</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6">
                  {/* Profile Header */}
                  <Card className="border-border bg-card p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                      <Avatar className="h-24 w-24">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                          {formData.firstName[0]}
                          {formData.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground">
                          {formData.firstName} {formData.lastName}
                        </h2>
                        <p className="text-muted-foreground">{formData.designation}</p>
                        <p className="text-sm text-muted-foreground mt-1">{formData.department}</p>
                      </div>
                      <Button
                          onClick={() => setIsEditing(!isEditing)}
                          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                      >
                        {isEditing ? "Cancel" : "Edit Profile"}
                      </Button>
                    </div>

                    {/* Profile Details */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Email</p>
                          <p className="text-foreground">{formData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <p className="text-foreground">{formData.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Department</p>
                          <p className="text-foreground">{formData.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Designation</p>
                          <p className="text-foreground">{formData.designation}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground col-span-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Member Since</p>
                          <p className="text-foreground">{new Date(formData.joinDate).toLocaleDateString()}</p>
                        </div>
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
                              <Label htmlFor="firstName" className="text-foreground">
                                First Name
                              </Label>
                              <Input
                                  id="firstName"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  className="border-border bg-background text-foreground"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName" className="text-foreground">
                                Last Name
                              </Label>
                              <Input
                                  id="lastName"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  className="border-border bg-background text-foreground"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">
                              Email Address
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border-border bg-background text-foreground"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-foreground">
                              Phone Number
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="border-border bg-background text-foreground"
                            />
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="department" className="text-foreground">
                                Department
                              </Label>
                              <Select
                                  value={formData.department}
                                  onValueChange={(value) => handleSelectChange("department", value)}
                              >
                                <SelectTrigger className="border-border bg-background text-foreground">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                                  <SelectItem value="Engineering">Engineering</SelectItem>
                                  <SelectItem value="Business">Business</SelectItem>
                                  <SelectItem value="Science">Science</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="designation" className="text-foreground">
                                Designation
                              </Label>
                              <Input
                                  id="designation"
                                  name="designation"
                                  value={formData.designation}
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
                                value={formData.bio}
                                onChange={handleInputChange}
                                placeholder="Tell us about your research interests..."
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

                {/* Settings Tab */}
                <TabsContent value="settings" className="space-y-6">
                  <Card className="border-border bg-card p-8">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Account Settings</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div>
                          <p className="font-medium text-foreground">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive updates about new submissions</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-border" />
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div>
                          <p className="font-medium text-foreground">Review Reminders</p>
                          <p className="text-sm text-muted-foreground">Get reminded about pending reviews</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-border" />
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div>
                          <p className="font-medium text-foreground">Newsletter</p>
                          <p className="text-sm text-muted-foreground">Receive monthly repository updates</p>
                        </div>
                        <input type="checkbox" className="h-5 w-5 rounded border-border" />
                      </div>

                      <div className="pt-4">
                        <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-border bg-card p-8 border-destructive/50">
                    <h3 className="text-lg font-semibold text-destructive mb-4">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
  )
}
