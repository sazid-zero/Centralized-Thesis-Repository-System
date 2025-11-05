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
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      setIsLoading(true)
      // Simulate registration
      setTimeout(() => setIsLoading(false), 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BookOpen className="h-7 w-7" />
            </div>
            <span className="text-2xl font-bold text-foreground">SUST Research Portal</span>
          </Link>
        </div>

        {/* Registration Card */}
        <Card className="border-border bg-card p-8 shadow-lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">
              {step === 1 ? "Step 1 of 2: Personal Information" : "Step 2 of 2: Account Details"}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 flex gap-2">
            <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? "bg-primary" : "bg-border"}`} />
            <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? "bg-primary" : "bg-border"}`} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-foreground font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Your Name"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-foreground font-medium">
                    Department
                  </Label>
                  <Select>
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
              </>
            ) : (
              <>
                {/* User Role */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-foreground font-medium">
                    User Role
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="supervisor">Supervisor</SelectItem>
                      <SelectItem value="faculty">Faculty Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground pr-10"
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

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-foreground font-medium">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {step === 2 && (
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 border-border hover:bg-muted"
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                disabled={isLoading}
                className={`${step === 1 ? "w-full" : "flex-1"} bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10`}
              >
                {isLoading ? "Creating Account..." : step === 1 ? "Next" : "Create Account"}
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}
