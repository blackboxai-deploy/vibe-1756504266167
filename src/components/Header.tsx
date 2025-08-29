'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      {/* Emergency Number Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2">
        <p className="text-lg font-bold">EMERGENCY: DIAL 911 | NON-EMERGENCY: (973) 239-6604</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-4">
            <img 
              src="https://ik.imagekit.io/wvmf5imma/ll.webp?updatedAt=1755875043761" 
              alt="CGARS Logo" 
              className="h-16 w-16 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">Cedar Grove Ambulance & Rescue Squad</h1>
              <p className="text-sm text-gray-600">Neighbors Helping Neighbors Since 1938</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Our History
                    </Link>
                    <Link href="/about#mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Mission & Values
                    </Link>
                    <Link href="/about#equipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                      Equipment
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/join" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Join Us
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/services" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Services
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/community" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Community & Events
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/testimonials" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Testimonials
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/training" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Training
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/donate" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Donate
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link href="/join" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Join Us
                </Link>
                <Link href="/services" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/community" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Community & Events
                </Link>
                <Link href="/testimonials" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
                <Link href="/training" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Training & Education
                </Link>
                <Link href="/donate" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Support Us
                </Link>
                <Link href="/contact" className="text-lg font-medium text-gray-900 hover:text-red-600" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}