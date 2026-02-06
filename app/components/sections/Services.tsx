// app/components/sections/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/app/lib/motion'
import { Code, Smartphone, Cloud, Zap, Database, Shield, ArrowRight } from 'lucide-react'

const services = [
    {
        icon: Code,
        title: 'Custom Software Development',
        desc: 'Tailor-made web applications and systems designed specifically for your business workflows and operational needs.',
        gradient: 'from-indigo-500 to-violet-500',
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications built with performance, scalability, and user experience in mind.',
        gradient: 'from-violet-500 to-purple-500',
    },
    {
        icon: Cloud,
        title: 'Cloud & Infrastructure',
        desc: 'Cloud-ready architectures, deployment strategies, and scalable infrastructure solutions for modern businesses.',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        icon: Zap,
        title: 'Automation & Optimization',
        desc: 'Streamline your operations with intelligent automation and workflow optimization to boost efficiency.',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: Database,
        title: 'Data & Analytics',
        desc: 'Transform your data into actionable insights with custom analytics solutions and reporting dashboards.',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        icon: Shield,
        title: 'Maintenance & Support',
        desc: 'Ongoing technical support, security updates, and system maintenance to keep your software running smoothly.',
        gradient: 'from-rose-500 to-pink-500',
    },
]

export default function Services() {
    return (
        <section id="services" className="section-padding">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
                        Our Services
                    </span>
                    <h2 className="section-title mb-4">
                        Solutions That Power{' '}
                        <span className="gradient-text">Your Success</span>
                    </h2>
                    <p className="section-subtitle">
                        From concept to deployment, we deliver comprehensive digital solutions
                        tailored to your unique business requirements.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative glass-card rounded-2xl p-8 overflow-hidden"
                        >
                            {/* Gradient glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`relative inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="h-7 w-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="relative text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="relative text-slate-400 mb-6 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* Learn More Link */}
                            <motion.a
                                href="#contact"
                                className="relative inline-flex items-center gap-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors"
                            >
                                Learn More
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
