export default function Solution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-lg mb-2">1. Upload your denial letter securely.</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">2. Generate a personalized, legally sound appeal.</h3>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">3. Trigger peer review and state DOI complaints.</h3>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-semibold text-lg mb-2">4. Track progress in your dashboard.</h3>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white p-6 rounded-lg border">
            <p className="text-gray-700 text-center">
              <strong>Notes:</strong> HIPAA-compliant, human-centered design, scalable for individuals and institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
