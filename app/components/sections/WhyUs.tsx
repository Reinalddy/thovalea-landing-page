// app/components/sections/WhyUs.tsx
'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp } from '@/app/lib/motion'
import { Lightbulb, Target, Users, Headphones } from 'lucide-react'

const reasons = [
    {
        step: '01',
        icon: Lightbulb,
        title: 'Proven Expertise',
        desc: 'Experienced developers with strong technical foundations across multiple technologies and industries.',
    },
    {
        step: '02',
        icon: Target,
        title: 'Structured Process',
        desc: 'Clear planning, transparent development phases, and predictable delivery timelines for every project.',
    },
    {
        step: '03',
        icon: Users,
        title: 'Partnership Approach',
        desc: 'We work as an extension of your team, ensuring alignment with your vision and business goals.',
    },
    {
        step: '04',
        icon: Headphones,
        title: 'Long-Term Support',
        desc: 'Ongoing maintenance, updates, and support beyond launch to ensure continuous improvement.',
    },
]

export default function WhyUs() {
    return (
        <section id="why" className="section-padding bg-slate-950/50">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
                        Why Choose Us
                    </span>
                    <h2 className="section-title mb-4">
                        Why Clients{' '}
                        <span className="gradient-text">Trust Thovalea</span>
                    </h2>
                    <p className="section-subtitle">
                        We prioritize clarity, scalability, and long-term value in every project we undertake.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Center line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-cyan-500/50" />

                    <div className="space-y-12 lg:space-y-0">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                variants={staggerItem}
                                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:direction-rtl'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`glass-card rounded-2xl p-8 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:text-left lg:pl-16'
                                    }`}>
                                    {/* Step number */}
                                    <span className="inline-block text-6xl font-bold gradient-text opacity-20 mb-4">
                                        {reason.step}
                                    </span>

                                    {/* Icon and Title */}
                                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                        }`}>
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 shrink-0">
                                            <reason.icon className="h-6 w-6 text-indigo-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{reason.title}</h3>
                                    </div>

                                    <p className="text-slate-400 leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>

                                {/* Timeline dot */}
                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, type: 'spring' }}
                                        className="h-4 w-4 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/50"
                                    />
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.1, type: 'spring' }}
                                        className="absolute h-8 w-8 rounded-full border border-indigo-500/30"
                                    />
                                </div>

                                {/* Empty space for grid alignment */}
                                {index % 2 === 0 ? <div className="hidden lg:block" /> : null}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
