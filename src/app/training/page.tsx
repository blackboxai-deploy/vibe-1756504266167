import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Training & Education</h1>
            <p className="text-xl">Empowering our community with life-saving skills</p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Training Programs</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">EMT Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.02.59%20AM.png?updatedAt=1755875054605"
                      alt="EMT Training" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprehensive EMT-Basic training program leading to state and national registry certification.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 mb-4">
                    <li>• 150+ hours of instruction</li>
                    <li>• Hands-on clinical experience</li>
                    <li>• State certification exam preparation</li>
                    <li>• National Registry eligibility</li>
                  </ul>
                  <p className="text-sm text-green-600 font-semibold">FREE for CGARS members</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Driver Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/rs=w_800,cg_true,m.webp?updatedAt=1755873056984"
                      alt="Ambulance Driver Training" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Professional ambulance driver education focusing on safety, emergency vehicle operations, and patient care support.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 mb-4">
                    <li>• Emergency vehicle operation</li>
                    <li>• Defensive driving techniques</li>
                    <li>• Patient transportation protocols</li>
                    <li>• Equipment familiarization</li>
                  </ul>
                  <p className="text-sm text-green-600 font-semibold">FREE for CGARS members</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">CPR/First Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.42%20AM.png?updatedAt=1755875054863"
                      alt="CPR Training Class" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    American Heart Association CPR and First Aid certification courses for community members and volunteers.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 mb-4">
                    <li>• Adult/Child/Infant CPR</li>
                    <li>• AED training</li>
                    <li>• Basic first aid skills</li>
                    <li>• Choking response</li>
                  </ul>
                  <p className="text-sm text-green-600 font-semibold">FREE for community</p>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Training */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Specialized Rescue Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/rs=w_1200,h_600,cg_true.webp?updatedAt=1755875044386"
                      alt="Spinal Injury Training" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Advanced rescue techniques and specialized emergency response training for experienced members.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Spinal immobilization techniques</li>
                    <li>• Vehicle extrication basics</li>
                    <li>• Hazmat awareness</li>
                    <li>• Mass casualty incident response</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Airway Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.02.20%20AM.png?updatedAt=1755875054170"
                      alt="Airway Management Training" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Advanced airway management techniques and respiratory emergency protocols for EMTs.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Advanced airway devices</li>
                    <li>• Oxygen delivery systems</li>
                    <li>• Respiratory assessment</li>
                    <li>• Ventilation techniques</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Emergency Preparedness Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Home Emergency Kit Essentials:</h4>
                  <ul className="text-gray-700 space-y-2 mb-4">
                    <li>• First aid supplies and medications</li>
                    <li>• Flashlights and extra batteries</li>
                    <li>• Battery-powered or hand-crank radio</li>
                    <li>• Emergency food and water (3-day supply)</li>
                    <li>• Emergency contact information</li>
                    <li>• Local evacuation routes</li>
                    <li>• Important documents (copies)</li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Download Full Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Safety Checklists</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Monthly Safety Checks:</h4>
                  <ul className="text-gray-700 space-y-2 mb-4">
                    <li>• Test smoke and carbon monoxide detectors</li>
                    <li>• Check fire extinguisher pressure</li>
                    <li>• Review family emergency plan</li>
                    <li>• Update emergency contact lists</li>
                    <li>• Check emergency kit supplies</li>
                    <li>• Practice evacuation routes</li>
                    <li>• Review medication expiration dates</li>
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Download Checklists
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Educational Materials */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">When to Call 911</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">Emergency situations requiring immediate 911 response:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Chest pain or heart attack symptoms</li>
                    <li>• Difficulty breathing or choking</li>
                    <li>• Stroke symptoms (FAST test)</li>
                    <li>• Severe bleeding or trauma</li>
                    <li>• Loss of consciousness</li>
                    <li>• Severe allergic reactions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Basic First Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">Essential first aid techniques everyone should know:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• How to control bleeding</li>
                    <li>• Burn treatment basics</li>
                    <li>• Choking response techniques</li>
                    <li>• Shock prevention and treatment</li>
                    <li>• Basic wound care</li>
                    <li>• When to move an injured person</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Child Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">Keeping children safe at home and in the community:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Childproofing essentials</li>
                    <li>• Car seat safety guidelines</li>
                    <li>• Water safety rules</li>
                    <li>• Poison prevention tips</li>
                    <li>• Teaching children about 911</li>
                    <li>• Home fire escape planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Training Schedule</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Community CPR Class</h3>
                      <p className="text-gray-600 mb-2">Learn life-saving CPR and AED techniques</p>
                      <p className="text-sm text-gray-500">CGARS Station • 2 hours • Free</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-lg font-semibold text-blue-600">Monthly</p>
                      <p className="text-sm text-gray-600">7:00 PM - 9:00 PM</p>
                      <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">EMT Training Program</h3>
                      <p className="text-gray-600 mb-2">Comprehensive EMT certification course</p>
                      <p className="text-sm text-gray-500">CGARS Station • 150+ hours • Free for members</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-lg font-semibold text-red-600">Fall & Spring</p>
                      <p className="text-sm text-gray-600">Evenings & Weekends</p>
                      <Link href="/join">
                        <Button className="mt-2 bg-red-600 hover:bg-red-700 text-white">
                          Join CGARS
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">First Aid Workshop</h3>
                      <p className="text-gray-600 mb-2">Basic first aid skills for families</p>
                      <p className="text-sm text-gray-500">Community Center • 4 hours • Free</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-lg font-semibold text-green-600">Quarterly</p>
                      <p className="text-sm text-gray-600">Saturday mornings</p>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700 text-white">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                Interested in any of our training programs?
              </p>
              <div className="space-x-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                    Join CGARS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}