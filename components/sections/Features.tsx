export default function Features() {
  const features = [
    "AI-powered appeal letter generator",
    "State-specific legal and insurance logic",
    "Peer review + DOI complaint automation",
    "Secure document upload & encrypted storage",
    "Dashboard for tracking appeal progress",
    "Partner portal for hospitals & advocacy orgs"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-lg text-gray-800 font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
