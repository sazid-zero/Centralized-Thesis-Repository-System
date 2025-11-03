"use client"

import { StudentSidebar } from "@/components/student-sidebar"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, Mail, Shield, Palette } from "lucide-react"

export default function StudentSettings() {
    return (
        <div className="flex min-h-screen bg-background">
            <StudentSidebar />

            <main className="flex-1">
                {/* Header */}
                <div className="border-b border-border bg-card p-6">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                        <p className="text-muted-foreground mt-1">Manage your account preferences</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 max-w-4xl">
                    {/* Appearance */}
                    <Card className="border-border bg-card p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Palette className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground mb-1">Appearance</h3>
                                <p className="text-sm text-muted-foreground mb-4">Customize how the app looks</p>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="theme" className="text-foreground">
                                        Theme
                                    </Label>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Notifications */}
                    <Card className="border-border bg-card p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Bell className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">Notifications</h3>
                                    <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="thesis-updates" className="text-foreground">
                                            Thesis status updates
                                        </Label>
                                        <Switch id="thesis-updates" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="supervisor-feedback" className="text-foreground">
                                            Supervisor feedback
                                        </Label>
                                        <Switch id="supervisor-feedback" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="deadline-reminders" className="text-foreground">
                                            Deadline reminders
                                        </Label>
                                        <Switch id="deadline-reminders" defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Email Preferences */}
                    <Card className="border-border bg-card p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">Email Preferences</h3>
                                    <p className="text-sm text-muted-foreground">Control what emails you receive</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="email-notifications" className="text-foreground">
                                            Email notifications
                                        </Label>
                                        <Switch id="email-notifications" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="weekly-digest" className="text-foreground">
                                            Weekly digest
                                        </Label>
                                        <Switch id="weekly-digest" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Privacy */}
                    <Card className="border-border bg-card p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">Privacy</h3>
                                    <p className="text-sm text-muted-foreground">Manage your privacy settings</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="profile-visibility" className="text-foreground">
                                            Public profile
                                        </Label>
                                        <Switch id="profile-visibility" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="show-email" className="text-foreground">
                                            Show email address
                                        </Label>
                                        <Switch id="show-email" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
