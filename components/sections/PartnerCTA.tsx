import { Button } from '@/components/ui/button'

export default function PartnerCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build ethical counter-AI with us.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We invite hospitals, nonprofits, and investors to join this movement to protect patient rights and restore access to care.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Request the Investor Deck
          </Button>
        </div>
      </div>
    </section>
  )
}
