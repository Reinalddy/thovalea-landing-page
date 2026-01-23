// app/components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { fadeUp } from '@/app/lib/motion'

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 text-center">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
                <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
                    Digital Service Company
                    <span className="block text-slate-400">
                        Building Reliable Software Solutions
                    </span>
                </h1>

                <p className="mt-8 text-lg text-slate-400">
                    <strong>Thovalea</strong> is a technology service company specializing
                    in custom software development, system digitalization, and long-term
                    technical solutions for businesses and organizations.
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <button className="flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-4 font-semibold text-white hover:bg-indigo-400">
                        Start Your Project <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="rounded-full border border-slate-600 px-8 py-4 text-slate-200 hover:border-slate-400">
                        View Services
                    </button>
                </div>

                <ChevronDown className="mx-auto mt-20 h-7 w-7 animate-bounce text-slate-500" />
            </motion.div>
        </section>
    )
}
