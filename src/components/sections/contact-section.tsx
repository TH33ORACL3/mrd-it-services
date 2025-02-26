"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircle2,
  Send
} from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from(".contact-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".contact-description", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    })
    
    gsap.from(".contact-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".contact-wrapper",
        start: "top 80%"
      }
    })
    
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible."
      })
      
      if (formRef.current) {
        formRef.current.reset()
      }
    }, 1500)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="contact-title text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="contact-description text-lg text-gray-600 dark:text-gray-400">
            Have questions or ready to start your project? Contact us today for a consultation.
          </p>
        </div>
        
        <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="contact-card lg:col-span-2 border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="cloud">Cloud Solutions</SelectItem>
                      <SelectItem value="security">Cybersecurity</SelectItem>
                      <SelectItem value="support">IT Support</SelectItem>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Project Budget</Label>
                  <RadioGroup defaultValue="10k-25k" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under-10k" id="under-10k" />
                      <Label htmlFor="under-10k" className="font-normal">Under $10,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10k-25k" id="10k-25k" />
                      <Label htmlFor="10k-25k" className="font-normal">$10,000 - $25,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="25k-50k" id="25k-50k" />
                      <Label htmlFor="25k-50k" className="font-normal">$25,000 - $50,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-50k" id="over-50k" />
                      <Label htmlFor="over-50k" className="font-normal">Over $50,000</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry" rows={5} required />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="newsletter" />
                  <Label htmlFor="newsletter" className="font-normal text-sm">
                    Subscribe to our newsletter for IT insights and updates
                  </Label>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="contact-card border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MailIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:info@mrditservices.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      info@mrditservices.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+11234567890" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <address className="text-sm not-italic text-gray-600 dark:text-gray-400">
                      123 Tech Avenue<br />
                      Suite 456<br />
                      San Francisco, CA 94105
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: 10AM - 2PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="contact-card border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-300 mt-0.5 flex-shrink-0" />
                    <span>Expert team with 15+ years experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-300 mt-0.5 flex-shrink-0" />
                    <span>Customized solutions for your business</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-300 mt-0.5 flex-shrink-0" />
                    <span>24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-300 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing, no hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
