import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Features } from '@/components/sections/Features'
import { Impact } from '@/components/sections/Impact'
import { Credibility } from '@/components/sections/Credibility'
import { GoogleFormSignup } from '@/components/sections/GoogleFormSignup'
import { Footer } from '@/components/sections/Footer'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Impact />
      <Credibility />
      <GoogleFormSignup />
      <Footer />
    </main>
  )
}
