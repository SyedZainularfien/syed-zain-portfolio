"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
    const { projects } = PORTFOLIO_DATA;

    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
                    >
                        {/* Project Content */}
                        <div className="p-8 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <Link href={project.githubLink} className="text-gray-400 hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </Link>
                                    <Link href={project.liveLink} className="text-gray-400 hover:text-white transition-colors">
                                        <FaExternalLinkAlt size={18} />
                                    </Link>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
