"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function About() {
    const { summary, experienceYears, projectsDelivered, optimizationScore } = PORTFOLIO_DATA.about;

    return (
        <SectionWrapper id="about" className="bg-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            {summary}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-1 min-w-[140px] text-center">
                                <h3 className="text-3xl font-bold text-primary">{experienceYears}</h3>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-1 min-w-[140px] text-center">
                                <h3 className="text-3xl font-bold text-yellow-500">{projectsDelivered}</h3>
                                <p className="text-sm text-gray-400">Projects Delivered</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-1 min-w-[140px] text-center">
                                <h3 className="text-3xl font-bold text-accent">{optimizationScore}</h3>
                                <p className="text-sm text-gray-400">Optimization Score</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                            <FaDownload /> Download CV
                        </button>
                    </motion.div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <Image src='/syed-zain.png' alt="syed zain" width={450} height={600} className="rounded-lg" />
                </div>
            </div>
        </SectionWrapper>
    );
}
