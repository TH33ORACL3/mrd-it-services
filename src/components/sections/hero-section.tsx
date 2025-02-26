"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight, CheckCircle, ArrowDown } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero animation
    const tl = gsap.timeline()
    tl.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".hero-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(".hero-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.6")
    .from(".hero-stat", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.4")
    .from(".scroll-indicator", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      repeat: -1,
      yoyo: true,
    }, "-=0.2")
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter-value')
    counters.forEach(counter => {
      const target = parseInt(counter.textContent || "0", 10)
      const count = { val: 0 }
      gsap.to(count, {
        val: target,
        duration: 2,
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
        },
        onUpdate: function() {
          if (counter.textContent?.includes("+")) {
            counter.textContent = Math.floor(count.val) + "+"
          } else if (counter.textContent?.includes("/")) {
            counter.textContent = Math.floor(count.val) + "/7"
          } else {
            counter.textContent = Math.floor(count.val) + "%"
          }
        }
      })
    })
    
    // Clean up
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 bg-[url('/images/tech-pattern.png')] opacity-10"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 mix-blend-overlay"></div>
      
      <div className="container px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 leading-tight">
            Innovative IT Solutions for Modern Businesses
          </h1>
          
          <p className="hero-description text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Transform your business with cutting-edge technology and expert IT services
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" ref={counterRef}>
            <div className="hero-stat group">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <span className="counter-value text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">500+</span>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>
            <div className="hero-stat group">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <span className="counter-value text-4xl font-bold text-teal-400 group-hover:scale-110 transition-transform duration-300">98%</span>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
            <div className="hero-stat group">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <span className="counter-value text-4xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">24/7</span>
                <p className="text-gray-300">Support Available</p>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 mt-2 animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Tech-themed particles or design elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
