import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Green Banner */}
      <div className="bg-green-600 text-white text-center py-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Our Recruitment Drive is in full swing!
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Whether you are new to our community and want to make a difference, or a long time resident 
              who understands how Cedar Grove has relied on its volunteers for decades, please consider 
              joining the Cedar Grove Ambulance and Rescue Squad.
            </p>

            <p className="mb-6">
              Joining our group of dedicated volunteers and serving as an EMT or Ambulance Driver allows 
              one to experience what it's like to make a positive impact on the lives of friends and 
              neighbors in their time of need.
            </p>

            <p className="mb-6">
              Our recent recruitment letter explained the challenges we are facing and referenced a few 
              issues that have arisen in areas of NJ where volunteer EMS has ceased to exist. We are 
              indebted to the town council for their choice to support us as we rebuild and retrain, 
              so that the best possible volunteer emergency medical service can be delivered to our residents.
            </p>

            <p className="mb-6">
              Township administration has supported us throughout this journey and made necessary 
              accommodations in delivery of EMS services as we reorganized, all with the best interest 
              of the residents in mind at every turn. Without their support, we would not be in a 
              position to serve our community as the volunteer organization we strive to be.
            </p>

            <p className="mb-8">
              We look forward to continue working with the council to take positive steps that best 
              serve the community.
            </p>

            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Mission?</h2>
              <div className="space-x-4">
                <Link href="/join">
                  <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}