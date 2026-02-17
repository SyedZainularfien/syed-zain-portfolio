"use client";

import { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 cursor-pointer bg-primary text-white rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
                    aria-label="Scroll to top"
                >
                    <FaArrowTurnUp size={20} />
                </button>
            )}
        </>
    );
}
