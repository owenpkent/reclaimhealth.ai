export function Problem() {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Problem
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Over 238 million insurance claims are denied annually in the U.S.
                  </h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Most patients never appeal, even though about 90 percent of appeals succeed.
                  </h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Insurers now use opaque AI to deny claims without human oversight.
                  </h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Disabled, chronically ill, and low-income patients are hit the hardest.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">
              The Reality
            </h3>
            <p className="text-red-700 dark:text-red-300">
              Insurance companies are using AI to deny claims faster than ever, 
              leaving patients without the care they need and deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
