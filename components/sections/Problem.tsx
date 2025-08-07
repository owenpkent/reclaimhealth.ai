export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-gray-800">
                  <strong>Over 238 million insurance claims are denied annually in the U.S.</strong>
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-lg text-gray-800">
                  <strong>Most patients never appeal, even though about 90 percent of appeals succeed.</strong>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-gray-800">
                  <strong>Insurers now use opaque AI to deny claims without human oversight.</strong>
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-gray-800">
                  <strong>Disabled, chronically ill, and low-income patients are hit the hardest.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
