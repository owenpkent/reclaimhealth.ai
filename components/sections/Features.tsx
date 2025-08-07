export function Features() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 dark:text-green-400 text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              AI-powered appeal letter generator
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate personalized, legally sound appeals using advanced AI
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">⚖️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              State-specific legal and insurance logic
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored to each state's regulations and insurance requirements
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Peer review + DOI complaint automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automated peer review and Department of Insurance complaint filing
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 dark:text-yellow-400 text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Secure document upload & encrypted storage
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              HIPAA-compliant document management with end-to-end encryption
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 dark:text-indigo-400 text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Dashboard for tracking appeal progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time tracking and status updates for all your appeals
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 dark:text-red-400 text-2xl">🏥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Partner portal for hospitals & advocacy orgs
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized tools for healthcare organizations and advocacy groups
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
