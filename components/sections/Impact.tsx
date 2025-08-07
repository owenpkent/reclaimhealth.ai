export function Impact() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Impact & Market
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              90 million Americans
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              rely on Medicaid and face frequent denials
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                These patients need our help the most
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              $60+ billion
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              in care is lost annually due to unchallenged denials
            </p>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-red-800 font-medium">
                Money that should be going to patient care
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Year 1 Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500,000</div>
                <div className="text-gray-600">Appeals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$100M+</div>
                <div className="text-gray-600">Care Restored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
