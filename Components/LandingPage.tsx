import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, Camera, TrendingUp, Shield, Zap, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/FareSight Logo 2.png" 
              alt="FareSight Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-3xl text-white font-semibold">FareSight AI</span>
          </div>
          <Button onClick={onGetStarted} variant="default" className="bg-blue-600 hover:bg-blue-700">
            Launch Dashboard
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="py-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400">Powered by AI Vision & NFC Technology</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 max-w-4xl mx-auto">
            Save Millions in Transit Fare Revenue
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Advanced AI-powered CCTV monitoring integrated with PRESTO/NFC tracking to detect and prevent fare evasion in real-time
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={onGetStarted} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              View Dashboard
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 py-16 border-y border-slate-800">
          <div className="text-center">
            <div className="text-4xl text-blue-500 mb-2">$12M+</div>
            <div className="text-slate-400">Annual Revenue Recovery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-500 mb-2">94%</div>
            <div className="text-slate-400">Detection Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-purple-500 mb-2">24/7</div>
            <div className="text-slate-400">Real-Time Monitoring</div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20">
          <h2 className="text-4xl text-white text-center mb-4">How FareSight Works</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Our intelligent system combines multiple technologies to ensure fare compliance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <Camera className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">AI Vision Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Advanced computer vision analyzes passenger behavior and identifies potential fare evasion in real-time
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle className="text-white">NFC Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Seamlessly integrates with PRESTO and other NFC payment systems to verify tap transactions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-white">Real-Time Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Instant notifications to transit staff when fare evasion is detected with video evidence
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle className="text-white">Revenue Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Comprehensive dashboard tracking saved revenue, compliance rates, and system performance
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="py-20 border-t border-slate-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-white mb-6">The $500M Problem</h2>
              <p className="text-slate-400 mb-6">
                Transit agencies lose hundreds of millions annually to fare evasion. Traditional enforcement methods are costly, inefficient, and miss most violations.
              </p>
              <ul className="space-y-4">
                {[
                  "15-20% fare evasion rate in major cities",
                  "Manual inspections catch less than 5% of violators",
                  "High staffing costs for fare enforcement",
                  "Limited data on evasion patterns and hotspots"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-800">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1537203844650-cd97ebb83209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwdHJhbnNpdHxlbnwxfHx8fDE3NjEwMDQ1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Transit system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="py-20 border-t border-slate-800">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4">Proven Return on Investment</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Transit agencies using FareSight see immediate impact on revenue recovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/30 to-slate-900 border-blue-800/50">
              <CardHeader>
                <CardTitle className="text-white text-center">Year 1</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl text-blue-400 mb-2">450%</div>
                <p className="text-slate-400">Average ROI</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/30 to-slate-900 border-green-800/50">
              <CardHeader>
                <CardTitle className="text-white text-center">Implementation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl text-green-400 mb-2">30 Days</div>
                <p className="text-slate-400">Full Deployment</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900 border-purple-800/50">
              <CardHeader>
                <CardTitle className="text-white text-center">Detection Rate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl text-purple-400 mb-2">18x</div>
                <p className="text-slate-400">Better Than Manual</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center border-t border-slate-800">
          <h2 className="text-4xl text-white mb-6">Ready to Secure Your Revenue?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join forward-thinking transit agencies already saving millions with FareSight AI
          </p>
          <Button onClick={onGetStarted} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10">
            Launch Dashboard Demo
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-8 mt-20">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500">
          <p>© 2025 FareSight AI. Protecting transit revenue with intelligent technology.</p>
        </div>
      </footer>
    </div>
  );
}
