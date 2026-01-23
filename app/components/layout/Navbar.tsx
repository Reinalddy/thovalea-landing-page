// app/components/layout/Navbar.tsx
'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition ${scrolled
                    ? 'bg-slate-900/80 backdrop-blur border-b border-slate-800'
                    : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <span className="text-xl font-bold tracking-wide text-indigo-400">
                    Thovalea
                </span>
                <div className="hidden gap-8 text-sm text-slate-300 md:flex">
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#services" className="hover:text-white">Services</a>
                    <a href="#why" className="hover:text-white">Why Us</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </div>
                <button className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-400">
                    Get Started
                </button>
            </div>
        </nav>
    )
}
