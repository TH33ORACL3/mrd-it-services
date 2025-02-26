"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "Mr. D IT Services transformed our business operations with their cloud solutions. Their expertise and dedication to our success were exceptional. The team went above and beyond to ensure a smooth transition.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechInnovate",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "The cybersecurity implementation by Mr. D IT Services has given us peace of mind. Their team's proactive approach to security is unmatched in the industry. We've seen a 95% reduction in security incidents.",
    author: "Michael Chen",
    position: "CTO",
    company: "SecureFinance",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    content: "We've been working with Mr. D IT Services for over 5 years now. Their consistent quality and responsive support make them our go-to IT partner. They understand our business needs and deliver solutions that work.",
    author: "Emily Rodriguez",
    position: "Operations Director",
    company: "GlobalRetail",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    content: "The custom software solution developed by Mr. D IT Services has increased our productivity by 40%. Their development team is highly skilled and delivered the project on time and within budget.",
    author: "David Parker",
    position: "COO",
    company: "ManufacturePro",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    content: "Their IT support team is responsive, knowledgeable, and always goes the extra mile. Since partnering with Mr. D IT Services, our downtime has decreased significantly, allowing us to focus on our core business.",
    author: "Alexandra Kim",
    position: "IT Director",
    company: "HealthPlus",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg"
  }
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(".testimonials-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".testimonials-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".testimonials-carousel", {
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
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900" id="testimonials">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="testimonials-description text-lg text-gray-600 dark:text-gray-400">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>
        
        <div className="testimonials-carousel max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-lg dark:bg-gray-800 h-full">
                      <CardContent className="flex flex-col p-6 h-full">
                        <QuoteIcon className="h-10 w-10 text-blue-500/20 mb-4" />
                        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center mt-auto">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              fill
                              sizes="48px"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious variant="outline" />
              <CarouselNext variant="outline" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to transform your business?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Let's discuss how our IT solutions can help you achieve your goals.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
