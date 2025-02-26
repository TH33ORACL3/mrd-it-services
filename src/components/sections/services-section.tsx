"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { 
  Code, 
  Cloud, 
  Shield, 
  Headphones, 
  Database, 
  BarChart3, 
  Smartphone, 
  Cog,
  ArrowRight
} from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  href: string
}

function ServiceCard({ icon, title, description, delay, href }: ServiceCardProps) {
  return (
    <Card className="service-card border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="group" asChild>
          <Link href={href} className="flex items-center">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(".section-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    })
    
    gsap.from(".section-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    })
    
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      }
    })
    
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="section-description text-lg text-gray-600 dark:text-gray-400">
            We provide comprehensive IT solutions tailored to meet the unique needs of your business
          </p>
        </div>
        
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Code className="h-6 w-6" />}
            title="Software Development"
            description="Custom software solutions tailored to your business needs with modern technologies and best practices."
            delay={0}
            href="/services#software"
          />
          
          <ServiceCard
            icon={<Cloud className="h-6 w-6" />}
            title="Cloud Solutions"
            description="Secure and scalable cloud infrastructure services to optimize your operations and reduce costs."
            delay={0.1}
            href="/services#cloud"
          />
          
          <ServiceCard
            icon={<Shield className="h-6 w-6" />}
            title="Cybersecurity"
            description="Comprehensive security solutions to protect your valuable data and systems from threats."
            delay={0.2}
            href="/services#security"
          />
          
          <ServiceCard
            icon={<Headphones className="h-6 w-6" />}
            title="IT Support"
            description="24/7 technical support and maintenance services to ensure your systems run smoothly."
            delay={0.3}
            href="/services#support"
          />
          
          <ServiceCard
            icon={<Database className="h-6 w-6" />}
            title="Data Management"
            description="Efficient data storage, processing, and analytics solutions to drive insights and decision-making."
            delay={0.4}
            href="/services#data"
          />
          
          <ServiceCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Business Intelligence"
            description="Advanced analytics and reporting tools to transform your data into actionable business insights."
            delay={0.5}
            href="/services#bi"
          />
          
          <ServiceCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile App Development"
            description="Native and cross-platform mobile applications designed for exceptional user experience."
            delay={0.6}
            href="/services#mobile"
          />
          
          <ServiceCard
            icon={<Cog className="h-6 w-6" />}
            title="IT Consulting"
            description="Strategic IT guidance and roadmaps to align technology with your business objectives."
            delay={0.7}
            href="/services#consulting"
          />
        </div>
      </div>
    </section>
  )
}
