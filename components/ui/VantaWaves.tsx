'use client'

import { useEffect, useRef, useState } from 'react'

interface VantaWavesProps {
  children: React.ReactNode
  className?: string
}

export function VantaWaves({ children, className = '' }: VantaWavesProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let mounted = true

    const loadVanta = async () => {
      if (typeof window === 'undefined' || !vantaRef.current || !mounted) return

      try {
        // Add a small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100))

        // Load scripts via script tags for better compatibility
        const loadScript = (src: string): Promise<void> => {
          return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve()
              return
            }
            
            const script = document.createElement('script')
            script.src = src
            script.onload = () => resolve()
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        // Load THREE.js from CDN
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
        
        // Load Vanta.js waves from CDN
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js')

        // Wait a bit more for scripts to initialize
        await new Promise(resolve => setTimeout(resolve, 200))

        if (!mounted || !vantaRef.current) return

        // Initialize Vanta effect using global objects
        const VANTA = (window as any).VANTA
        const THREE = (window as any).THREE

        if (VANTA && THREE && VANTA.WAVES) {
          vantaEffect.current = VANTA.WAVES({
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
          
          if (mounted) {
            setIsLoaded(true)
          }
        } else {
          console.error('Vanta.js or THREE.js not loaded properly')
        }
      } catch (error) {
        console.error('Failed to load Vanta.js:', error)
      }
    }

    // Load with a delay to ensure component is mounted
    const timer = setTimeout(loadVanta, 500)

    return () => {
      mounted = false
      clearTimeout(timer)
      
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
    <div 
      ref={vantaRef} 
      className={`relative ${className} ${!isLoaded ? 'bg-gradient-to-br from-blue-600 to-blue-800' : ''}`}
    >
      {children}
    </div>
  )
}
