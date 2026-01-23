'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function PageBackground() {
    const { scrollYProgress } = useScroll()

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]"
            />
        </div>
    )
}