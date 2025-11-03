"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FileText, LayoutDashboard, LogOut, Settings, Upload, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardMobileMenu } from "@/components/dashboard-mobile-menu"

export function StudentSidebar() {
    const pathname = usePathname()

    const navItems = [
        { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/student/submit", label: "Submit Thesis", icon: Upload },
        { href: "/student/submissions", label: "My Submissions", icon: FileText },
        { href: "/student/profile/1", label: "Profile", icon: User },
        { href: "/student/settings", label: "Settings", icon: Settings },
    ]

    return (
        <>
            <div className="md:hidden p-4 border-b border-border bg-background">
                <DashboardMobileMenu items={navItems} role="student" />
            </div>

            {/* Desktop sidebar - hidden on mobile */}
            <aside className="max-sm:hidden relative w-64 border-r border-border bg-card min-h-screen flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                            <BookOpen className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold text-foreground">Research Portal</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground hover:bg-accent hover:text-accent-foreground",
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-border">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    )
}
