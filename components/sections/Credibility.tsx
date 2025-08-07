export default function Credibility() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Credibility
          </h2>
          <div className="text-center mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founder: Steve Way</h3>
              <p className="text-lg text-gray-700">
                Actor, disability advocate, healthcare justice leader.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-500 font-medium">Advisory Board</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-500 font-medium">Partners</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-500 font-medium">Press Mentions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
