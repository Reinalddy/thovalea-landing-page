// app/components/sections/Testimonials.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeUp, staggerContainer, staggerItem } from '@/app/lib/motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CEO, TechStart Inc.',
        content: 'Thovalea transformed our outdated systems into a modern, scalable platform. Their team understood our needs perfectly and delivered beyond expectations. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Michael Rodriguez',
        role: 'Operations Director, LogiFlow',
        content: 'The logistics app they built for us has streamlined our entire operation. Real-time tracking and inventory management have never been easier. Outstanding work!',
        rating: 5,
    },
    {
        name: 'Amanda Foster',
        role: 'Founder, HealthFirst Clinics',
        content: 'Professional, responsive, and incredibly skilled. The patient management system they developed has improved our clinic efficiency by 40%. A true partner in our growth.',
        rating: 5,
    },
    {
        name: 'David Kim',
        role: 'CTO, RetailPlus',
        content: 'From consultation to deployment, Thovalea maintained excellent communication and delivered a robust e-commerce solution that handles our high traffic seamlessly.',
        rating: 5,
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="testimonials" className="section-padding bg-slate-950/50">
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
                        Testimonials
                    </span>
                    <h2 className="section-title mb-4">
                        What Our Clients{' '}
                        <span className="gradient-text">Say About Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Don&apos;t just take our word for it. Here&apos;s what our clients have to say
                        about working with Thovalea.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main testimonial */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative glass-card rounded-3xl p-8 md:p-12"
                    >
                        {/* Quote icon */}
                        <div className="absolute top-8 right-8 opacity-10">
                            <Quote className="h-16 w-16 text-indigo-400" />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
                            &ldquo;{testimonials[activeIndex].content}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xl font-bold text-white">
                                {testimonials[activeIndex].name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-semibold text-white">
                                    {testimonials[activeIndex].name}
                                </p>
                                <p className="text-sm text-slate-400">
                                    {testimonials[activeIndex].role}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prev}
                            className="flex h-12 w-12 items-center justify-center rounded-full glass hover:bg-indigo-500/20 transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5 text-slate-400" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === activeIndex
                                            ? 'w-8 bg-gradient-to-r from-indigo-500 to-violet-500'
                                            : 'w-2 bg-slate-600 hover:bg-slate-500'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={next}
                            className="flex h-12 w-12 items-center justify-center rounded-full glass hover:bg-indigo-500/20 transition-colors"
                        >
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                        </motion.button>
                    </div>
                </div>

                {/* Client Logos */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20 pt-16 border-t border-slate-800/50"
                >
                    <p className="text-center text-sm text-slate-500 mb-8">
                        Trusted by leading companies across industries
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
                        {['TechStart', 'LogiFlow', 'HealthFirst', 'RetailPlus', 'DataCore', 'CloudNine'].map((company) => (
                            <span
                                key={company}
                                className="text-xl md:text-2xl font-bold text-slate-600 hover:text-slate-400 transition-colors cursor-default"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
