'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Being part of CGARS means being there for your neighbors when they need you most. Every call reminds us why we serve.",
      author: "EMT Mark Peña"
    },
    {
      quote: "The training and camaraderie here is exceptional. We're not just volunteers - we're a family dedicated to serving our community.",
      author: "LT. Youseff Mikhaeil, Training Supervisor"
    },
    {
      quote: "Volunteering with CGARS has given me skills and experiences I'll carry for life. It's neighbors helping neighbors at its finest.",
      author: "CC. Alyssa Landi"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/wvmf5imma/rs=w_800,cg_true,m.webp?updatedAt=1755873056984')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/60"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="https://ik.imagekit.io/wvmf5imma/ll.webp?updatedAt=1755875043761" 
                alt="CGARS Logo" 
                className="h-24 w-24 mx-auto mb-6 bg-white rounded-full p-2"
              />
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Cedar Grove Ambulance & Rescue Squad
              </h1>
              <p className="text-2xl md:text-3xl font-medium mb-8 text-blue-100">
                Neighbors Helping Neighbors Since 1938
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-red-600/90 border-red-500 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">WE NEED YOU!</h3>
                  <p className="text-lg mb-4">Join our team of dedicated volunteers</p>
                  <Link href="/recruitment">
                    <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                      Learn More About Joining
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-600/90 border-blue-500 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Free Training Available</h3>
                  <p className="mb-2">• EMT Training</p>
                  <p className="mb-4">• Driver Training</p>
                  <Link href="/join">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                      Apply Today
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">6:00 PM - 6:00 AM</p>
                <p className="text-gray-600">Daily emergency medical coverage</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">47 Members</p>
                <p className="text-gray-600">• 25 NJ & National Registry EMTs</p>
                <p className="text-gray-600">• 10+ members in EMT school</p>
                <p className="text-gray-600">• BLS crew staffed 24/7</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Service Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">Nearly 13,000</p>
                <p className="text-gray-600">Residents served in Cedar Grove, NJ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The mission of the Cedar Grove Ambulance & Rescue Squad is to provide compassionate, 
              professional, and life-saving emergency medical services to the nearly 13,000 residents 
              of our community. We are dedicated to protecting lives through rapid response, high-quality 
              patient care, continuous training, and community outreach. Guided by teamwork, integrity, 
              and service, we stand ready—day and night—to serve our neighbors in their greatest times of need.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Squad in Action</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2010.57.00%20AM.png?updatedAt=1755875055401"
                alt="All our rigs" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">Our Fleet</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.42%20AM.png?updatedAt=1755875054863"
                alt="Group CPR Class" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">CPR Training</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://ik.imagekit.io/wvmf5imma/IMG_4526.jpg?updatedAt=1755822390706"
                alt="Photo of our team" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">Our Team</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/community">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Members Say</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 min-h-[200px] flex items-center justify-center">
              <div className="transition-opacity duration-500">
                <blockquote className="text-xl italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <cite className="text-lg font-semibold text-blue-200">
                  — {testimonials[currentTestimonial].author}
                </cite>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/testimonials">
                <Button className="bg-white text-blue-900 hover:bg-gray-100">
                  Read More Testimonials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join our team of dedicated volunteers and help us serve the Cedar Grove community
          </p>
          <div className="space-x-4">
            <Link href="/join">
              <Button className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">
                Apply to Join
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}