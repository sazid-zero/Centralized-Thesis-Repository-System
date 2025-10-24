"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, FileText, CheckCircle } from "lucide-react"

export default function AdminAnalyticsPage() {
  const submissionTrend = [
    { month: "Jan", submissions: 12, approved: 10 },
    { month: "Feb", submissions: 19, approved: 15 },
    { month: "Mar", submissions: 15, approved: 12 },
    { month: "Apr", submissions: 25, approved: 20 },
    { month: "May", submissions: 22, approved: 18 },
    { month: "Jun", submissions: 28, approved: 24 },
  ]

  const departmentStats = [
    { name: "Computer Science", value: 45 },
    { name: "Engineering", value: 32 },
    { name: "Science", value: 28 },
    { name: "Business", value: 18 },
    { name: "Others", value: 12 },
  ]

  const statusDistribution = [
    { name: "Approved", value: 89, color: "#10b981" },
    { name: "Pending", value: 34, color: "#f59e0b" },
    { name: "Rejected", value: 12, color: "#ef4444" },
  ]

  const stats = [
    { label: "Total Theses", value: "135", icon: FileText, color: "bg-blue-100 text-blue-600" },
    { label: "Active Users", value: "287", icon: Users, color: "bg-green-100 text-green-600" },
    { label: "Approved", value: "89", icon: CheckCircle, color: "bg-emerald-100 text-emerald-600" },
    { label: "Growth Rate", value: "+12%", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
  ]

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
            <p className="text-muted-foreground">System statistics and performance metrics</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Submission Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Submission Trend</CardTitle>
                <CardDescription>Monthly submissions and approvals</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={submissionTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="submissions" stroke="#3b82f6" name="Submissions" />
                    <Line type="monotone" dataKey="approved" stroke="#10b981" name="Approved" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Department Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Department Distribution</CardTitle>
                <CardDescription>Theses by department</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={departmentStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Status Distribution</CardTitle>
              <CardDescription>Overall thesis status breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
