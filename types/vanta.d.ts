declare module 'vanta/dist/vanta.waves.min.js' {
  interface VantaWavesOptions {
    el: HTMLElement | null
    THREE: any
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    color?: number
    shininess?: number
    waveHeight?: number
    waveSpeed?: number
    zoom?: number
  }

  interface VantaEffect {
    destroy(): void
  }

  const VANTA: {
    default: (options: VantaWavesOptions) => VantaEffect
  }

  export = VANTA
}

declare module 'three' {
  export * from 'three/src/Three'
}
