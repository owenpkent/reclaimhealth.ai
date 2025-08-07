export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">ReclAIm</h3>
            <p className="text-gray-300 mb-4">
              AI-powered appeals to reclaim your right to care.
            </p>
            <p className="text-gray-400 text-sm">
              Not legal advice. For informational purposes only.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">
              Email: hello@reclaim.health
            </p>
            <p className="text-gray-400 text-sm mt-2">
              (placeholder)
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ReclAIm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
