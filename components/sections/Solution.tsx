export function Solution() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ReclAIm uses AI to fight back against insurance denials and restore access to care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Upload your denial letter securely
            </h3>
            <p className="text-gray-600">
              HIPAA-compliant document upload with encrypted storage
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Generate a personalized, legally sound appeal
            </h3>
            <p className="text-gray-600">
              AI-powered appeal letter generator with state-specific legal logic
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Trigger peer review and state DOI complaints
            </h3>
            <p className="text-gray-600">
              Automated peer review and Department of Insurance complaint filing
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-bold">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Track progress in your dashboard
            </h3>
            <p className="text-gray-600">
              Real-time tracking of appeal status and outcomes
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              Human-centered design, scalable for individuals and institutions
            </h3>
            <p className="text-blue-100">
              Built with accessibility in mind, supporting both individual patients and healthcare organizations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
