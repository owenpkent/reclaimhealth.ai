import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@reclaim.health</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mission</h3>
                  <p className="text-gray-600">
                    We're building AI-powered tools to help patients fight back against insurance denials and reclaim their right to care.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Founder</h3>
                  <p className="text-gray-600">Steve Way - Actor, disability advocate, healthcare justice leader</p>
                </div>
              </div>
            </div>
            <div>
              <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="hidden">
                  <input name="bot-field" />
                </div>
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="How can we help you?"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
