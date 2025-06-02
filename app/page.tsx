"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Play, Mic, BarChart3, Users, Target, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const caseStudies = [
    {
      title: "Coffee Chain Expansion",
      difficulty: "Medium",
      category: "Market Entry",
      description: "Strategic expansion into Asian markets for premium coffee chain",
      color: "bg-orange-100 border-orange-200",
    },
    {
      title: "Tech Startup Profitability",
      difficulty: "Hard",
      category: "Profitability",
      description: "Turning around a struggling SaaS platform",
      color: "bg-blue-100 border-blue-200",
    },
    {
      title: "Pharmaceutical Product Launch",
      difficulty: "Hard",
      category: "Product Strategy",
      description: "Go-to-market strategy for breakthrough medication",
      color: "bg-purple-100 border-purple-200",
    },
  ]

  const features = [
    {
      icon: <Mic className="w-8 h-8 text-orange-500" />,
      title: "AI-Powered Feedback",
      description: "Get instant, detailed feedback on your case interview performance",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Performance Analytics",
      description: "Track your progress across structure, insights, numeracy, and communication",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Expert-Crafted Cases",
      description: "Practice with real consulting cases from top-tier firms",
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Personalized Coaching",
      description: "Receive tailored improvement recommendations based on your performance",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center p-1">
                <Image src="/rafi-mascot.svg" alt="Rafi" width={32} height={32} className="rounded-lg" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                CaseCoach
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Cases
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Practice
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Progress
              </a>
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                Try Free
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Master Case Interviews with{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    AI-Powered Feedback
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Practice business case interviews, get instant feedback on your structure, insights, numeracy, and
                  communication skills. Improve faster with personalized coaching from Rafi, your AI case coach.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl text-lg px-8 py-4 rounded-2xl"
                  onClick={() => router.push("/case")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try the Coach
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-2xl"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Practice Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Case Studies</div>
                </div>
              </div>
            </div>

            {/* Tool Screenshot Mockup */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-orange-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Market Entry</Badge>
                    <span className="text-sm text-gray-500">Case ID: 2</span>
                  </div>
                  <Image src="/rafi-mascot.svg" alt="Rafi" width={32} height={32} />
                </div>

                {/* Case Prompt Preview */}
                <Card className="mb-6 border-orange-100">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                      <MessageCircle className="w-4 h-4 mr-2 text-orange-600" />
                      Case Prompt
                    </h3>
                    <p className="text-sm text-gray-700">
                      Your client is a premium US-based coffee chain with 500 locations across North America...
                    </p>
                  </CardContent>
                </Card>

                {/* Rafi Avatar with Recording Interface */}
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-20 h-20">
                    <Image src="/rafi-mascot.svg" alt="Rafi listening" width={80} height={80} />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">Rafi is listening...</h3>

                  {/* Audio Visualization */}
                  <div className="flex items-center justify-center space-x-1 h-8">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-orange-400 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 20 + 8}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>

                  <Button size="sm" className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Floating Rafi */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24">
                <Image src="/rafi-mascot.svg" alt="Rafi coaching" width={96} height={96} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Everything you need to ace your case interview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rafi combines cutting-edge AI with proven consulting methodologies to give you the edge you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Library Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Practice with Real Cases</h2>
            <p className="text-xl text-gray-600">
              Browse our collection of practice cases across industries and difficulty levels
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search cases by title, description, or tags"
                    className="pl-12 h-12 text-lg border-gray-200 rounded-xl"
                  />
                </div>
              </div>
              <Button variant="outline" className="h-12 px-6 border-gray-200 rounded-xl">
                <Filter className="w-5 h-5 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {["All", "Market Entry", "Profitability", "Product Strategy", "Operations", "Cost Cutting", "M&A"].map(
                (category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className={
                      category === "All"
                        ? "bg-orange-500 hover:bg-orange-600 rounded-full"
                        : "border-gray-200 rounded-full hover:border-orange-200 hover:text-orange-600"
                    }
                  >
                    {category}
                  </Button>
                ),
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((case_study, index) => (
                <Card
                  key={index}
                  className={`${case_study.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className={`${
                          case_study.difficulty === "Hard"
                            ? "bg-red-100 text-red-700 border-red-200"
                            : case_study.difficulty === "Medium"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                              : "bg-green-100 text-green-700 border-green-200"
                        }`}
                      >
                        {case_study.difficulty}
                      </Badge>
                      <span className="text-sm text-gray-500">{case_study.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{case_study.title}</h3>
                    <p className="text-gray-600">{case_study.description}</p>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl">Start Case</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="w-24 h-24 mx-auto">
              <Image src="/rafi-mascot.svg" alt="Rafi ready to coach" width={96} height={96} className="mx-auto" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to ace your case interview?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Join thousands of successful candidates who've improved their case interview skills with Rafi's AI-powered
              coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-50 text-lg px-8 py-4 rounded-2xl shadow-xl"
                onClick={() => router.push("/case")}
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-orange-100 text-lg px-8 py-4 rounded-2xl"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center p-1">
                  <Image src="/rafi-mascot.svg" alt="Rafi" width={32} height={32} className="rounded-lg" />
                </div>
                <span className="text-2xl font-bold">CaseCoach</span>
              </div>
              <p className="text-gray-400">
                Master case interviews with AI-powered feedback and personalized coaching from Rafi.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Coach
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Progress Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Interview Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Framework Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CaseCoach. All rights reserved. Made with ❤️ by the Rafi team.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
