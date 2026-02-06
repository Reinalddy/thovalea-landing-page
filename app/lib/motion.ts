// app/lib/motion.ts
import { Variants } from 'framer-motion'

// Spring configs for natural motion
export const springConfig = {
  gentle: { type: 'spring', stiffness: 120, damping: 14 },
  bouncy: { type: 'spring', stiffness: 300, damping: 15 },
  smooth: { type: 'spring', stiffness: 100, damping: 20 },
}

// Easing presets (typed as tuples for Framer Motion)
export const easing = {
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
  in: [0.4, 0, 1, 1] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
}

// Fade up animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)'
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: easing.smooth
    }
  },
}

// Fade down animation
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
    filter: 'blur(10px)'
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: easing.smooth
    }
  },
}

// Fade in from left
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: 'blur(10px)'
  },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: easing.smooth
    }
  },
}

// Fade in from right
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: 'blur(10px)'
  },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: easing.smooth
    }
  },
}

// Scale up animation
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(10px)'
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easing.bounce
    }
  },
}

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Fast stagger container
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Slow stagger container
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Child item for stagger
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)'
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: easing.smooth
    }
  },
}

// Hover scale effect
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3, ease: easing.smooth }
}

// Hover lift effect
export const hoverLift = {
  y: -8,
  transition: { duration: 0.3, ease: easing.smooth }
}

// Tap scale effect
export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.1 }
}

// Rotate animation
export const rotate: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9
  },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.bounce
    }
  },
}

// Floating animation (for decorative elements)
export const floating = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    ease: 'easeInOut',
    repeat: Infinity,
  },
}

// Pulse glow animation
export const pulseGlow = {
  boxShadow: [
    '0 0 20px -5px rgba(99, 102, 241, 0.4)',
    '0 0 40px -5px rgba(99, 102, 241, 0.6)',
    '0 0 20px -5px rgba(99, 102, 241, 0.4)',
  ],
  transition: {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
  },
}

// Draw line animation (for SVG paths)
export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing.smooth
    }
  },
}

// Counter animation helper (returns config for animate prop)
export const counterAnimation = (duration: number = 2) => ({
  duration,
  ease: easing.out,
})

// Text reveal animation (word by word)
export const textReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const textRevealWord: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)'
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: easing.smooth
    }
  },
}

// Viewport config for scroll animations
export const viewportConfig = {
  once: true,
  margin: '-100px',
}

export const viewportConfigEager = {
  once: true,
  margin: '-50px',
}
