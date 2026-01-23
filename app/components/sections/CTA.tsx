// app/components/sections/CTA.tsx
'use client'

import { motion } from 'framer-motion'

export default function CTA() {
    const handleContactClick = () =>  {
        window.location.href = 'mailto:reinalddaldy58@gmail.com';
    }
    return (
        <section id="contact" className="py-32 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
                <h2 className="text-4xl font-bold">
                    Ready to Start Your Project?
                </h2>

                <p className="mt-6 text-slate-400">
                    Let’s build reliable digital solutions together.
                </p>

                <button className="mt-10 rounded-full bg-indigo-500 px-10 py-4 font-semibold text-white hover:bg-indigo-400 transition" onClick={handleContactClick}>
                    Contact Thovalea
                </button>
            </motion.div>
        </section>
    )
}
