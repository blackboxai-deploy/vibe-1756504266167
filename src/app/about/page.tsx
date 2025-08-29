'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  const [showFullHistory, setShowFullHistory] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cedar Grove Ambulance & Rescue Squad</h1>
            <p className="text-xl">Serving our community with dedication since 1938</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our History</h2>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                It is often said, "One moment can change your life." Yet, it was one moment that changed 
                a town. In 1938, a resident from Cedar Grove was in need of immediate medical help and, 
                at the time, the only rescue squad available was in Verona. It was in that moment that 
                a group of enterprising Cedar Grove firemen changed the face of their little town.
              </p>

              {!showFullHistory && (
                <Button 
                  onClick={() => setShowFullHistory(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Read More
                </Button>
              )}

              {showFullHistory && (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    So in May of 1938, the Cedar Grove Rescue Squad was formed with the express purpose 
                    of providing emergency medical care and rescue services to those in need. The Rescue 
                    Squad was based in Center Fire Company #1 and for thirteen years was the sole provider 
                    of emergency medical care for the residents of Cedar Grove. However, that was all to change.
                  </p>

                  <p>
                    In 1951, a dramatic increase in emergency calls caused eight Auxiliary Policemen and 
                    eight residents to found the Cedar Grove Ambulance Unit. The Ambulance Unit was based 
                    in the Municipal Building.
                  </p>

                  <p>
                    As the town grew over the years, so did the emergency calls. The need for more vehicles, 
                    more volunteers, and more space was patent. Thus in 1962, the Ambulance Unit moved to 
                    its headquarters at the intersection of Cedar Street and Ridge Road and in 1965, the 
                    Rescue Squad moved to its headquarters at Pompton Avenue and Myrtle Avenue. The two 
                    organizations worked together to provide emergency care to the residents of Cedar Grove, 
                    with the Rescue Squad handling the on-scene work and the Ambulance Unit providing 
                    transportation to the hospital.
                  </p>

                  <p>
                    The early eighties would once force a change among the emergency medical workers in 
                    Cedar Grove. New state regulations and an even more dramatic increase in emergency 
                    calls would cause the Rescue Squad and Ambulance Unit to begin merger negotiations. 
                    And in 1982, the Cedar Grove Ambulance and Rescue Squad was born.
                  </p>

                  <p>
                    Today, the Cedar Grove Ambulance and Rescue Squad has over sixty members that handle 
                    1,600 calls a year. We have three ambulances and one heavy-duty rescue truck which 
                    is equipped with the latest in rescue and medical equipment, which we use to provide 
                    the best possible care to all those in need.
                  </p>

                  <p className="text-blue-600 font-medium">
                    Go to the Gallery to see pictures of our squad in the past or visit our Facebook page at:{' '}
                    <a 
                      href="https://www.facebook.com/pages/Cedar-Grove-Ambulance-Rescue-Squad/291424390879092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-800"
                    >
                      Facebook Page
                    </a>
                  </p>

                  <Button 
                    onClick={() => setShowFullHistory(false)}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Show Less
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Mission & Values</h2>
            
            {/* Mission */}
            <Card className="mb-12">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  The mission of the Cedar Grove Ambulance & Rescue Squad is to provide compassionate, 
                  professional, and life-saving emergency medical services to the nearly 13,000 residents 
                  of Cedar Grove. We are dedicated to protecting lives through rapid response, high-quality 
                  patient care, continuous training, and meaningful community outreach.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We proudly serve the residents of Cedar Grove as neighbors caring for neighbors. 
                      Every call reminds us that we are not only emergency responders but also part 
                      of the fabric of this town.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Safety is at the heart of everything we do—protecting our patients, our members, 
                      and our community through preparedness, skill, and vigilance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Teamwork</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Whether on a call, in training, or serving at community events, we succeed 
                      because we stand together. Trust, communication, and mutual support define our squad.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Station & Equipment */}
      <section id="equipment" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Station & Equipment</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">791 Ambulance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2010.57.00%20AM.png?updatedAt=1755875055401"
                      alt="791 Ambulance" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    791 is a 2005 Ford E-350 Horton Ambulance. The rigs are identically equipped 
                    with the most up to date EMS equipment.
                  </p>
                  <p className="text-gray-700">
                    Each rig also carries a computer for patient data and a printer for printing 
                    patient information for the hospital staff.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">793 Ambulance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/rs=w_1200,h_600,cg_true-1.webp?updatedAt=1755875044587"
                      alt="793 Ambulance" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    793 is a 2002 Ford E-350 Horton Ambulance. The rigs are identically equipped 
                    with the most up to date EMS equipment.
                  </p>
                  <p className="text-gray-700">
                    Each rig also carries a computer for patient data and a printer for printing 
                    patient information for the hospital staff.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Medical Equipment */}
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 text-center">Medical Equipment</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img 
                        src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.16%20AM.png?updatedAt=1755875054682"
                        alt="Rescue and Medical Equipment" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our ambulances are equipped with the latest in rescue and medical equipment, 
                        ensuring we can provide the best possible care to all those in need. From 
                        advanced life support systems to rescue tools, our equipment meets or exceeds 
                        all state and national standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}