"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import {
    BookOpen,
    Users,
    FileText,
    Zap,
    Microscope,
    TrendingUp,
    Github,
    ExternalLink,
    Star,
    Eye,
    User,
    Search,
    Shield,
    BarChart3,
    Video,
    Mail,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { getAllTheses } from "@/lib/data/theses"

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [featuredIndex, setFeaturedIndex] = useState(0)
    const [currentRecentIndex, setCurrentRecentIndex] = useState(0) // added state to track which recent research is showing
    const heroRef = useRef<HTMLDivElement>(null)
    const browseRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    const { scrollY } = useScroll()

    const heroSectionHeight = 800
    const textScale = useTransform(scrollY, [0, heroSectionHeight], [1, 0.8])
    const textOpacity = useTransform(scrollY, [0, heroSectionHeight], [1, 0])
    const buttonsOpacity = useTransform(scrollY, [0, 50], [1, 0])

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isHeroInteractive = scrollPosition < 100

    const researchCategories = [
        { id: "all", label: "All Fields", icon: BookOpen, count: 247 },
        { id: "ai", label: "Artificial Intelligence", icon: Zap, count: 68 },
        { id: "biotech", label: "Biotechnology", icon: Microscope, count: 54 },
        { id: "physics", label: "Physics and Mathematics", icon: TrendingUp, count: 38 },
        { id: "chemistry", label: "Chemistry", icon: Microscope, count: 45 },
        { id: "environmental", label: "Environmental Science", icon: TrendingUp, count: 52 },
        { id: "robotics", label: "Robotics and Automation", icon: Github, count: 61 },
        { id: "economics", label: "Economics", icon: BarChart3, count: 43 },
        { id: "agriculture", label: "Agriculture and Food Technology", icon: Microscope, count: 37 },
        { id: "cs", label: "Computer Science", icon: Github, count: 83 },
    ]

    const allTheses = getAllTheses()
    const featuredResearch = allTheses

    const filteredResearch =
        selectedCategory === "all"
            ? featuredResearch
            : featuredResearch.filter((r) => {
                const lowerDept = r.department.toLowerCase()
                const lowerKeywords = r.keywords.map((k) => k.toLowerCase())

                switch (selectedCategory) {
                    case "cs":
                        return (
                            lowerDept.includes("computer science") ||
                            lowerKeywords.some(
                                (k) => k.includes("machine learning") || k.includes("ai") || k.includes("blockchain"),
                            )
                        )
                    case "ai":
                        return lowerKeywords.some(
                            (k) =>
                                k.includes("machine learning") ||
                                k.includes("ai") ||
                                k.includes("neural") ||
                                k.includes("deep learning"),
                        )
                    case "biotech":
                        return (
                            lowerDept.includes("biochemistry") ||
                            lowerKeywords.some((k) => k.includes("biomedical") || k.includes("protein") || k.includes("healthcare"))
                        )
                    case "physics":
                        return (
                            lowerDept.includes("physics") ||
                            lowerDept.includes("mathematics") ||
                            lowerKeywords.some((k) => k.includes("quantum") || k.includes("mathematics") || k.includes("physics"))
                        )
                    case "chemistry":
                        return (
                            lowerDept.includes("chemistry") ||
                            lowerKeywords.some(
                                (k) => k.includes("chemistry") || k.includes("nanomaterials") || k.includes("catalysis"),
                            )
                        )
                    case "environmental":
                        return (
                            lowerDept.includes("environmental") ||
                            lowerKeywords.some(
                                (k) => k.includes("climate") || k.includes("environmental") || k.includes("sustainability"),
                            )
                        )
                    case "robotics":
                        return (
                            lowerDept.includes("robotics") ||
                            lowerKeywords.some(
                                (k) => k.includes("robotics") || k.includes("automation") || k.includes("autonomous"),
                            )
                        )
                    case "economics":
                        return (
                            lowerDept.includes("economics") ||
                            lowerKeywords.some(
                                (k) => k.includes("economics") || k.includes("microfinance") || k.includes("economic"),
                            )
                        )
                    case "agriculture":
                        return (
                            lowerDept.includes("agriculture") ||
                            lowerDept.includes("food technology") ||
                            lowerKeywords.some(
                                (k) => k.includes("agriculture") || k.includes("food") || k.includes("farming") || k.includes("crop"),
                            )
                        )
                    default:
                        return false
                }
            })

    const displayedCategoryResearch = filteredResearch.slice(0, 4)

    const displayedResearch = featuredResearch.slice(featuredIndex, featuredIndex + 3)

    useEffect(() => {
        const interval = setInterval(() => {
            setFeaturedIndex((prev) => (prev + 3 >= featuredResearch.length ? 0 : prev + 3))
        }, 3500)
        return () => clearInterval(interval)
    }, [featuredResearch.length])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRecentIndex((prev) => (prev + 1) % 3)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const categoryIds = researchCategories.map((cat) => cat.id)
        const currentIndex = categoryIds.indexOf(selectedCategory)
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % categoryIds.length
            setSelectedCategory(categoryIds[nextIndex])
        }, 2000)
        return () => clearInterval(interval)
    }, [selectedCategory])

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950" />

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-emerald-200/40 via-emerald-100/20 to-transparent dark:from-emerald-500/20 dark:via-emerald-900/10 blur-3xl" />
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-cyan-200/30 via-cyan-100/15 to-transparent dark:from-cyan-500/15 dark:via-cyan-900/10 blur-3xl" />
                    <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-gradient-radial from-teal-200/35 via-teal-100/20 to-transparent dark:from-teal-500/20 dark:via-teal-900/10 blur-3xl" />
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-blue-100/25 via-blue-50/10 to-transparent dark:from-blue-500/15 dark:via-blue-900/5 blur-3xl" />
                    <div className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] rounded-full bg-gradient-radial from-emerald-300/30 via-emerald-100/15 to-transparent dark:from-emerald-500/20 dark:via-emerald-900/10 blur-3xl" />
                </div>

                <div
                    className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        color: "rgb(16 185 129)",
                    }}
                />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
                <div className="px-6 lg:px-12">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                                <BookOpen className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Research Portal
              </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            <Link
                                href="/browse"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Browse
                            </Link>
                            <Link
                                href="/#features"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#about"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="/help"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Help
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <MobileMenu
                                items={[
                                    { label: "Browse", href: "/browse" },
                                    { label: "Features", href: "/#features" },
                                    { label: "About", href: "/#about" },
                                    { label: "Help", href: "/help" },
                                ]}
                                hasAuth={true}
                            />
                            {/* Desktop auth buttons remain hidden on mobile */}
                            <div className="hidden sm:flex items-center gap-4">
                                <Link href="/login">
                                    <Button variant="ghost" className="hover:bg-accent">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link href="/settings">
                                    <div className="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 cursor-pointer hover:border-primary/50 transition-colors">
                                        <User className="h-5 w-5 text-primary" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                ref={heroRef}
                className="sm:fixed lg:top-24 top-16 left-0 right-0 min-h-[calc(100vh-4rem)] z-30 flex flex-col lg:flex-row lg:gap-12 sm:mt-0 mt-10"
                style={{
                    pointerEvents: isHeroInteractive ? "auto" : "none",
                }}
            >
                <div className="w-full px-6 lg:px-12 h-full flex flex-col lg:flex-row lg:gap-12 lg:items-center py-12 lg:py-24">
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                        <motion.div
                            style={{
                                scale: textScale,
                                opacity: textOpacity,
                            }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary w-fit">
                                <Zap className="h-3 w-3" />
                                Next-Gen Research Repository
                            </div>
                            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-balance leading-tight text-foreground">
                                Discover Academic
                                <span className="block bg-gradient-to-r from-primary via-accent to-blue-500 bg-clip-text text-transparent">
                  Innovation
                </span>
                            </h1>
                            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                                A centralized platform for managing, sharing and discovering academic research at Shahjalal University
                                of Science and Technology.
                            </p>
                        </motion.div>
                        <motion.div
                            style={{
                                opacity: buttonsOpacity,
                            }}
                            className="flex flex-col sm:flex-row gap-4 relative z-50 pointer-events-auto"
                        >
                            <Link href="/register" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 hover:scale-110"
                                >
                                    Start Publishing
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/browse" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full border-green-600 text-foreground hover:text-white bg-white hover:bg-green-600 hover:scale-110"
                                >
                                    Explore Repository
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex-1 h-full flex flex-col justify-center py-12 lg:py-0">
                        <motion.div
                            style={{
                                scale: textScale,
                                opacity: textOpacity,
                                pointerEvents: isHeroInteractive ? "auto" : "none",
                            }}
                            className="space-y-5 relative"
                        >
                            <h3 className="text-lg font-bold text-foreground">Recent Research</h3>
                            {displayedResearch.map((research, idx) => (
                                <Link key={research.id} href={`/thesis/${research.id}`} className="block relative pointer-events-auto">
                                    <motion.div
                                        className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 shadow-2xl hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 cursor-pointer mb-4"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                            delay: idx * 0.15, // smooth staggered animation with 0.15s delay between each
                                        }}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                                    {research.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{research.author}</p>
                                            </div>
                                            <Star className="h-4 w-4 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0" />
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Eye className="h-3 w-3" />
                                            {research.views.toLocaleString()} views
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                            <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-border">
                                {[0, 1, 2].map((index) => (
                                    <motion.div
                                        key={index}
                                        className={`h-2 rounded-full transition-all ${
                                            currentRecentIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
                                        }`}
                                        animate={{
                                            width: currentRecentIndex === index ? "24px" : "8px",
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute inset-0 opacity-[0.03] -z-10">
                    <div className="absolute inset-0 bg-grid-pattern [background-size:50px_50px] [background-image:linear-gradient(0deg,transparent_24%,#10b981_25%,#10b981_26%,transparent_27%,transparent_74%,#10b981_75%,#10b981_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,#10b981_25%,#10b981_26%,transparent_27%,transparent_74%,#10b981_75%,#10b981_76%,transparent_77%,transparent)]" />
                </div>

                <div className="absolute top-20 right-1/3 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl -z-10" />

                <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInOut {
            0% {
              opacity: 1;
            }
            10% {
              opacity: 1;
            }
            85% {
              opacity: 0.8;
            }
            92% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
            </section>

            <section
                id="browse"
                ref={browseRef}
                className="relative pt-[calc(100vh+8rem)] pb-10 overflow-hidden z-20 bg-transparent"
                style={{
                    pointerEvents: "auto",
                }}
            >
                <div className="px-6 lg:px-12">
                    <div className="relative p-[3px] rounded-[24px] bg-gradient-to-br from-emerald-400/40 via-teal-400/30 to-cyan-400/20 dark:from-emerald-500/30 dark:via-teal-500/20 dark:to-cyan-500/15 shadow-[0_0_80px_rgba(16,185,129,0.15)]">
                        <div className="relative rounded-[21px] bg-card overflow-hidden border-3 border-border">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-30 p-6 sm:p-12 backdrop-blur-sm">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Browse by Field</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Explore research across different academic disciplines
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-12 z-30">
                                    {researchCategories.map((cat) => {
                                        const Icon = cat.icon
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all border relative z-30 ${
                                                    selectedCategory === cat.id
                                                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-lg shadow-primary/25"
                                                        : "border-border text-foreground hover:border-primary/50 hover:bg-accent"
                                                }`}
                                                style={{
                                                    animation: selectedCategory === cat.id ? "pulse 2s ease-in-out infinite" : "none",
                                                }}
                                            >
                                                <Icon className="h-4 w-4" />
                                                {cat.label}
                                                <span className="text-xs opacity-75">({cat.count})</span>
                                            </button>
                                        )
                                    })}
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {displayedCategoryResearch.map((research, idx) => (
                                        <Link key={research.id} href={`/thesis/${research.id}`} className="block group">
                                            <Card className="relative overflow-hidden border-border bg-card p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 cursor-pointer h-full backdrop-blur-sm">
                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="flex items-start justify-between mb-2">
                              <span className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                                {research.year}
                              </span>
                                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                                <Star className="h-4 w-4 fill-primary text-primary" />
                                                                <span className="text-sm font-medium">{research.downloads}</span>
                                                            </div>
                                                        </div>
                                                        <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight">
                                                            {research.title}
                                                        </h3>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <p className="text-sm text-foreground font-medium">{research.author}</p>
                                                        <p className="text-sm text-muted-foreground">{research.department}</p>
                                                    </div>

                                                    <p className="text-sm text-muted-foreground line-clamp-2">{research.abstract}</p>

                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {research.keywords.map((keyword) => (
                                                            <span
                                                                key={keyword}
                                                                className="inline-block px-2 py-1 rounded text-xs font-medium text-foreground bg-muted border border-border"
                                                            >
                                {keyword}
                              </span>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                                        <div className="flex items-center gap-2 text-muted-foreground">
                                                            <Eye className="h-4 w-4" />
                                                            <span className="text-xs">{research.views.toLocaleString()} views</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-foreground group-hover:text-primary transition-colors">
                                                            <span className="text-xs font-medium">View</span>
                                                            <ExternalLink className="h-3 w-3" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-8 relative z-20">
                                    <Link href="/browse">
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/25"
                                        >
                                            Browse All Research
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="relative py-16 sm:py-20 bg-transparent z-30">
                <div className="px-6 lg:px-12">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                            Powerful Features for Academic Excellence
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Everything you need to manage, share, and discover academic research
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {[
                            {
                                icon: FileText,
                                title: "Easy Submission",
                                description: "Upload your thesis with support for PDF, presentations, videos, and audio files.",
                                color: "emerald",
                            },
                            {
                                icon: Search,
                                title: "Smart Search",
                                description: "Find relevant research by department, year, keywords, and custom filters.",
                                color: "teal",
                            },
                            {
                                icon: Shield,
                                title: "Secure Review",
                                description: "Supervisors can review, approve, or request changes with detailed feedback.",
                                color: "cyan",
                            },
                            {
                                icon: BookOpen,
                                title: "Role-Based Access",
                                description: "Customized dashboards for students, supervisors, and administrators.",
                                color: "emerald",
                            },
                            {
                                icon: Video,
                                title: "Multimedia Support",
                                description: "Store and access theses in multiple formats for comprehensive research.",
                                color: "teal",
                            },
                            {
                                icon: BarChart3,
                                title: "Analytics",
                                description: "Track submissions, approvals, and repository growth with detailed insights.",
                                color: "cyan",
                            },
                        ].map((feature, idx) => {
                            const Icon = feature.icon
                            return (
                                <Card
                                    key={idx}
                                    className="border border-border bg-card/70 shadow-xl backdrop-blur-md p-6 hover:border-primary/50 transition-all hover:shadow-2xl group"
                                >
                                    <div
                                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform`}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative z-30 border-t border-border py-16 sm:py-24 bg-transparent">
                <div className="px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">SUST Thesis Repository by Numbers</h2>
                        <p className="text-muted-foreground text-lg">A thriving community of researchers and innovators</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { value: "2,847", label: "Theses", icon: FileText },
                            { value: "12", label: "Departments", icon: BookOpen },
                            { value: "1.2K+", label: "Researchers", icon: Users },
                        ].map((stat, idx) => {
                            const Icon = stat.icon
                            return (
                                <Card
                                    key={idx}
                                    className="border-border bg-card/50 p-8 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all text-center"
                                >
                                    <Icon className="h-8 w-8 text-primary mb-4 mx-auto" />
                                    <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative z-30 border-t border-border overflow-hidden py-16 sm:py-24 bg-primary dark:bg-green-950 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
                <div className="max-w-4xl px-6 lg:px-12 mx-auto relative z-10 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Ready to Contribute?</h2>
                    <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of researchers sharing their work and advancing academic knowledge at SUST.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 hover:scale-105"
                        >
                            <Link href="/register">
                                Get Started
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-green-600 text-foreground hover:text-white bg-white dark:bg-background hover:bg-green-600 hover:scale-110"
                        >
                            <Link href="/help">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="relative z-30 border-t border-border bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-md py-12">
                <div className="px-6 lg:px-12">
                    <div className="grid gap-8 md:grid-cols-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                                    <BookOpen className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <span className="font-bold text-foreground">SUST Research Portal</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Centralized repository for academic research at SUST.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/browse" className="hover:text-primary transition-colors">
                                        Browse Theses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login" className="hover:text-primary transition-colors">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register" className="hover:text-primary transition-colors">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/help" className="hover:text-primary transition-colors">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="hover:text-primary transition-colors">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <Link href="/privacy" className="hover:text-primary transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="hover:text-primary transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Get the latest research updates and academic insights delivered to your inbox.
                            </p>
                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm transition-all"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 text-sm px-6 whitespace-nowrap"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                            <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe anytime.</p>
                        </div>
                    </div>
                    <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                        <p>© 2025 SUST Research Repository. All rights reserved.</p>
                        <p className="mt-2">Shahjalal University of Science and Technology</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
