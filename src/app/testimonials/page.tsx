import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h1>
            <p className="text-xl">Hear from our members and community partners</p>
          </div>
        </div>
      </section>

      {/* What is it like being an EMT at CGARS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What is it like being an EMT at CGARS?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">LT. Youseff Mikhaeil</CardTitle>
                  <p className="text-gray-600">Training Supervisor</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "Leading training at CGARS means preparing our team for the unexpected. Every drill, 
                    every exercise, every lesson is designed to ensure we're ready to save lives. When 
                    I see our members grow from new volunteers to confident EMTs, I know we're making 
                    a real difference in our community."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">CC. Alyssa Landi</CardTitle>
                  <p className="text-gray-600">Crew Chief</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "Being part of CGARS isn't just about emergency calls – it's about being there for 
                    your neighbors. Whether it's a training night or a 3 AM medical emergency, I know 
                    I can count on my squad family. The bonds we form here last a lifetime."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">EMT. Bhrugu Patel</CardTitle>
                  <p className="text-gray-600">Emergency Medical Technician</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "Volunteering with CGARS has given me skills and confidence I never imagined. 
                    From my first CPR certification to becoming a full EMT, every step has been 
                    supported by an amazing team. Now I get to help others in their time of greatest need."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">EMT. Mark Peña</CardTitle>
                  <p className="text-gray-600">Emergency Medical Technician</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "Every call reminds me why I became an EMT. Whether it's helping someone having 
                    a heart attack or assisting at a car accident, I know that being part of CGARS 
                    means I'm making a tangible difference in people's lives when they need it most."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Driver & Support Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Drivers & Support Team
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Driver Rohan Kapour</CardTitle>
                  <p className="text-gray-600">Lead of House and Grounds</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "As a driver and house manager, I see the full scope of what CGARS does. From 
                    maintaining our equipment to getting our EMTs to calls quickly and safely, 
                    every role is crucial. I'm proud to support our mission behind the wheel and 
                    keep our station running smoothly."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Driver James Huyrk</CardTitle>
                  <p className="text-gray-600">Ambulance Driver</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "Driving for CGARS taught me that every second counts. My job is to get our 
                    EMTs to the scene safely and efficiently, then transport patients with care. 
                    The training and teamwork here made me a better driver and a better community member."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Leaders & Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Community Leaders & Partners
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Local Police Department</CardTitle>
                  <p className="text-gray-600">Medical Call Assistance</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "CGARS is an essential partner in keeping Cedar Grove safe. Their professional 
                    response and medical expertise complement our public safety efforts. We're grateful 
                    to work alongside such dedicated volunteers."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Nursing Home Staff</CardTitle>
                  <p className="text-gray-600">Healthcare Partners</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "The CGARS team provides exceptional care for our residents. Their compassion 
                    and professionalism during medical emergencies gives families peace of mind. 
                    They treat every patient with dignity and respect."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Community Leader</CardTitle>
                  <p className="text-gray-600">Cedar Grove Resident</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "CGARS represents the best of Cedar Grove – neighbors helping neighbors. 
                    Their volunteer spirit and dedication to our community is truly inspiring. 
                    We're fortunate to have such committed first responders."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Reflections */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Our Members Serve</h2>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <blockquote className="text-xl italic mb-4">
                  "I joined CGARS because I wanted to give back to the community that raised me. 
                  Every call is a reminder that we're more than just volunteers – we're guardians 
                  of our neighbors' wellbeing."
                </blockquote>
                <cite className="text-lg font-semibold text-blue-200">— Long-time Member</cite>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <blockquote className="text-xl italic mb-4">
                  "The friendships I've made at CGARS are irreplaceable. We've shared intense moments, 
                  celebrated successes, and supported each other through challenges. This squad is family."
                </blockquote>
                <cite className="text-lg font-semibold text-blue-200">— Veteran Volunteer</cite>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <blockquote className="text-xl italic mb-4">
                  "Being part of CGARS opened doors I never expected. The leadership skills, 
                  medical training, and confidence I've gained here have helped me in every 
                  aspect of my life."
                </blockquote>
                <cite className="text-lg font-semibold text-blue-200">— Junior Member Graduate</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Family?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Experience the pride, purpose, and camaraderie that comes with serving your community
            </p>
            <div className="space-x-4">
              <a 
                href="/join"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Apply to Join CGARS
              </a>
              <a 
                href="/contact"
                className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}