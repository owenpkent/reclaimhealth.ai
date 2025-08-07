'use client'

export function Hero() {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-section')
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Denied by a bot? Fight back with ours.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-blue-200">
            AI-powered appeals to reclaim your right to care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToSignup}
              className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors"
            >
              Join the Waitlist
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
