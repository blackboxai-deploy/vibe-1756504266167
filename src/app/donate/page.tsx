'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function DonatePage() {
  const [donationForm, setDonationForm] = useState({
    amount: '',
    donationType: '',
    name: '',
    email: '',
    message: ''
  })

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your generous donation! We will contact you with payment details.')
    setDonationForm({
      amount: '',
      donationType: '',
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl">Help us continue providing life-saving services to Cedar Grove</p>
          </div>
        </div>
      </section>

      {/* Why Donations Matter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Donations Matter</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.16%20AM.png?updatedAt=1755875054682"
                  alt="Medical Equipment" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Medical Equipment</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our ambulances require state-of-the-art medical equipment to provide the best possible 
                  patient care. From cardiac monitors to advanced airway management tools, every piece 
                  of equipment helps save lives. Your donations ensure we can maintain and upgrade 
                  these critical resources.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Training</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Continuous education and training are essential for maintaining our high standards of care. 
                  From EMT certification programs to specialized rescue training, we invest in our members' 
                  development. Your support helps provide free training opportunities for all volunteers.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.42%20AM.png?updatedAt=1755875054863"
                  alt="Training Session" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2010.57.00%20AM.png?updatedAt=1755875055401"
                  alt="Ambulance Fleet" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Maintenance & Operations</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our ambulances require regular maintenance, fuel, and updates to stay operational. 
                  From routine servicing to major repairs, keeping our fleet road-ready is a significant 
                  ongoing expense. Your contributions help ensure our ambulances are always ready to respond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Campaigns */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Current Fundraising Campaigns</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">Monitoring Equipment Upgrade</CardTitle>
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                    <div className="bg-red-600 h-4 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">$13,000 raised of $20,000 goal</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We need to replace aging cardiac monitors and vital sign equipment. These devices 
                    are critical for patient assessment and care during transport.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Advanced cardiac monitoring systems</li>
                    <li>• Blood pressure monitoring equipment</li>
                    <li>• Pulse oximetry devices</li>
                    <li>• Temperature monitoring tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Additional Medical Supplies</CardTitle>
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">$6,000 raised of $15,000 goal</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our medical supply inventory needs regular replenishment and expansion to handle 
                    the increasing number of calls we receive annually.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Emergency medications</li>
                    <li>• Bandages and wound care supplies</li>
                    <li>• IV supplies and fluids</li>
                    <li>• Oxygen delivery equipment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ways to Give</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">One-Time Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Make a direct donation to support our operations, equipment purchases, or training programs.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Online donation form</li>
                    <li>• Check payments</li>
                    <li>• Cash donations</li>
                    <li>• Memorial gifts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Corporate Sponsorships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Partner with us as a corporate sponsor and help support our mission while gaining 
                    community recognition.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Equipment sponsorships</li>
                    <li>• Event partnerships</li>
                    <li>• Training program support</li>
                    <li>• Vehicle sponsorships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">Legacy Gifts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Create a lasting impact by including CGARS in your estate planning or making a planned gift.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Wills and bequests</li>
                    <li>• Life insurance policies</li>
                    <li>• Retirement accounts</li>
                    <li>• Memorial funds</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Online Donation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Make a Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonationSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donationType">Donation Type</Label>
                      <Select onValueChange={(value) => setDonationForm({...donationForm, donationType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select donation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Operating Fund</SelectItem>
                          <SelectItem value="equipment">Equipment Fund</SelectItem>
                          <SelectItem value="training">Training Programs</SelectItem>
                          <SelectItem value="vehicles">Vehicle Maintenance</SelectItem>
                          <SelectItem value="memorial">Memorial Gift</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="amount">Donation Amount</Label>
                      <Select onValueChange={(value) => setDonationForm({...donationForm, amount: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25">$25</SelectItem>
                          <SelectItem value="50">$50</SelectItem>
                          <SelectItem value="100">$100</SelectItem>
                          <SelectItem value="250">$250</SelectItem>
                          <SelectItem value="500">$500</SelectItem>
                          <SelectItem value="1000">$1,000</SelectItem>
                          <SelectItem value="other">Other Amount</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donorName">Full Name</Label>
                      <Input
                        id="donorName"
                        value={donationForm.name}
                        onChange={(e) => setDonationForm({...donationForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="donorEmail">Email Address</Label>
                      <Input
                        id="donorEmail"
                        type="email"
                        value={donationForm.email}
                        onChange={(e) => setDonationForm({...donationForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Share why you're supporting CGARS..."
                      value={donationForm.message}
                      onChange={(e) => setDonationForm({...donationForm, message: e.target.value})}
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
                      Submit Donation Request
                    </Button>
                    <p className="text-sm text-gray-600 mt-2">
                      We will contact you with payment details and tax receipt information
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Supporters</h2>
            
            <div className="text-center mb-12">
              <p className="text-xl mb-8">
                We gratefully acknowledge the generous support of our community partners and donors
              </p>
            </div>

            {/* Sponsor Recognition Board */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Community Partners & Sponsors</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/20 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Platinum Sponsors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm">
                      Recognition reserved for our most generous supporters ($5,000+)
                    </p>
                    <div className="mt-4 text-white/60 text-sm">
                      • Prominent recognition on vehicles
                      • Website acknowledgment
                      • Annual report features
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/20 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Gold Sponsors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm">
                      Valued supporters who contribute $1,000 - $4,999 annually
                    </p>
                    <div className="mt-4 text-white/60 text-sm">
                      • Station recognition plaque
                      • Website listing
                      • Newsletter acknowledgment
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/20 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Community Supporters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm">
                      All donors who contribute to our mission (up to $999)
                    </p>
                    <div className="mt-4 text-white/60 text-sm">
                      • Thank you acknowledgment
                      • Tax receipt
                      • Updates on impact
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg">
                Interested in becoming a sponsor? Contact us to learn about partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}