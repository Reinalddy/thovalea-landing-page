// app/components/sections/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'
import { Code, Smartphone, Cloud, Zap } from 'lucide-react'

const services = [
    {
        icon: <Code className="w-7 h-7" />,
        title: 'Custom Software Development',
        desc: 'We design and build custom web and system applications tailored to your operational needs.',
    },
    {
        icon: <Smartphone className="w-7 h-7" />,
        title: 'Mobile Application Development',
        desc: 'User-focused mobile applications with performance, scalability, and usability in mind.',
    },
    {
        icon: <Cloud className="w-7 h-7" />,
        title: 'Cloud & Infrastructure',
        desc: 'Cloud-ready systems, deployment strategy, and scalable infrastructure solutions.',
    },
    {
        icon: <Zap className="w-7 h-7" />,
        title: 'Automation & Optimization',
        desc: 'Improve efficiency by automating workflows and optimizing existing systems.',
    },
]

export default function Services() {
    return (
        <section id="services" className="py-32 px-6">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16 text-center text-4xl font-bold"
                >
                    Our Services
                </motion.h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -6 }}
                            className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 hover:border-indigo-500/40 hover:shadow-xl transition"
                        >
                            <div className="mb-4 text-indigo-400">{s.icon}</div>
                            <h3 className="text-lg font-semibold">{s.title}</h3>
                            <p className="mt-3 text-sm text-slate-400">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
