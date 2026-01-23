// app/components/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/app/lib/motion'

export default function About() {
    return (
        <section id="about" className="bg-slate-900/60 py-32 px-6">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2"
            >
                <div>
                    <h2 className="text-4xl font-bold">About Thovalea</h2>
                    <p className="mt-6 text-slate-400 leading-relaxed">
                        Thovalea focuses on building digital systems that solve real
                        business problems. We work closely with our clients to understand
                        their workflows, challenges, and goals before designing solutions.
                    </p>
                    <p className="mt-4 text-slate-400 leading-relaxed">
                        Our mission is to deliver software that is clear, maintainable,
                        scalable, and ready to support long-term growth.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8">
                    <ul className="space-y-4 text-slate-300">
                        <li>✔ Custom & tailored development</li>
                        <li>✔ Business process digitalization</li>
                        <li>✔ Scalable system architecture</li>
                        <li>✔ Long-term support & maintenance</li>
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}
