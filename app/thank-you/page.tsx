import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Thank You for Joining the Movement!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your information and will be in touch soon. Together, we can fight back against insurance denials and reclaim access to care.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                What happens next:
              </p>
              <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  We'll review your information
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  You'll receive updates about our progress
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Early access when we launch
                </li>
              </ul>
            </div>
            <div className="mt-8 space-y-4">
              <Link href="/">
                <Button variant="outline">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
