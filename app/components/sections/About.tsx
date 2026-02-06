// app/components/sections/About.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Target, Users, Award, Zap } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem } from '@/app/lib/motion'

const stats = [
    { icon: Target, value: 150, suffix: '+', label: 'Projects Delivered' },
    { icon: Users, value: 50, suffix: '+', label: 'Happy Clients' },
    { icon: Award, value: 5, suffix: '+', label: 'Years Experience' },
    { icon: Zap, value: 99, suffix: '%', label: 'Client Satisfaction' },
]

const features = [
    'Custom & tailored development',
    'Business process digitalization',
    'Scalable system architecture',
    'Long-term support & maintenance',
    'Agile development methodology',
    'Transparent communication',
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0
            const timer = setInterval(() => {
                current += increment
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)
            return () => clearInterval(timer)
        }
    }, [isInView, value])

    return (
        <span ref={ref} className="gradient-text">
            {count}{suffix}
        </span>
    )
}

export default function About() {
    return (
        <section id="about" className="section-padding bg-slate-950/50">
            <div className="mx-auto max-w-7xl">
                {/* Stats Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={staggerItem}
                            className="glass-card rounded-2xl p-6 text-center group"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 mb-4 group-hover:scale-110 transition-transform">
                                <stat.icon className="h-6 w-6 text-indigo-400" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold mb-1">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm text-slate-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* About Content */}
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
                            About Us
                        </span>

                        <h2 className="section-title mb-6">
                            Building Digital Systems That{' '}
                            <span className="gradient-text">Drive Growth</span>
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Thovalea focuses on building digital systems that solve real
                            business problems. We work closely with our clients to understand
                            their workflows, challenges, and goals before designing solutions.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-8">
                            Our mission is to deliver software that is clear, maintainable,
                            scalable, and ready to support long-term growth. We believe in
                            building partnerships, not just projects.
                        </p>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary inline-flex"
                        >
                            Work With Us
                        </motion.a>
                    </motion.div>

                    {/* Right: Feature Cards */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Background decoration */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10 rounded-3xl blur-2xl opacity-50" />

                        <div className="relative glass-card rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">What We Offer</h3>

                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={feature}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 text-slate-300"
                                    >
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600">
                                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
