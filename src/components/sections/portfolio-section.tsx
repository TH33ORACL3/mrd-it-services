"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

const portfolioItems = [
  {
    category: "web",
    items: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Custom online store with integrated payment systems and inventory management",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["React", "Node.js", "MongoDB", "Stripe"]
      },
      {
        id: 2,
        title: "Corporate Portal",
        description: "Internal company portal with document management and communication tools",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Angular", "Firebase", "Material UI"]
      },
      {
        id: 3,
        title: "Real Estate Website",
        description: "Property listing and management platform with virtual tours",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Next.js", "PostgreSQL", "AWS"]
      }
    ]
  },
  {
    category: "mobile",
    items: [
      {
        id: 4,
        title: "Food Delivery App",
        description: "Mobile application for ordering food with real-time tracking",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["React Native", "Firebase", "Google Maps API"]
      },
      {
        id: 5,
        title: "Fitness Tracker",
        description: "Health and fitness app with workout plans and progress tracking",
        image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Flutter", "Firebase", "HealthKit"]
      },
      {
        id: 6,
        title: "Travel Companion",
        description: "Travel planning and booking app with local recommendations",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["React Native", "Node.js", "MongoDB"]
      }
    ]
  },
  {
    category: "cloud",
    items: [
      {
        id: 7,
        title: "Cloud Migration",
        description: "Enterprise-level cloud migration and infrastructure setup",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["AWS", "Docker", "Kubernetes", "Terraform"]
      },
      {
        id: 8,
        title: "Serverless Architecture",
        description: "Cost-effective serverless application with automatic scaling",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["AWS Lambda", "API Gateway", "DynamoDB"]
      },
      {
        id: 9,
        title: "DevOps Pipeline",
        description: "Automated CI/CD pipeline for rapid and reliable deployments",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD"]
      }
    ]
  },
  {
    category: "security",
    items: [
      {
        id: 10,
        title: "Cybersecurity Implementation",
        description: "Comprehensive security solutions for financial institutions",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Zero Trust", "Encryption", "Firewall", "IDS/IPS"]
      },
      {
        id: 11,
        title: "Security Audit",
        description: "In-depth security assessment and vulnerability detection",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Penetration Testing", "Compliance", "Risk Assessment"]
      },
      {
        id: 12,
        title: "Identity Management",
        description: "Secure authentication and access control system",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["OAuth", "SSO", "MFA", "IAM"]
      }
    ]
  }
]

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(".portfolio-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".portfolio-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".tabs-container", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-950" id="portfolio">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-title text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="portfolio-description text-lg text-gray-600 dark:text-gray-400">
            Explore our recent projects and see how we've helped businesses transform with technology
          </p>
        </div>
        
        <div className="tabs-container">
          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-lg gap-0">
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
            </div>
            
            {portfolioItems.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div 
                      key={item.id} 
                      className="portfolio-item group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{
                            objectFit: 'cover'
                          }}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 text-white">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button variant="ghost" className="group" size="sm">
                          View Details
                          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
