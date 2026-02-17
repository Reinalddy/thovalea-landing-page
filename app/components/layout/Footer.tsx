// app/components/layout/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/app/lib/motion'

const footerLinks = {
    company: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#contact' },
    ],
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'Cloud Solutions', href: '#services' },
        { label: 'Consulting', href: '#services' },
    ],
    resources: [
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#portfolio' },
        { label: 'Documentation', href: '#' },
        { label: 'FAQ', href: '#' },
    ],
}

const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-16">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
                >
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                                <Image
                                    src="/logo.png"
                                    alt="Thovalea Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight gradient-text">
                                Thovalea
                            </span>
                        </div>

                        <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                            Building reliable digital solutions for small businesses and growing organizations.
                            Let&apos;s transform your ideas into reality.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-slate-400">
                            <a href="mailto:hello@thovalea.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                                <Mail className="h-4 w-4 text-indigo-400" />
                                <span>hello@thovalea.com</span>
                                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                            </a>
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-indigo-400" />
                                <span>+62 123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-indigo-400" />
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources Links */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Thovalea. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex h-10 w-10 items-center justify-center rounded-lg glass hover:bg-indigo-500/20 transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="h-4 w-4 text-slate-400 hover:text-white transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
