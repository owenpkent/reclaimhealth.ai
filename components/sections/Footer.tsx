export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ReclAIm</h3>
              <p className="text-gray-300 mb-4">
                AI-powered appeals to reclaim your right to care.
              </p>
              <p className="text-gray-300">
                Email: <a href="mailto:hello@reclaim.health" className="text-blue-300 hover:text-blue-200">hello@reclaim.health</a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              Not legal advice. For informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
