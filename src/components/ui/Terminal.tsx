// src/components/ui/Terminal.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TerminalProps {
    logs: string[];
    className?: string;
}

export default function Terminal({ logs, className = "" }: TerminalProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full rounded-lg overflow-hidden bg-[#1e1e1e] font-mono text-sm shadow-xl border border-white/10 ${className}`}
        >
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="ml-auto text-xs text-gray-400">zsh — 80x24</div>
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="p-4 h-48 overflow-y-auto space-y-1 text-green-400"
            >
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-blue-400 mr-2">➜</span>
                        <span className="text-gray-400">~</span> {log}
                    </motion.div>
                ))}
                <div className="flex items-center">
                    <span className="text-blue-400 mr-2">➜</span>
                    <span className="text-gray-400 mr-2">~</span>
                    <span className="animate-pulse inline-block w-2 h-4 bg-gray-500 align-middle" />
                </div>
            </div>
        </motion.div>
    );
}