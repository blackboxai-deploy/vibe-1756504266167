import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="https://ik.imagekit.io/wvmf5imma/ll.webp?updatedAt=1755875043761" 
                alt="CGARS Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Cedar Grove Ambulance & Rescue Squad</h3>
                <p className="text-gray-400 text-sm">Neighbors Helping Neighbors Since 1938</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing compassionate, professional, and life-saving emergency medical services to the nearly 13,000 residents of Cedar Grove, NJ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <Link href="/join" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Join Our Team
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="/training" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Training
              </Link>
              <Link href="/donate" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Support Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="font-medium">Emergency:</span> 911
              </p>
              <p>
                <span className="font-medium">Non-Emergency:</span><br />
                (973) 239-6604
              </p>
              <p className="mt-4">
                <span className="font-medium">Address:</span><br />
                651 Pompton Ave<br />
                Cedar Grove, NJ 07009
              </p>
              <p className="mt-4">
                <span className="font-medium">Operating Hours:</span><br />
                6:00 PM - 6:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Social Media and Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="https://www.facebook.com/pages/Cedar-Grove-Ambulance-Rescue-Squad/291424390879092"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/cedargrove.ems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348c0-1.297 1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348C10.797 15.937 9.746 16.988 8.449 16.988z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>&copy; 2024 Cedar Grove Ambulance & Rescue Squad. All rights reserved.</p>
              <p className="mt-1">Proudly serving Cedar Grove since 1938</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}