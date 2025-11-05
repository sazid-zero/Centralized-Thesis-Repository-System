"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [userRole, setUserRole] = useState<"student" | "supervisor">("student")
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        studentId: "",
        designation: "",
        password: "",
        confirmPassword: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handleSelectChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1000)
    }

    return (
        <div className="min-h-screen bg-background">
            <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SUST Research Portal</span>
                    </Link>
                    <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Already have an account? <span className="text-primary font-semibold">Sign in</span>
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
                <div className="w-full max-w-2xl space-y-8">
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-bold text-foreground">Create Your Account</h1>
                        <p className="text-lg text-muted-foreground">Join our community of researchers and supervisors</p>
                    </div>

                    <Card className="border-border bg-card p-1.5 shadow-md">
                        <div className="flex gap-1.5">
                            <button
                                type="button"
                                onClick={() => setUserRole("student")}
                                className={`flex-1 py-2.5 px-6 rounded-md transition-all duration-200 font-medium text-sm ${
                                    userRole === "student"
                                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:text-foreground bg-muted/30"
                                }`}
                            >
                                I'm a Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setUserRole("supervisor")}
                                className={`flex-1 py-2.5 px-6 rounded-md transition-all duration-200 font-medium text-sm ${
                                    userRole === "supervisor"
                                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:text-foreground bg-muted/30"
                                }`}
                            >
                                I'm a Supervisor
                            </button>
                        </div>
                    </Card>

                    <Card className="border-border bg-card p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Role-specific title */}
                            <div className="pb-6 border-b border-border">
                                <h2 className="text-2xl font-bold text-foreground">
                                    {userRole === "student" ? "Student Registration" : "Supervisor Registration"}
                                </h2>
                            </div>

                            {/* Basic Information - Common for both */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-foreground font-medium">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="bg-input border-border text-foreground"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-foreground font-medium">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="bg-input border-border text-foreground"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-foreground font-medium">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@sust.edu.bd"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-input border-border text-foreground"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-foreground font-medium">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+880 1XXX XXXXXX"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="bg-input border-border text-foreground"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="department" className="text-foreground font-medium">
                                    Department
                                </Label>
                                <Select value={formData.department} onValueChange={(value) => handleSelectChange("department", value)}>
                                    <SelectTrigger className="bg-input border-border text-foreground">
                                        <SelectValue placeholder="Select your department" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-card border-border">
                                        <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                                        <SelectItem value="eee">Electrical & Electronic Engineering</SelectItem>
                                        <SelectItem value="ce">Civil Engineering</SelectItem>
                                        <SelectItem value="me">Mechanical Engineering</SelectItem>
                                        <SelectItem value="che">Chemical Engineering</SelectItem>
                                        <SelectItem value="arch">Architecture</SelectItem>
                                        <SelectItem value="math">Mathematics</SelectItem>
                                        <SelectItem value="physics">Physics</SelectItem>
                                        <SelectItem value="chemistry">Chemistry</SelectItem>
                                        <SelectItem value="biology">Biology</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {userRole === "student" && (
                                <div className="space-y-2">
                                    <Label htmlFor="studentId" className="text-foreground font-medium">
                                        Student ID
                                    </Label>
                                    <Input
                                        id="studentId"
                                        type="text"
                                        placeholder="2020331042"
                                        value={formData.studentId}
                                        onChange={handleInputChange}
                                        className="bg-input border-border text-foreground"
                                        required
                                    />
                                </div>
                            )}

                            {userRole === "supervisor" && (
                                <div className="space-y-2">
                                    <Label htmlFor="designation" className="text-foreground font-medium">
                                        Designation
                                    </Label>
                                    <Select
                                        value={formData.designation}
                                        onValueChange={(value) => handleSelectChange("designation", value)}
                                    >
                                        <SelectTrigger className="bg-input border-border text-foreground">
                                            <SelectValue placeholder="Select your designation" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-card border-border">
                                            <SelectItem value="professor">Professor</SelectItem>
                                            <SelectItem value="associate-professor">Associate Professor</SelectItem>
                                            <SelectItem value="assistant-professor">Assistant Professor</SelectItem>
                                            <SelectItem value="lecturer">Lecturer</SelectItem>
                                            <SelectItem value="senior-lecturer">Senior Lecturer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            {/* Password Section */}
                            <div className="pt-4 border-t border-border space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-foreground font-medium">
                                        Create Password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a strong password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="bg-input border-border text-foreground pr-10"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        At least 8 characters with uppercase, lowercase, and numbers
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-foreground font-medium">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="bg-input border-border text-foreground"
                                        required
                                    />
                                </div>

                                <div className="flex items-start gap-2 pt-2">
                                    <input type="checkbox" id="terms" className="rounded border-border cursor-pointer mt-1" required />
                                    <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                                        I agree to the{" "}
                                        <a href="#" className="text-primary hover:underline">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-primary hover:underline">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium h-10 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                            >
                                {isLoading ? "Creating Account..." : "Create Account"}
                            </Button>
                        </form>
                    </Card>

                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary font-semibold hover:underline">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
