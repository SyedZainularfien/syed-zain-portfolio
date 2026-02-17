import { PORTFOLIO_DATA } from "@/data";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-brand opacity-5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center z-10 relative">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gradient mb-2">Syed Zain-ul-Arfien</h3>
                    <p className="text-gray-400 text-sm">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex space-x-6 mb-6 md:mb-0">
                    {PORTFOLIO_DATA.hero.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-transform hover:-translate-y-1 text-xl"
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
