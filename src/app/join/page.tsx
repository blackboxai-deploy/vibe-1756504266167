'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

export default function JoinPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    phone: '',
    email: '',
    emergencyContact: '',
    membershipType: '',
    cprCert: false,
    emtCert: false,
    emtDetails: '',
    otherCerts: '',
    experience: '',
    occupation: '',
    availability: '',
    canCommit: false,
    whyJoin: '',
    strengths: '',
    reference1: '',
    reference2: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const emailContent = `
New CGARS Membership Application

PERSONAL INFORMATION:
Full Name: ${formData.fullName}
Date of Birth: ${formData.dateOfBirth}
Address: ${formData.address}
Phone: ${formData.phone}
Email: ${formData.email}
Emergency Contact: ${formData.emergencyContact}

MEMBERSHIP TYPE:
${formData.membershipType}

CERTIFICATIONS & TRAINING:
CPR Certification: ${formData.cprCert ? 'Yes' : 'No'}
EMT Certification: ${formData.emtCert ? 'Yes' : 'No'}
EMT Details: ${formData.emtDetails}
Other Certifications: ${formData.otherCerts}

EXPERIENCE & AVAILABILITY:
Previous Experience: ${formData.experience}
Occupation/School: ${formData.occupation}
Availability: ${formData.availability}
Can Commit to Training: ${formData.canCommit ? 'Yes' : 'No'}

SHORT ANSWER:
Why Join CGARS: ${formData.whyJoin}
Strengths/Skills: ${formData.strengths}

REFERENCES:
Reference 1: ${formData.reference1}
Reference 2: ${formData.reference2}
    `

    // In a real application, you would send this to your backend
    // For demo purposes, we'll show an alert
    alert('Application submitted successfully! We will contact you soon.')
    
    // Reset form
    setFormData({
      fullName: '',
      dateOfBirth: '',
      address: '',
      phone: '',
      email: '',
      emergencyContact: '',
      membershipType: '',
      cprCert: false,
      emtCert: false,
      emtDetails: '',
      otherCerts: '',
      experience: '',
      occupation: '',
      availability: '',
      canCommit: false,
      whyJoin: '',
      strengths: '',
      reference1: '',
      reference2: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl">Become part of the CGARS family and serve your community</p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Join Cedar Grove Ambulance & Rescue Squad?
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Becoming part of the Cedar Grove Ambulance & Rescue Squad means more than volunteering — 
              it's joining a family of dedicated neighbors who serve and protect nearly 13,000 residents. 
              As a member, you'll gain skills, experience, and friendships that last a lifetime.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Training & Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Free CPR/First Aid training</li>
                    <li>• EMT certification</li>
                    <li>• Driver training opportunities</li>
                    <li>• Continuous learning through drills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Nationally recognized certifications</li>
                    <li>• Professional development</li>
                    <li>• Career preparation</li>
                    <li>• Healthcare experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Camaraderie</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Close-knit team</li>
                    <li>• Lifelong friendships</li>
                    <li>• Shared purpose</li>
                    <li>• Trust and teamwork</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Community Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Meaningful volunteer hours</li>
                    <li>• Direct community impact</li>
                    <li>• Personal growth</li>
                    <li>• Leadership skills</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Roles Available */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">EMT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Emergency Medical Technicians provide direct patient care and medical intervention 
                    during emergency calls. Full training provided.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Driver (19+)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Ambulance drivers safely transport patients and assist EMTs during calls. 
                    Must be 19 or older with clean driving record.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Junior Member (15-17)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Junior members assist with training, community events, and station duties. 
                    Great way to get started in emergency services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Membership Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 1: Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 1: Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address (Street, City, State, ZIP) *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="emergencyContact">Emergency Contact (Name, Relationship, Phone Number) *</Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Membership Type */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 2: Membership Type</h3>
                    <Select onValueChange={(value) => setFormData({...formData, membershipType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emt">EMT</SelectItem>
                        <SelectItem value="driver">Driver (19+)</SelectItem>
                        <SelectItem value="junior">Junior Member (15-17)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Section 3: Certifications & Training */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 3: Certifications & Training</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="cprCert"
                          checked={formData.cprCert}
                          onCheckedChange={(checked) => setFormData({...formData, cprCert: checked === true})}
                        />
                        <Label htmlFor="cprCert">Do you currently hold a CPR certification?</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="emtCert"
                          checked={formData.emtCert}
                          onCheckedChange={(checked) => setFormData({...formData, emtCert: checked === true})}
                        />
                        <Label htmlFor="emtCert">Do you currently hold an EMT certification?</Label>
                      </div>
                      {formData.emtCert && (
                        <div>
                          <Label htmlFor="emtDetails">EMT Certification Details (level, state, expiration date)</Label>
                          <Input
                            id="emtDetails"
                            value={formData.emtDetails}
                            onChange={(e) => setFormData({...formData, emtDetails: e.target.value})}
                          />
                        </div>
                      )}
                      <div>
                        <Label htmlFor="otherCerts">Other medical or rescue certifications</Label>
                        <Input
                          id="otherCerts"
                          value={formData.otherCerts}
                          onChange={(e) => setFormData({...formData, otherCerts: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Experience & Availability */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 4: Experience & Availability</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="experience">Previous EMS, medical, or volunteer experience</Label>
                        <Textarea
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="occupation">Occupation/School *</Label>
                        <Input
                          id="occupation"
                          value={formData.occupation}
                          onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="availability">Days and times you are generally available to volunteer *</Label>
                        <Textarea
                          id="availability"
                          value={formData.availability}
                          onChange={(e) => setFormData({...formData, availability: e.target.value})}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="canCommit"
                          checked={formData.canCommit}
                          onCheckedChange={(checked) => setFormData({...formData, canCommit: checked === true})}
                        />
                        <Label htmlFor="canCommit">Are you able to commit to required training and squad meetings?</Label>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Short Answer */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 5: Short Answer</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="whyJoin">Why do you want to join the Cedar Grove Ambulance & Rescue Squad? *</Label>
                        <Textarea
                          id="whyJoin"
                          value={formData.whyJoin}
                          onChange={(e) => setFormData({...formData, whyJoin: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="strengths">What strengths, skills, or qualities would you bring to the squad? *</Label>
                        <Textarea
                          id="strengths"
                          value={formData.strengths}
                          onChange={(e) => setFormData({...formData, strengths: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 6: References */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Section 6: References</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="reference1">Reference #1 (Name, Relationship, Phone/Email) *</Label>
                        <Input
                          id="reference1"
                          value={formData.reference1}
                          onChange={(e) => setFormData({...formData, reference1: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="reference2">Reference #2 (Name, Relationship, Phone/Email) *</Label>
                        <Input
                          id="reference2"
                          value={formData.reference2}
                          onChange={(e) => setFormData({...formData, reference2: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQ for Applicants</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Time Commitment Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Junior Members (15-17):</strong> Minimum 4 hours per week</li>
                    <li>• <strong>Members over 18:</strong> Minimum 12 hours per week</li>
                    <li>• <strong>All probationary members:</strong> Must obtain EMT certification within one year of joining</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Training Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    All new members receive comprehensive training including CPR/First Aid, EMT certification 
                    (if applicable), driver training, and ongoing education through monthly drills and workshops.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Training Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    CGARS provides free EMT training, driver certification, CPR/First Aid classes, 
                    specialized rescue training, and continuing education opportunities to keep 
                    members current with the latest emergency medical practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}