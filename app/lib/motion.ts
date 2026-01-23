// app/lib/motion.ts
import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
}
