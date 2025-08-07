export function GoogleFormSignup() {
  return (
    <section id="signup-section" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Movement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be among the first to fight back against insurance denials with AI-powered appeals. 
            Sign up for early access and updates.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Get Early Access
            </h3>
            <p className="text-gray-600">
              We respect your privacy. We do not sell your data.
            </p>
          </div>
          
          {/* Google Form Embed */}
          <div className="w-full">
            <iframe 
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
              title="ReclAIm Signup Form"
            >
              Loading…
            </iframe>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Not legal advice. For informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
