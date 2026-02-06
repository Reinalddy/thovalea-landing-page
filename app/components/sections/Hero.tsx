// app/components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/app/lib/motion'

const techStack = ['React', 'Next.js', 'Node.js', 'Laravel', 'Flutter', 'AWS']

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
            {/* Decorative floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating gradient spheres */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                    className="absolute top-1/4 left-[15%] h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 10,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 1,
                    }}
                    className="absolute top-1/3 right-[10%] h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-500/10 blur-3xl"
                />

                {/* Geometric shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
                    className="absolute top-1/4 right-1/4 h-32 w-32 border border-indigo-500/10 rounded-xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
                    className="absolute bottom-1/3 left-1/4 h-24 w-24 border border-violet-500/10 rounded-full"
                />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                {/* Badge */}
                <motion.div
                    variants={staggerItem}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
                >
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm font-medium text-slate-300">
                        Trusted by <span className="text-indigo-400 font-semibold">100+</span> Growing Businesses
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={staggerItem}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
                >
                    <span className="block">Transform Your Business</span>
                    <span className="block mt-2 gradient-text-animated">
                        With Digital Innovation
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={staggerItem}
                    className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    <strong className="text-slate-200">Thovalea</strong> is your technology partner for
                    custom software development, digital transformation, and long-term technical
                    solutions that drive real business growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={staggerItem}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary text-base"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary text-base"
                    >
                        View Our Work
                    </motion.button>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    variants={staggerItem}
                    className="mt-16 pt-8 border-t border-slate-800/50"
                >
                    <p className="text-sm text-slate-500 mb-4">Technologies we work with</p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="px-4 py-2 text-sm font-medium text-slate-400 rounded-lg glass hover:text-white hover:border-indigo-500/30 transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                        className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                    >
                        <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
                        <ChevronDown className="h-5 w-5" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
