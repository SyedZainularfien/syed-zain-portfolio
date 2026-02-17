"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Terminal from "@/components/ui/Terminal";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
    const { contact } = PORTFOLIO_DATA;
    const [logs, setLogs] = useState<string[]>([]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Name must be at least 2 characters")
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            message: Yup.string()
                .min(10, "Message must be at least 10 characters")
                .required("Message is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLogs([]);

            const scriptSequence = [
                "Initializing secure connection...",
                "Encrypting payload...",
                "Sending data to server...",
                "Running validation checks...",
                "Data verified successfully.",
                "Sending confirmation email...",
                "Message sent successfully! 🎉"
            ];

            for (let i = 0; i < scriptSequence.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 800));
                setLogs(prev => [...prev, scriptSequence[i]]);
            }

            await new Promise(resolve => setTimeout(resolve, 2000));
            resetForm();
            // Optional: clear logs after a delay or keep them
        },
    });

    return (
        <SectionWrapper id="contact">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Get In <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-gray-300 text-lg">
                    Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email Me At</p>
                                <a href={`mailto:${contact.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                                    {contact.email}
                                </a>
                            </div>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium">
                            ● {contact.availability}
                        </div>
                    </div>

                    {/* Terminal Display */}
                    <Terminal logs={logs} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-neutral-900 p-8 rounded-2xl border border-white/10"
                >
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...formik.getFieldProps('name')}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-primary transition-colors text-white ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-white/10'}`}
                                placeholder="John Doe"
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...formik.getFieldProps('email')}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-primary transition-colors text-white ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-white/10'}`}
                                placeholder="john@example.com"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                {...formik.getFieldProps('message')}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-primary transition-colors text-white ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-white/10'}`}
                                placeholder="Tell me about your project..."
                            ></textarea>
                            {formik.touched.message && formik.errors.message && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={formik.isSubmitting || !formik.isValid}
                            className={`w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 ${formik.isSubmitting || !formik.isValid ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {formik.isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className={formik.isSubmitting ? 'animate-bounce' : ''} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
