"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    const { testimonials } = PORTFOLIO_DATA;

    return (
        <SectionWrapper id="testimonials" className="bg-white/5 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Client <span className="text-gradient">Feedback</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-neutral-900 border border-white/10 relative"
                    >
                        <FaQuoteLeft className="text-4xl text-white/5 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />

                        <p className="text-gray-300 text-lg italic mb-6 relative z-10">
                            &quot;{testimonial.text}&quot;
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                                {testimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                <p className="text-xs text-primary">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
