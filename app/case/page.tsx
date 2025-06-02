"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, RotateCcw, ArrowLeft, BarChart3, MessageCircle, Volume2 } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CasePage() {
  const router = useRouter()
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [showExhibit, setShowExhibit] = useState(false)
  const [hasRecorded, setHasRecorded] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRecording])

  const handleStopRecording = () => {
    setIsRecording(false)
    setHasRecorded(true)
    // Simulate processing time before showing results
    setTimeout(() => {
      router.push("/feedback")
    }, 2000)
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    setRecordingTime(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-orange-600"
                onClick={() => router.push("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/rafi-mascot.svg" alt="Rafi" width={32} height={32} />
              <span className="text-lg font-semibold text-gray-900">Case ID: 2</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Case Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Market Entry</Badge>
              <h1 className="text-3xl font-bold text-gray-900">Market Entry Strategy for Premium Coffee Chain</h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Show Exhibit</span>
              <button
                onClick={() => setShowExhibit(!showExhibit)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showExhibit ? "bg-orange-500" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showExhibit ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Case Prompt */}
        <Card className="mb-8 border-orange-100 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
            <CardTitle className="flex items-center space-x-2 text-gray-900">
              <MessageCircle className="w-5 h-5 text-orange-600" />
              <span>Case Prompt</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Your client is a premium US-based coffee chain with 500 locations across North America. They're
              considering expansion into the Asian market. How would you evaluate this opportunity and what would you
              recommend as an entry strategy?
            </p>
          </CardContent>
        </Card>

        {/* Exhibit (conditionally shown) */}
        {showExhibit && (
          <Card className="mb-8 border-blue-100 shadow-lg">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=800"
                  alt="Market data for Asian coffee consumption"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-medium">Exhibit: Market data for Asian coffee consumption</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Follow-up Question */}
        <Card className="mb-8 border-purple-100 shadow-lg bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
              <Volume2 className="w-5 h-5 mr-2" />
              Follow-up Question
            </h3>
            <p className="text-purple-800">
              The client is particularly interested in Japan and South Korea. How would you prioritize between these two
              markets?
            </p>
          </CardContent>
        </Card>

        {/* Recording Section */}
        <Card className="border-orange-200 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center space-y-8">
              {/* Rafi Avatar */}
              <div className="relative">
                <Image src="/rafi-mascot.svg" alt="Rafi listening" width={120} height={120} className="mx-auto" />
                {isRecording && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Recording Status */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {isRecording
                    ? "Rafi is listening..."
                    : hasRecorded
                      ? "Processing your response..."
                      : "Ready to start your case interview?"}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  {isRecording
                    ? "Take your time to structure your approach and walk through your analysis. Rafi will provide feedback when you're done."
                    : hasRecorded
                      ? "Rafi is analyzing your response and preparing personalized feedback..."
                      : "Click the microphone to begin recording your response. Rafi will analyze your structure, insights, and communication style."}
                </p>
              </div>

              {/* Recording Controls */}
              <div className="space-y-6">
                {isRecording && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-lg font-mono text-gray-700">
                        {Math.floor(recordingTime / 60)
                          .toString()
                          .padStart(2, "0")}
                        :{(recordingTime % 60).toString().padStart(2, "0")}
                      </span>
                    </div>

                    {/* Audio Visualization */}
                    <div className="flex items-center justify-center space-x-1 h-16">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-orange-400 rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 40 + 10}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {!hasRecorded && (
                  <div className="flex justify-center space-x-4">
                    <Button
                      size="lg"
                      onClick={isRecording ? handleStopRecording : handleStartRecording}
                      className={`w-16 h-16 rounded-full ${
                        isRecording
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      } text-white shadow-xl`}
                    >
                      {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </Button>

                    {isRecording && (
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => {
                          setIsRecording(false)
                          setRecordingTime(0)
                        }}
                        className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-gray-400"
                      >
                        <RotateCcw className="w-6 h-6" />
                      </Button>
                    )}
                  </div>
                )}

                {hasRecorded && (
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-500">
                  {isRecording
                    ? "Click the microphone again to stop recording"
                    : hasRecorded
                      ? "Please wait while we analyze your response..."
                      : "Click to start recording"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mt-8 border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Pro Tips from Rafi
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li>
                • Start with a clear structure (Market attractiveness, Competitive landscape, Company capabilities)
              </li>
              <li>• Ask clarifying questions about the client's goals and constraints</li>
              <li>• Use the MECE principle to organize your analysis</li>
              <li>• Support your recommendations with quantitative reasoning when possible</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
