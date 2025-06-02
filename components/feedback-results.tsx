"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, Download, Share2, RotateCcw, ArrowLeft, CheckCircle, AlertCircle, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function FeedbackResults() {
  const [isPlaying, setIsPlaying] = useState(false)

  const performanceData = [
    { category: "Structure", score: 75, status: "Needs Work", color: "bg-yellow-500" },
    { category: "Insight", score: 85, status: "Good", color: "bg-green-500" },
    { category: "Numeracy", score: 60, status: "Needs Work", color: "bg-red-500" },
    { category: "Communication", score: 90, status: "Excellent", color: "bg-green-500" },
  ]

  const improvementTips = [
    "Develop a strong framework for structuring your case analysis.",
    "Focus on identifying the root causes of problems through insightful questioning.",
    "Practice quantitative reasoning and market sizing to improve your numeracy skills.",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                <Download className="w-4 h-4 mr-2" />
                Download Results
              </Button>
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                <Share2 className="w-4 h-4 mr-2" />
                Share Results
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Image src="/rafi-mascot.png" alt="Rafi" width={48} height={48} className="rounded-xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Feedback</h1>
              <p className="text-gray-600">
                AI-generated evaluation for: Market Entry Strategy for Premium Coffee Chain
              </p>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <Card className="mb-8 border-orange-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
            <CardTitle className="text-gray-900">Performance Summary</CardTitle>
            <p className="text-gray-600">Overall evaluation across key dimensions</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {performanceData.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                    <Badge
                      className={`${
                        item.status === "Excellent"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : item.status === "Good"
                            ? "bg-blue-100 text-blue-700 border-blue-200"
                            : item.status === "Needs Work"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                              : "bg-red-100 text-red-700 border-red-200"
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={item.score} className="h-3" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0</span>
                      <span className="font-medium">{item.score}%</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Improvement Tips */}
        <Card className="mb-8 border-blue-100 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
            <CardTitle className="text-gray-900 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
              Top 3 Improvement Tips
            </CardTitle>
            <p className="text-gray-600">Focus on these areas to improve your performance</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {improvementTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis Tabs */}
        <Card className="border-gray-200 shadow-xl">
          <CardContent className="p-0">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-gray-50 rounded-none">
                <TabsTrigger value="summary" className="data-[state=active]:bg-white">
                  Summary
                </TabsTrigger>
                <TabsTrigger value="structure" className="data-[state=active]:bg-white">
                  Structure
                </TabsTrigger>
                <TabsTrigger value="insight" className="data-[state=active]:bg-white">
                  Insight
                </TabsTrigger>
                <TabsTrigger value="numeracy" className="data-[state=active]:bg-white">
                  Numeracy
                </TabsTrigger>
                <TabsTrigger value="communication" className="data-[state=active]:bg-white">
                  Communication
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="p-8 space-y-8">
                {/* Audio Player */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Your Recorded Audio</h3>
                  <p className="text-gray-600">Listen to your original response</p>

                  <div className="bg-gray-100 rounded-2xl p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Button
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-800 text-white"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <div className="flex-1">
                        <div className="bg-gray-300 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full w-1/3"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 font-mono">0:09 / 0:45</span>
                    </div>
                  </div>
                </div>

                {/* Transcription */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Your Transcribed Response</h3>
                  <p className="text-gray-600">What we analyzed to generate your feedback</p>

                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        This is a case interview response discussing business strategy, market analysis, and
                        problem-solving approaches.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="structure" className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Structure Analysis</h3>
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Needs Work</Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Your response showed good business intuition, but could benefit from a more structured approach.
                    Consider using frameworks like MECE (Mutually Exclusive, Collectively Exhaustive) to organize your
                    thoughts more clearly.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="insight" className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Insight Analysis</h3>
                    <Badge className="bg-green-100 text-green-700 border-green-200">Good</Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    You demonstrated strong analytical thinking and identified key market considerations. Your insights
                    about cultural differences and market entry barriers were particularly valuable.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="numeracy" className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Numeracy Analysis</h3>
                    <Badge className="bg-red-100 text-red-700 border-red-200">Needs Work</Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Consider incorporating more quantitative analysis into your response. Market sizing, financial
                    projections, and data-driven insights would strengthen your recommendations significantly.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="communication" className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Communication Analysis</h3>
                    <Badge className="bg-green-100 text-green-700 border-green-200">Excellent</Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Your communication style was clear, confident, and professional. You maintained good pacing and
                    articulated your thoughts in a logical sequence that was easy to follow.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Another Case
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl shadow-lg"
          >
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  )
}
