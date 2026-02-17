import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from "react-icons/si";

export const PORTFOLIO_DATA = {
    hero: {
        name: "Syed Zain-ul-Arfien",
        role: "Frontend Engineer",
        tagline: "Building high-performance, pixel-perfect, and scalable web experiences.",
        socials: [
            { name: "GitHub", icon: FaGithub, link: "https://github.com/syedzainularfien" },
            { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/syed-zain-ul-arfien" }, // Placeholder link
            { name: "Fiverr", icon: SiFiverr, link: "https://www.fiverr.com/syedzainularfien" },
            { name: "Email", icon: FaEnvelope, link: "mailto:contact@syedzainularfien.com" },
        ]
    },
    about: {
        summary: "I am a passionate Frontend Engineer with over 3 years of experience in building modern web applications. I specialize in Next.js, React, and Tailwind CSS, focusing on performance, accessibility, and clean code. My goal is to deliver seamless user experiences that drive business growth.",
        experienceYears: "3+",
        projectsDelivered: "20+",
        optimizationScore: "95+"
    },
    skills: [
        {
            category: "Languages & Frameworks",
            items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3"]
        },
        {
            category: "Styling & UI",
            items: ["Tailwind CSS", "Material UI", "Framer Motion", "GSAP", "Styled Components"]
        },
        {
            category: "State & Data",
            items: ["Redux Toolkit", "Context API", "TanStack Query", "REST APIs"]
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "GitHub", "Vercel", "Webpack", "Vite", "Figma"]
        }
    ],
    projects: [
        {
            title: "Blockmed",
            description: "A secure Blockchain Health-Tech Platform ensuring data integrity and patient privacy.",
            techStack: ["Next.js", "Blockchain", "Tailwind CSS"],
            liveLink: "#",
            githubLink: "#",
            featured: true
        },
        {
            title: "INFIN Global",
            description: "Real World Asset (RWA) Investment Platform bridging traditional finance with DeFi.",
            techStack: ["React", "Web3.js", "Node.js"],
            liveLink: "#",
            githubLink: "#",
            featured: true
        },
        {
            title: "Golden Year",
            description: "An exclusive Ethereum NFT platform for digital art collectors.",
            techStack: ["Next.js", "Solidity", "Ethers.js"],
            liveLink: "#",
            githubLink: "#",
            featured: true
        },
        {
            title: "PawPlayLove",
            description: "A social platform connecting pet owners with services and community.",
            techStack: ["React", "Firebase", "Redux"],
            liveLink: "#",
            githubLink: "#",
            featured: true
        }
    ],
    services: [
        {
            title: "Frontend Development",
            description: "Building responsive, interactive, and modern user interfaces using React and Next.js."
        },
        {
            title: "Performance Optimization",
            description: "Optimizing web apps for speed, accessibility, and SEO (Lighthouse 95+ scores)."
        },
        {
            title: "API Integration",
            description: "Seamlessly integrating RESTful APIs and GraphQL for dynamic data handling."
        },
        {
            title: "Web3 Integration",
            description: "Connecting frontend applications with Blockchain smart contracts."
        }
    ],
    experience: [
        {
            role: "Frontend Engineer",
            company: "Tech Solutions Inc.",
            duration: "2023 - Present",
            description: "Leading the frontend team, migrating legacy apps to Next.js, and improving site performance."
        },
        {
            role: "React Developer",
            company: "Creative Studio",
            duration: "2021 - 2023",
            description: "Developed client websites, implemented complex animations, and ensured cross-browser compatibility."
        }
    ],
    testimonials: [
        {
            name: "John Doe",
            role: "CEO, TechStart",
            text: "Syed is an exceptional developer. His attention to detail and commitment to quality are unmatched."
        },
        {
            name: "Jane Smith",
            role: "Product Manager",
            text: "Great communication and fast delivery. The website turned out better than we imagined!"
        }
    ],
    contact: {
        email: "contact@syedzainularfien.com",
        availability: "Available for new projects"
    }
};
