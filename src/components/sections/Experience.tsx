"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";

export default function Experience() {
    const { experience } = PORTFOLIO_DATA;

    return (
        <SectionWrapper id="experience">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Work <span className="text-gradient">Experience</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col md:flex-row gap-4 md:gap-8 p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-colors relative"
                    >
                        {/* Timeline Line (Visual) */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-l-2xl opacity-50" />

                        <div className="md:w-1/3">
                            <h3 className="text-xl font-bold text-white">{job.company}</h3>
                            <p className="text-sm text-primary font-mono mt-1">{job.duration}</p>
                        </div>

                        <div className="md:w-2/3">
                            <h4 className="text-lg font-semibold mb-2">{job.role}</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {job.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
