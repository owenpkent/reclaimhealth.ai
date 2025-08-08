'use client'

import { useEffect, useRef } from 'react'

interface VantaWavesProps {
  children: React.ReactNode
  className?: string
}

export function VantaWaves({ children, className = '' }: VantaWavesProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const loadVanta = async () => {
      if (typeof window !== 'undefined' && vantaRef.current) {
        try {
          // Import THREE.js first
          const THREE = await import('three')
          
          // Import Vanta WAVES effect
          const VANTA = await import('vanta/dist/vanta.waves.min.js')
          
          // Initialize Vanta effect
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1e40af, // Blue-700 to match your theme
            shininess: 30.00,
            waveHeight: 15.00,
            waveSpeed: 0.75,
            zoom: 0.65
          })
        } catch (error) {
          console.error('Failed to load Vanta.js:', error)
        }
      }
    }

    loadVanta()

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy()
        } catch (error) {
          console.error('Error destroying Vanta effect:', error)
        }
      }
    }
  }, [])

  return (
    <div ref={vantaRef} className={`relative ${className}`}>
      {children}
    </div>
  )
}
