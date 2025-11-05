"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, ChevronDown } from "lucide-react"
import { createPortal } from "react-dom"

export function DashboardSelector({ variant = "default" }) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [mounted, setMounted] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                    setIsOpen(false)
                }
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setMenuPosition({
                top: rect.bottom + window.scrollY + 8,
                left: variant === "nav" ? rect.right - 192 : rect.left + rect.width / 2 - 112,
            })
        }
    }, [isOpen, variant])

    const dashboards = [
        { href: "/student/dashboard", label: "Student Dashboard" },
        { href: "/supervisor/dashboard", label: "Supervisor Dashboard" },
        { href: "/admin/dashboard", label: "Admin Dashboard" },
    ]

    const DropdownMenu = () => (
        <div
            ref={menuRef}
            className={`fixed w-48 bg-card border border-border rounded-lg shadow-xl z-[9999] ${
                variant === "nav" ? "mt-0" : "mt-0"
            }`}
            style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`,
            }}
        >
            {dashboards.map((dashboard, idx) => (
                <Link
                    key={dashboard.href}
                    href={dashboard.href}
                    className={`block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors ${
                        idx === 0 ? "rounded-t-lg" : ""
                    } ${idx === dashboards.length - 1 ? "rounded-b-lg" : "border-b border-border"}`}
                    onClick={() => setIsOpen(false)}
                >
                    {dashboard.label}
                </Link>
            ))}
        </div>
    )

    if (variant === "nav") {
        return (
            <>
                <Button
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-primary bg-transparent hidden sm:flex z-50 relative"
                >
                    <LayoutDashboard className="h-5 w-5 mr-2" />
                    <span>Dashboard</span>
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </Button>

                {mounted && isOpen && createPortal(<DropdownMenu />, document.body)}
            </>
        )
    }

    // Hero variant (for homepage)
    return (
        <>
            <Button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 hover:scale-110 flex items-center gap-2 relative z-50"
            >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </Button>

            {mounted && isOpen && createPortal(<DropdownMenu />, document.body)}
        </>
    )
}
