'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CommunityPage() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)

  const toggleArticle = (articleId: string) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community & Events</h1>
            <p className="text-xl">Engaging with our community through education and outreach</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Blood Drive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Join us for our quarterly community blood drive. Help save lives by donating blood.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> TBD<br />
                    <strong>Time:</strong> 10:00 AM - 4:00 PM<br />
                    <strong>Location:</strong> CGARS Station
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Open House</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Tour our facilities, meet our team, and learn about volunteer opportunities.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> TBD<br />
                    <strong>Time:</strong> 2:00 PM - 6:00 PM<br />
                    <strong>Location:</strong> CGARS Station
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">CPR Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Free CPR and First Aid certification classes for community members.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> Monthly<br />
                    <strong>Time:</strong> 7:00 PM - 10:00 PM<br />
                    <strong>Registration:</strong> Required
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo/Video Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Gallery</h2>
            
            {/* Training Photos */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Training & Education</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.42%20AM.png?updatedAt=1755875054863"
                    alt="Group CPR Class" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Group CPR Class</h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.02.59%20AM.png?updatedAt=1755875054605"
                    alt="Group Training" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Group Training Session</h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.02.20%20AM.png?updatedAt=1755875054170"
                    alt="Airway Management Training" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Airway Management Training</h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/rs=w_1200,h_600,cg_true.webp?updatedAt=1755875044386"
                    alt="Spinal Injury Training" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Spinal Injury Training</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment & Vehicles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Fleet & Equipment</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2010.57.00%20AM.png?updatedAt=1755875055401"
                    alt="All our rigs" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Our Ambulance Fleet</h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/rs=w_1200,h_600,cg_true-1.webp?updatedAt=1755875044587"
                    alt="Another photo of our rigs" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Ambulance 793</h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/Screenshot%202025-08-22%20at%2011.03.16%20AM.png?updatedAt=1755875054682"
                    alt="Rescue and Medical Equipment" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Medical Equipment</h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/rs=w_800,cg_true,m.webp?updatedAt=1755873056984"
                    alt="Ambulance with lights responding" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">Emergency Response</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Photos */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/wvmf5imma/IMG_4526.jpg?updatedAt=1755822390706"
                    alt="Photo of our team" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold">CGARS Team Members</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Videos</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Day in the Life of an EMT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                    <Button 
                      onClick={() => window.open('https://youtube.com', '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      ▶ Watch on YouTube
                    </Button>
                  </div>
                  <p className="text-gray-700">
                    Follow one of our EMTs through a typical 6pm-6am shift and see what it's like 
                    to serve the Cedar Grove community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">CGARS Montage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                    <Button 
                      onClick={() => window.open('https://youtube.com', '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      ▶ Watch on YouTube
                    </Button>
                  </div>
                  <p className="text-gray-700">
                    A comprehensive look at our squad's training, equipment, and community service 
                    throughout the years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News/Blog Feed */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Health & Safety Articles</h2>
            
            <div className="space-y-8">
              {/* Article 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 cursor-pointer" onClick={() => toggleArticle('stroke')}>
                    How to Recognize a Stroke — Every Second Counts
                    <span className="text-sm text-gray-500 ml-2">
                      {expandedArticle === 'stroke' ? '(Click to collapse)' : '(Click to read more)'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {expandedArticle === 'stroke' ? (
                    <div className="prose max-w-none text-gray-700">
                      <p className="mb-4">
                        When it comes to stroke, time is brain. Every minute that passes without treatment, 
                        nearly 2 million brain cells can die. Recognizing the signs early and calling 911 
                        immediately can save a life and prevent long-term disability.
                      </p>
                      
                      <h4 className="text-lg font-semibold mt-6 mb-3">What is a Stroke?</h4>
                      <p className="mb-4">
                        A stroke happens when blood flow to part of the brain is blocked (ischemic stroke) 
                        or when a blood vessel in the brain bursts (hemorrhagic stroke). Without blood and 
                        oxygen, brain cells begin to die rapidly.
                      </p>

                      <h4 className="text-lg font-semibold mt-6 mb-3">The FAST Test</h4>
                      <p className="mb-2">One of the easiest ways to remember the warning signs is the acronym FAST:</p>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>F — Face:</strong> Ask the person to smile. Does one side droop?</li>
                        <li><strong>A — Arms:</strong> Ask them to raise both arms. Does one drift downward?</li>
                        <li><strong>S — Speech:</strong> Ask them to repeat a simple phrase. Is their speech slurred or strange?</li>
                        <li><strong>T — Time:</strong> If you notice any of these signs, call 911 immediately.</li>
                      </ul>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Additional Warning Signs</h4>
                      <p className="mb-2">While FAST covers the most common symptoms, strokes can also cause:</p>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Sudden confusion or trouble understanding speech</li>
                        <li>Sudden numbness or weakness in the face, arm, or leg (especially on one side)</li>
                        <li>Sudden trouble seeing in one or both eyes</li>
                        <li>Sudden dizziness, loss of balance, or difficulty walking</li>
                        <li>A sudden severe headache with no known cause</li>
                      </ul>

                      <h4 className="text-lg font-semibold mt-6 mb-3">What To Do If You Suspect a Stroke</h4>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Call 911 right away. Do not drive the person yourself—paramedics can begin lifesaving treatment en route.</li>
                        <li>Note the time symptoms began. This helps doctors determine which treatments may be possible.</li>
                        <li>Stay with the person. Keep them calm, safe, and comfortable until help arrives.</li>
                      </ul>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Why Acting Fast Matters</h4>
                      <p className="mb-4">
                        Some strokes can be treated with medication that dissolves clots, but this treatment 
                        must usually be given within 3–4.5 hours of symptom onset. The sooner medical 
                        professionals intervene, the greater the chances of recovery.
                      </p>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Final Reminder</h4>
                      <p>
                        Anyone—young or old—can suffer a stroke. Learning to recognize the signs and acting 
                        FAST could save the life of a loved one, a friend, or even a stranger. If you or 
                        someone near you shows stroke symptoms, don't wait. Call 911.
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      When it comes to stroke, time is brain. Every minute that passes without treatment, 
                      nearly 2 million brain cells can die. Recognizing the signs early and calling 911 
                      immediately can save a life and prevent long-term disability.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Article 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 cursor-pointer" onClick={() => toggleArticle('heart-attack')}>
                    How to Recognize a Heart Attack — The Signs You Should Never Ignore
                    <span className="text-sm text-gray-500 ml-2">
                      {expandedArticle === 'heart-attack' ? '(Click to collapse)' : '(Click to read more)'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {expandedArticle === 'heart-attack' ? (
                    <div className="prose max-w-none text-gray-700">
                      <p className="mb-4">
                        Heart disease is the leading cause of death in the United States, but quick recognition 
                        and action can make all the difference. Many people delay calling 911 because they are 
                        unsure if what they're feeling is "really" a heart attack. Knowing the warning signs 
                        can save your life or the life of someone you love.
                      </p>

                      <h4 className="text-lg font-semibold mt-6 mb-3">What is a Heart Attack?</h4>
                      <p className="mb-4">
                        A heart attack happens when blood flow to the heart muscle is blocked, usually by a 
                        clot in the coronary arteries. Without oxygen-rich blood, part of the heart muscle 
                        begins to die. Immediate medical attention is critical.
                      </p>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Common Warning Signs</h4>
                      <p className="mb-2">The classic symptom is chest pain or pressure, but not everyone experiences a heart attack the same way. Look for these signs:</p>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li><strong>Chest discomfort:</strong> Pressure, squeezing, fullness, or pain in the center or left side of the chest that lasts more than a few minutes or goes away and comes back.</li>
                        <li><strong>Upper body discomfort:</strong> Pain or discomfort in one or both arms, the back, neck, jaw, or stomach.</li>
                        <li><strong>Shortness of breath:</strong> Often accompanies chest discomfort but can occur before it.</li>
                        <li>Cold sweats, nausea, or lightheadedness.</li>
                      </ul>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Women and Heart Attack Symptoms</h4>
                      <p className="mb-2">Women are more likely than men to experience:</p>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Nausea or vomiting</li>
                        <li>Unusual fatigue</li>
                        <li>Shortness of breath</li>
                        <li>Pain in the jaw, neck, or back</li>
                      </ul>
                      <p className="mb-4">
                        Because these symptoms are less "classic," women may overlook them or delay seeking help.
                      </p>

                      <h4 className="text-lg font-semibold mt-6 mb-3">What To Do If You Suspect a Heart Attack</h4>
                      <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Call 911 immediately. Emergency medical services can provide treatment on the way to the hospital.</li>
                        <li>Stay calm and rest. Do not try to drive yourself.</li>
                        <li>Chew aspirin (if not allergic and instructed by 911). This can help thin the blood and improve outcomes.</li>
                        <li>Follow dispatcher instructions. Paramedics may ask you to monitor breathing, prepare to perform CPR, or unlock doors for rapid access.</li>
                      </ul>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Why Immediate Action Saves Lives</h4>
                      <p className="mb-4">
                        The longer a heart attack goes untreated, the more heart muscle is damaged. Quick action 
                        not only saves lives but also improves recovery and reduces complications.
                      </p>

                      <h4 className="text-lg font-semibold mt-6 mb-3">Final Reminder</h4>
                      <p>
                        If something feels wrong—don't wait, don't drive, don't ignore it. Call 911 and get help 
                        immediately. Acting quickly can mean the difference between life and death.
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      Heart disease is the leading cause of death in the United States, but quick recognition 
                      and action can make all the difference. Many people delay calling 911 because they are 
                      unsure if what they're feeling is "really" a heart attack.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}