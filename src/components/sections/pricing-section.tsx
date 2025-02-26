"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check, Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "For small projects and personal use",
    price: {
      monthly: 0,
      annually: 0
    },
    features: [
      "1,000 credits",
      "No overage allowed",
      "Community support",
      "Basic documentation",
      "Limited API access"
    ],
    limitations: [
      "No priority support",
      "No custom integrations",
      "No advanced features"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    id: "pro",
    name: "Pro",
    description: "Perfect for growing businesses",
    price: {
      monthly: 49,
      annually: 39
    },
    features: [
      "5,000 credits",
      "Overage allowed ($0.99 per 100 credits)",
      "Priority email support",
      "Advanced documentation",
      "Full API access",
      "Custom integrations",
      "Advanced analytics"
    ],
    limitations: [],
    cta: "Upgrade Now",
    popular: true
  },
  {
    id: "pro-plus",
    name: "Pro Plus",
    description: "For established enterprises",
    price: {
      monthly: 249,
      annually: 199
    },
    features: [
      "27,500 credits",
      "Overage allowed ($0.90 per 100 credits)",
      "Priority support via email & phone",
      "Dedicated account manager",
      "Custom solutions",
      "Enterprise-grade security",
      "Advanced integrations",
      "Team management",
      "Training & onboarding"
    ],
    limitations: [],
    cta: "Upgrade Now",
    popular: false
  },
  {
    id: "team",
    name: "Team",
    description: "For large teams and organizations",
    price: {
      monthly: 99,
      annually: 79
    },
    perSeat: true,
    features: [
      "$0.90 per 100 credits",
      "Overage allowed ($0.90 per 100 credits)",
      "Priority support",
      "SSO integration",
      "Centralized billing",
      "Team management console",
      "Role-based access control",
      "Audit logs",
      "Customizable workflows"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    contactSales: true
  }
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(".pricing-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".pricing-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".pricing-toggle", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".pricing-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".pricing-grid",
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
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-950" id="pricing">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="pricing-title text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="pricing-description text-lg text-gray-600 dark:text-gray-400">
            Start with our free tier or upgrade for more credits and features
          </p>
        </div>
        
        <div className="pricing-toggle flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-blue-600"
          />
          <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Annually
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              Save 20%
            </span>
          </span>
        </div>
        
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <motion.div 
              key={plan.id}
              className="pricing-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className={`h-full border ${plan.popular ? 'border-blue-500 dark:border-blue-600' : 'border-gray-200 dark:border-gray-800'} relative overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-7 translate-y-2">
                      POPULAR
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">
                        ${isAnnual ? plan.price.annually : plan.price.monthly}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-1">
                        {plan.perSeat ? '/seat' : ''}/mo
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                        Billed annually
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                      <Star className="h-4 w-4" />
                      <span>{plan.features[0]}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {plan.features.slice(1).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <ul className="space-y-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="h-4 w-4 border-2 border-gray-300 dark:border-gray-700 rounded-full mt-0.5 flex-shrink-0" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <Button variant="outline" size="lg">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  )
}
