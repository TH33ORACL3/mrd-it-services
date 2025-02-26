"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t dark:bg-gray-950 dark:border-gray-800">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Mr. D IT Services
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your Trusted Partner in IT Solutions
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#software" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  IT Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Stay updated with our latest news and offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Mr. D IT Services. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
