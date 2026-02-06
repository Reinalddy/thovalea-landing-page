// app/components/sections/CTA.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mail } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/app/lib/motion'

export default function CTA() {
    const handleContactClick = () => {
        window.location.href = 'mailto:reinalddaldy58@gmail.com'
    }

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-cyan-600/20" />
            <div className="absolute inset-0 bg-slate-950/80" />

            {/* Floating elements */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 10,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                className="absolute top-1/4 left-[10%] h-32 w-32 rounded-full border border-indigo-500/20"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -15, 0],
                }}
                transition={{
                    duration: 12,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: 1,
                }}
                className="absolute bottom-1/4 right-[15%] h-24 w-24 rounded-xl border border-violet-500/20 rotate-12"
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative mx-auto max-w-4xl text-center"
            >
                {/* Badge */}
                <motion.div
                    variants={staggerItem}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                        Currently accepting new projects
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={staggerItem}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                >
                    Ready to Start Your{' '}
                    <span className="gradient-text-animated">Digital Journey?</span>
                </motion.h2>

                <motion.p
                    variants={staggerItem}
                    className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                >
                    Let&apos;s discuss how we can help transform your business with
                    reliable, scalable digital solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={staggerItem}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleContactClick}
                        className="btn-primary text-lg px-8 py-4"
                    >
                        <Mail className="h-5 w-5" />
                        Contact Us Now
                        <ArrowRight className="h-5 w-5" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary text-lg px-8 py-4"
                    >
                        <Calendar className="h-5 w-5" />
                        Schedule a Call
                    </motion.button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    variants={staggerItem}
                    className="mt-12 pt-8 border-t border-slate-800/50"
                >
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Free Consultation
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            24-48h Response Time
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            NDA Available
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
