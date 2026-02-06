// app/components/layout/PageBackground.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function PageBackground() {
    const { scrollYProgress } = useScroll()

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30])

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 bg-grid opacity-50"
                style={{
                    maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%)',
                }}
            />

            {/* Main gradient orb - top left */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-transparent blur-[100px]" />
            </motion.div>

            {/* Secondary orb - top right */}
            <motion.div
                style={{ y: y3 }}
                className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-cyan-500/20 via-blue-500/10 to-transparent blur-[80px]" />
            </motion.div>

            {/* Bottom orb */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute -bottom-60 -right-40 h-[700px] w-[700px] rounded-full"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-violet-600/25 via-indigo-600/15 to-transparent blur-[120px]" />
            </motion.div>

            {/* Center accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-cyan-500/5 blur-[100px]" />
            </div>

            {/* Floating geometric shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 8,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                className="absolute top-1/4 left-1/4 h-32 w-32 border border-indigo-500/10 rounded-2xl rotate-12"
            />

            <motion.div
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 10,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: 1,
                }}
                className="absolute top-1/3 right-1/4 h-24 w-24 border border-violet-500/10 rounded-full"
            />

            <motion.div
                animate={{
                    y: [0, -25, 0],
                    rotate: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: 2,
                }}
                className="absolute bottom-1/3 left-1/3 h-20 w-20 border border-cyan-500/10 rotate-45"
            />

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette effect */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(3, 7, 18, 0.4) 100%)',
                }}
            />
        </div>
    )
}