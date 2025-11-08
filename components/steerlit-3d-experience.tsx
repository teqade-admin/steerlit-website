"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  CreditCard,
  FileText,
  Shield,
  Wallet,
  Activity,
  Gauge,
  Volume2,
  Battery,
  Thermometer,
  Settings,
  Car,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Users,
  RefreshCw,
  CalendarCheck,
  ArrowRightCircle,
  Database,
  Cloud,
  Smartphone,
  User,
  Send,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export function Steerlit3DExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [email, setEmail] = useState("")
  const [hasInteracted, setHasInteracted] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "owner", text: "Hey buddy!" },
    { sender: "car", text: "Hey buddy, glad to see you back!" },
    { sender: "owner", text: "How are you doing?" },
    {
      sender: "car",
      text: "All systems running well! Engine health at 95%, brakes are good, tire pressure optimal. Ready to roll! 🚗",
    },
  ])

  const handleStartExperience = () => {
    setHasInteracted(true)

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("[v0] Audio play failed:", error)
      })
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 3
      videoRef.current.play().catch((error) => {
        console.log("[v0] Video play failed:", error)
      })
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.play().catch((error) => {
        console.log("[v0] Audio autoplay prevented:", error)
      })
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 17) {
        video.currentTime = 3
      }
    }

    const handleLoadedData = () => {
      video.currentTime = 3
      video.play().catch((error) => {
        console.log("[v0] Video autoplay prevented:", error)
      })
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadeddata", handleLoadedData)

    if (video.readyState >= 3) {
      video.currentTime = 3
      video.play().catch((error) => {
        console.log("[v0] Video autoplay prevented:", error)
      })
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [])

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-engine-372477-318O89gluZtdDqsZwmxnFIH7SQgnnF.mp3"
        preload="auto"
      />

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SSYouTube.online_Car%20HUD%20UI%20Elements%20and%20Dashboard%20Templates%20for%20Modern%20Cars%20%20PIXFLOW_1080p-oMaYUDNADrQQIcKdiGBfAZ7y8JazYM.mp4"
      />

      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-6 px-4"
        >
          <Volume2 className="w-16 h-16 text-primary animate-pulse" />
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Welcome to Steerlit</h2>
            <p className="text-muted-foreground">Tap to start the experience with sound</p>
          </div>
          <Button
            size="lg"
            onClick={handleStartExperience}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Start Experience
          </Button>
        </motion.div>
      )}

      <div ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory z-10">
        {/* Hero Section */}
        <section className="relative h-screen w-full snap-start snap-always overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-black/70 to-black/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">Steerlit</h1>
              <p className="text-2xl md:text-4xl text-primary font-semibold">Your Car's Intelligence, Simplified</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  onClick={() => {
                    document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Join Early Access Waitlist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    document.getElementById("smart-kit-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="border-primary/50 text-foreground hover:bg-primary/10"
                >
                  Explore Product Vision <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-sm text-muted-foreground mt-8 animate-pulse"
              >
                Scroll to explore
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Makes Car Ownership Easy */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-6 md:space-y-8 max-w-6xl w-full"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Makes Car Ownership Easy</h2>
              <p className="text-sm md:text-xl text-muted-foreground">
                Track & pay fines, active policy status, and more
              </p>

              <div className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-4">
                <Card className="bg-card/40 backdrop-blur-md border-primary/30 p-2 md:p-6">
                  <FileText className="w-4 h-4 md:w-8 md:h-8 text-chart-4 mb-1 md:mb-3" />
                  <h3 className="text-[10px] md:text-base font-semibold text-foreground mb-1 md:mb-3">Challans</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground mb-1 md:mb-2">Track & pay fines</p>
                  <p className="text-green-500 text-[10px] md:text-sm font-semibold">No pending challans</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-primary/30 p-2 md:p-6">
                  <Shield className="w-4 h-4 md:w-8 md:h-8 text-primary mb-1 md:mb-3" />
                  <h3 className="text-[10px] md:text-base font-semibold text-foreground mb-1 md:mb-3">Insurance</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground mb-1 md:mb-2">Active policy status</p>
                  <p className="text-green-500 text-[10px] md:text-sm font-semibold">Valid till Dec 2025</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-accent/30 p-2 md:p-6">
                  <CreditCard className="w-4 h-4 md:w-8 md:h-8 text-accent mb-1 md:mb-3" />
                  <h3 className="text-[10px] md:text-base font-semibold text-foreground mb-1 md:mb-3">RC Status</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground mb-1 md:mb-2">Registration verified</p>
                  <p className="text-green-500 text-[10px] md:text-sm font-semibold">Active & Verified</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-chart-2/30 p-2 md:p-6">
                  <Wallet className="w-4 h-4 md:w-8 md:h-8 text-chart-2 mb-1 md:mb-3" />
                  <h3 className="text-[10px] md:text-base font-semibold text-foreground mb-1 md:mb-3">FASTag</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground mb-1 md:mb-2">Balance & recharge</p>
                  <p className="text-foreground text-[10px] md:text-sm font-semibold">₹465 remaining</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Deep Health Monitoring */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/85" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-6 md:space-y-8 max-w-6xl w-full"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Deep Health Monitoring</h2>
              <p className="text-sm md:text-xl text-muted-foreground">
                Real-time insights into every critical component
              </p>

              <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4">
                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Settings className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Engine</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Healthy</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Activity className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Brakes</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Good</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-yellow-500/30 p-2 md:p-4">
                  <Battery className="w-4 h-4 md:w-6 md:h-6 text-yellow-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Battery</p>
                  <p className="text-yellow-500 text-[10px] md:text-xs">Check Soon</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Gauge className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Suspension</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Normal</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Settings className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Clutch</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Optimal</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Car className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Transmission</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Healthy</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Gauge className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Tyres</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Good Pressure</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-2 md:p-4">
                  <Thermometer className="w-4 h-4 md:w-6 md:h-6 text-green-500 mb-1 md:mb-2" />
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Cooling System</p>
                  <p className="text-green-500 text-[10px] md:text-xs">Normal Temp</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manage All Your Vehicles Section */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/85" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-6 md:space-y-8 max-w-6xl w-full"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Manage All Your Vehicles</h2>
              <p className="text-sm md:text-xl text-muted-foreground">One platform for your entire fleet</p>

              <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 mt-8">
                <Card className="bg-card/40 backdrop-blur-md border-primary/30 p-4 md:p-8 text-center">
                  <Users className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2">Add Multiple Vehicles</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Track all your vehicles in one place with individual health reports
                  </p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-accent/30 p-4 md:p-8 text-center">
                  <BarChart3 className="w-8 h-8 md:w-12 md:h-12 text-accent mx-auto mb-3 md:mb-4" />
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2">Individual Monitoring</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Each vehicle gets personalized insights and alerts
                  </p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-chart-2/30 p-4 md:p-8 text-center">
                  <RefreshCw className="w-8 h-8 md:w-12 md:h-12 text-chart-2 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2">Easy Management</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Switch between vehicles instantly and compare performance
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Complete Car Services Section */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-3 md:space-y-8 max-w-6xl w-full"
            >
              <h2 className="text-xl md:text-5xl font-bold text-foreground">Complete Car Services</h2>
              <p className="text-[10px] md:text-xl text-muted-foreground">Everything your car needs</p>

              <div className="grid grid-cols-1 gap-2 md:gap-6 md:grid-cols-3 mt-3 md:mt-8">
                <Card className="bg-card/40 backdrop-blur-md border-primary/30 p-2 md:p-8">
                  <Shield className="w-5 h-5 md:w-12 md:h-12 text-primary mx-auto mb-1 md:mb-4" />
                  <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-2">Insurance Comparison</h3>
                  <p className="text-[9px] md:text-sm text-muted-foreground mb-1 md:mb-4">
                    Compare quotes from top insurers
                  </p>
                  <Button
                    onClick={() => {
                      document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-7 md:h-10 text-[10px] md:text-sm"
                  >
                    Compare Now
                  </Button>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-accent/30 p-2 md:p-8">
                  <CheckCircle2 className="w-5 h-5 md:w-12 md:h-12 text-accent mx-auto mb-1 md:mb-4" />
                  <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-2">Insurance Renewal</h3>
                  <p className="text-[9px] md:text-sm text-muted-foreground mb-1 md:mb-4">
                    Hassle-free renewal with instant quotes
                  </p>
                  <Button
                    onClick={() => {
                      document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-7 md:h-10 text-[10px] md:text-sm"
                  >
                    Renew Policy
                  </Button>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-chart-2/30 p-2 md:p-8">
                  <CalendarCheck className="w-5 h-5 md:w-12 md:h-12 text-chart-2 mx-auto mb-1 md:mb-4" />
                  <h3 className="text-xs md:text-xl font-bold text-foreground mb-1 md:mb-2">Book Service</h3>
                  <p className="text-[9px] md:text-sm text-muted-foreground mb-1 md:mb-4">
                    Schedule at certified service centers
                  </p>
                  <Button
                    onClick={() => {
                      document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="w-full bg-chart-2 text-white hover:bg-chart-2/90 h-7 md:h-10 text-[10px] md:text-sm"
                  >
                    Book Now
                  </Button>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md border-primary/30 p-2 md:p-6 mt-2 md:mt-8">
                <div className="flex items-center gap-2 md:gap-4">
                  <TrendingUp className="w-4 h-4 md:w-8 md:h-8 text-primary" />
                  <div className="text-left">
                    <h3 className="text-[10px] md:text-lg font-bold text-foreground">AI Recommendation</h3>
                    <p className="text-[9px] md:text-sm text-muted-foreground">
                      Great fuel efficiency! Try reducing harsh braking for even better performance.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Talk to Your Car Section */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-6 md:space-y-8 max-w-3xl w-full"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">Talk to Your Car</h2>
              <p className="text-sm md:text-lg text-muted-foreground">AI-powered conversational diagnostics</p>

              <Card className="bg-card/50 backdrop-blur-md border-primary/30 p-4 md:p-6">
                <div className="space-y-3 md:space-y-4 mb-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 }}
                      className={`flex ${message.sender === "owner" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "owner" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-xs md:text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Ask your car anything..."
                    className="flex-1 bg-background text-xs md:text-sm h-9 md:h-10"
                  />
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 md:h-10 px-3">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Intelligence Inside Every Drive Section */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-4 md:space-y-8 max-w-6xl w-full"
            >
              <h2 className="text-2xl md:text-5xl font-bold text-foreground">Intelligence Inside Every Drive</h2>
              <p className="text-xs md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Using real vehicle data (PIDs, DTCs, vibration, and sensor signals), Steerlit's AI analyses every drive
                to detect anomalies and recommend actions.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-4 md:mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <Card className="bg-card/40 backdrop-blur-md border-primary/30 p-3 md:p-8">
                    <Database className="w-6 h-6 md:w-12 md:h-12 text-primary mx-auto mb-1 md:mb-3" />
                    <h3 className="text-xs md:text-xl font-bold text-foreground">OBD Reader</h3>
                  </Card>
                </motion.div>

                <ArrowRightCircle className="w-4 h-4 md:w-8 md:h-8 text-primary rotate-90 md:rotate-0" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <Card className="bg-card/40 backdrop-blur-md border-accent/30 p-3 md:p-8">
                    <Cloud className="w-6 h-6 md:w-12 md:h-12 text-accent mx-auto mb-1 md:mb-3" />
                    <h3 className="text-xs md:text-xl font-bold text-foreground">AI Cloud</h3>
                  </Card>
                </motion.div>

                <ArrowRightCircle className="w-4 h-4 md:w-8 md:h-8 text-primary rotate-90 md:rotate-0" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <Card className="bg-card/40 backdrop-blur-md border-chart-2/30 p-3 md:p-8">
                    <Smartphone className="w-6 h-6 md:w-12 md:h-12 text-chart-2 mx-auto mb-1 md:mb-3" />
                    <h3 className="text-xs md:text-xl font-bold text-foreground">App Dashboard</h3>
                  </Card>
                </motion.div>

                <ArrowRightCircle className="w-4 h-4 md:w-8 md:h-8 text-primary rotate-90 md:rotate-0" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: false }}
                >
                  <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-3 md:p-8">
                    <User className="w-6 h-6 md:w-12 md:h-12 text-green-500 mx-auto mb-1 md:mb-3" />
                    <h3 className="text-xs md:text-xl font-bold text-foreground">You</h3>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Steerlit Store Section */}
        <section className="relative h-screen w-full snap-start snap-always overflow-y-auto">
          <div className="absolute inset-0 bg-black/85" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center space-y-6 md:space-y-8 max-w-6xl w-full"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Steerlit Store</h2>
              <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">Premium car accessories</p>

              <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
                <Card className="bg-card/40 backdrop-blur-md border-primary/30 p-3 md:p-6 text-center">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Activity className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-foreground mb-2">Smart Dashcam</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">4K recording with AI detection</p>
                  <p className="text-base md:text-lg font-semibold text-primary">Starting from ₹4,499</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-accent/30 p-3 md:p-6 text-center">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-foreground mb-2">Car Vacuum</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Powerful cordless vacuum</p>
                  <p className="text-base md:text-lg font-semibold text-accent">₹1,499</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-chart-2/30 p-3 md:p-6 text-center">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-chart-2/20 rounded-full flex items-center justify-center mx-auto">
                      <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-chart-2" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-foreground mb-2">Cleaning Kit</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Complete car care set</p>
                  <p className="text-base md:text-lg font-semibold text-chart-2">₹1,299</p>
                </Card>

                <Card className="bg-card/40 backdrop-blur-md border-green-500/30 p-3 md:p-6 text-center flex flex-col justify-center">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-foreground mb-2">More Accessories</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Curated for your car</p>
                  <Button
                    onClick={() => {
                      document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="bg-green-500 text-white hover:bg-green-500/90 text-xs md:text-sm h-8 md:h-10"
                  >
                    View All
                  </Button>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist-section" className="relative h-screen w-full snap-start snap-always overflow-hidden">
          <div className="absolute inset-0 bg-black/90" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-center space-y-8 max-w-2xl w-full"
            >
              <div>
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance mb-4">
                  Join the Future of <span className="text-primary">Car Intelligence</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground text-balance">
                  Be among the first to experience Steerlit.
                </p>
              </div>

              <Card className="bg-card/95 backdrop-blur-md border-primary/30 p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Join the Waitlist</h3>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background h-12"
                  />
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Early members get <span className="text-primary font-semibold">exclusive discounts</span>
                </p>
              </Card>

              <div className="space-y-6 pt-8">
                <div className="flex gap-6 justify-center text-sm">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">© 2025 Steerlit. All rights reserved.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
