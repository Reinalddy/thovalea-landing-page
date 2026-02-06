// app/components/sections/Portfolio.tsx
'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp } from '@/app/lib/motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'E-Commerce Platform',
        desc: 'Full-featured online store with inventory management, payment processing, and real-time analytics.',
        image: '/api/placeholder/600/400',
        tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        gradient: 'from-indigo-500 to-violet-500',
    },
    {
        title: 'Healthcare Management System',
        desc: 'Comprehensive patient management and appointment scheduling system for medical clinics.',
        image: '/api/placeholder/600/400',
        tags: ['React', 'Laravel', 'MySQL', 'AWS'],
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        title: 'Logistics Tracking App',
        desc: 'Real-time shipment tracking and fleet management mobile application with GPS integration.',
        image: '/api/placeholder/600/400',
        tags: ['Flutter', 'Firebase', 'Google Maps', 'Node.js'],
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        title: 'HR Management Platform',
        desc: 'Employee management, payroll processing, and performance tracking solution.',
        image: '/api/placeholder/600/400',
        tags: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
        gradient: 'from-amber-500 to-orange-500',
    },
]

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-padding">
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
                        Our Work
                    </span>
                    <h2 className="section-title mb-4">
                        Featured{' '}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Explore some of our recent work and see how we&apos;ve helped businesses
                        transform their operations through technology.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={staggerItem}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative glass-card rounded-2xl overflow-hidden"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`relative h-64 bg-gradient-to-br ${project.gradient} opacity-20`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

                                {/* Placeholder pattern */}
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute inset-0 bg-grid" />
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex h-12 w-12 items-center justify-center rounded-full glass"
                                    >
                                        <ExternalLink className="h-5 w-5 text-white" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex h-12 w-12 items-center justify-center rounded-full glass"
                                    >
                                        <Github className="h-5 w-5 text-white" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-400 border border-slate-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
