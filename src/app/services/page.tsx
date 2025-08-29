import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">Professional emergency medical services for Cedar Grove</p>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Emergency Response</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Medical Emergencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-red-600">♡</span>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Heart attacks</li>
                    <li>• Strokes</li>
                    <li>• Respiratory distress</li>
                    <li>• Diabetic emergencies</li>
                    <li>• Seizures</li>
                    <li>• Allergic reactions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Trauma Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-red-600">✚</span>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Fractures and injuries</li>
                    <li>• Bleeding control</li>
                    <li>• Spinal injury management</li>
                    <li>• Burns and wounds</li>
                    <li>• Fall injuries</li>
                    <li>• Sports injuries</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Motor Vehicle Accidents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-red-600">🚑</span>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Vehicle extrication</li>
                    <li>• Multi-patient incidents</li>
                    <li>• Highway emergencies</li>
                    <li>• Collision response</li>
                    <li>• Scene safety management</li>
                    <li>• Rapid transport</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/rs=w_800,cg_true,m.webp?updatedAt=1755873056984"
                    alt="Ambulance responding with lights" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Emergency Response</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our dedicated team provides round-the-clock emergency medical services from 6:00 PM to 6:00 AM, 
                    ensuring Cedar Grove residents receive immediate, professional care when they need it most. 
                    With advanced life support capabilities and skilled EMTs, we're ready to respond to any emergency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Outreach</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">CPR Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.42%20AM.png?updatedAt=1755875054863"
                      alt="Group CPR Class" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700">
                    Free CPR and first aid training for community members. Learn life-saving 
                    skills that could make the difference in an emergency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">First Aid Demonstrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.02.59%20AM.png?updatedAt=1755875054605"
                      alt="Group Training" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700">
                    Interactive demonstrations at schools, community centers, and local events. 
                    Teaching basic emergency response skills to residents of all ages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Event Standby</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.02.20%20AM.png?updatedAt=1755875054170"
                      alt="Airway Management Training" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700">
                    Medical standby services for community events, sports games, and public 
                    gatherings ensuring immediate care is available when needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mutual Aid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mutual Aid Partnerships</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We work closely with neighboring towns and emergency services to ensure comprehensive 
              coverage for our region. Through mutual aid agreements, we provide backup support and 
              receive assistance when needed, ensuring no emergency goes unanswered.
            </p>
            <Card className="bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partner Organizations</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <p>• Neighboring EMS squads</p>
                  <p>• Local fire departments</p>
                  <p>• Police departments</p>
                  <p>• Hospital systems</p>
                  <p>• State emergency services</p>
                  <p>• Regional rescue teams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Service Statistics</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">1,600+</div>
                  <div className="text-lg">Calls Annually</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">85+</div>
                  <div className="text-lg">Years of Service</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">47</div>
                  <div className="text-lg">Active Members</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">13,000</div>
                  <div className="text-lg">Residents Served</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl">
                Providing professional, compassionate emergency medical care to Cedar Grove since 1938
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}