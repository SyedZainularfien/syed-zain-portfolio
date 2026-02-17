"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaServer, FaLayerGroup } from "react-icons/fa";

const icons = [FaCode, FaRocket, FaServer, FaLayerGroup];

export default function Services() {
    const { services } = PORTFOLIO_DATA;

    return (
        <SectionWrapper id="services" className="bg-white/5 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                My <span className="text-gradient">Services</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.001 }}
                            className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Icon size={100} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-white">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
