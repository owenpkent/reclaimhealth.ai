'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // Netlify will handle the form submission automatically
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Join the Movement
          </h2>
          <form 
            name="signup" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            {/* Honeypot field for spam protection */}
            <div className="hidden">
              <input name="bot-field" />
            </div>
            
            {/* Netlify form name */}
            <input type="hidden" name="form-name" value="signup" />
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  I'm a... *
                </label>
                <Select name="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="caregiver">Caregiver</SelectItem>
                    <SelectItem value="advocate">Advocate</SelectItem>
                    <SelectItem value="hospital-admin">Hospital Admin</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your experience or interest..."
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join the Movement'}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. We do not sell your data.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
