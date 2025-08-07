import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Denied by a bot? Fight back with ours.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered appeals to reclaim your right to care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
