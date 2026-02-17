"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";

export default function Skills() {
    const { skills } = PORTFOLIO_DATA;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Technical <span className="text-gradient">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-2">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={item}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-primary hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
