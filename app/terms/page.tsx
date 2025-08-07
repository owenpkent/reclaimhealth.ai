export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">
              By using ReclAIm's services, you agree to these Terms of Service. Please read them carefully.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h2>
            <p className="text-gray-700 mb-4">
              ReclAIm provides AI-powered tools to help users generate insurance appeal letters and track appeal progress. Our services are for informational purposes only and do not constitute legal advice.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for providing accurate information, maintaining the security of your account, and using our services in compliance with applicable laws and regulations.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              ReclAIm is not liable for any damages arising from the use of our services. We provide tools to assist with appeals but cannot guarantee specific outcomes.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us at hello@reclaim.health.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
