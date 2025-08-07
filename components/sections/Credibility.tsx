export function Credibility() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Credibility
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Founder: Steve Way
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Actor, disability advocate, healthcare justice leader
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                Why Steve?
              </h4>
              <p className="text-blue-800 dark:text-blue-300">
                As someone who has experienced the healthcare system firsthand, 
                Steve understands the challenges patients face and is committed 
                to using technology to level the playing field.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Advisory Board & Partners
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">👥</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Advisory Board</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">🤝</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Partners</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 dark:text-purple-400 text-lg">📰</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Press Mentions</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 dark:text-yellow-400 text-lg">🏆</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Awards</p>
              </div>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
              Placeholder logos for advisory board, partners, and press mentions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
