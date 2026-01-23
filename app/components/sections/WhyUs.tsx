// app/components/sections/WhyUs.tsx
'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'

const items: [string, string][] = [
    ['Proven Expertise', 'Experienced developers with strong technical foundation'],
    ['Structured Process', 'Clear planning, development, and delivery stages'],
    ['Long-Term Partnership', 'Support beyond launch and continuous improvement'],
]

export default function WhyUs() {
    return (
        <section id="why" className="bg-slate-900/60 py-32 px-6">
            <div className="mx-auto max-w-6xl text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-4xl font-bold"
                >
                    Why Choose Thovalea
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-6 text-slate-400"
                >
                    We prioritize clarity, scalability, and long-term value.
                </motion.p>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {items.map(([title, desc], i) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8"
                        >
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="mt-3 text-slate-400">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
