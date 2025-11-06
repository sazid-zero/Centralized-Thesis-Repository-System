"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FileText, LayoutDashboard, LogOut, Settings, Users, BarChart3, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {ThemeToggle} from "@/components/theme-toggle";

export function AdminSidebar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/admin/users", label: "User Management", icon: Users },
        { href: "/admin/theses", label: "Thesis Management", icon: FileText },
        { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
        { href: "/admin/settings", label: "Settings", icon: Settings },
    ]

    return (
        <>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hidden max-sm:flex fixed bottom-6 right-6 z-50 items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg"
            >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isMobileMenuOpen && (
                <div
                    className="hidden max-sm:block fixed inset-0 z-40 bg-black/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <aside
                className={cn(
                    "max-sm:fixed max-sm:inset-y-0 max-sm:left-0 max-sm:z-40 max-sm:w-64 max-sm:transform max-sm:transition-transform w-64 border-r border-border bg-sidebar h-[calc(100vh)] flex flex-col",
                    isMobileMenuOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-full",
                )}
            >
                {/* Logo */}
                <div className="p-6 border-b border-sidebar-border">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                            <BookOpen className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Research Portal
            </span>
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
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-gradient-to-br from-primary to-accent text-sidebar-primary-foreground"
                                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        )
                    })}

                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-sidebar-border">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    )
}
