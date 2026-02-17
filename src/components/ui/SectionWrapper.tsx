"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({ children, id, className = "", delay = 0.2 }: SectionWrapperProps) {
    return (
        <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
