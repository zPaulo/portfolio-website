export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Finance Landing Page",
        description: "A clean, modern finance landing page concept designed to highlight key financial features and provide user trust global transactions.",
        image: "/project-finance.jpg",
        category: "web",
        technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Real Estate UI Design",
        description: "Wire Dashboard is a modern and intuitive real estate UI concept designed to give users a comprehensive overview and access to property listings.",
        image: "/project-realestate.jpg",
        category: "web",
        technologies: ["Figma", "UI/UX", "Web Design"]
    },
    {
        id: 3,
        title: "Food delivery - Mobile app",
        description: "This mobile app is designed to provide a seamless and intuitive food ordering experience, connecting users with their favorite local restaurants.",
        image: "/project-food.jpg",
        category: "mobile",
        technologies: ["React Native", "Node.js", "MongoDB"]
    },
    {
        id: 4,
        title: "Beauty Product eCommerce App",
        description: "Beauty Bliss is an innovative eCommerce platform designed to offer a seamless shopping experience for beauty enthusiasts. Our app.",
        image: "/project-beauty.jpg",
        category: "mobile",
        technologies: ["Flutter", "Firebase", "Stripe"]
    },
    {
        id: 5,
        title: "Yoga Website Design",
        description: "Explore this serene and user-friendly yoga website design concept, blending modern aesthetics with an inviting vibe. The layout highlights essential features.",
        image: "/project-yoga.jpg",
        category: "web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 6,
        title: "Dashboard | SaaS Design",
        description: "Here's a fresh design for the Deepsho learning platform - a sleek and intuitive dashboard tailored for tutors. My focus was to create a user-friendly.",
        image: "/project-dashboard.jpg",
        category: "dashboard",
        technologies: ["React", "Chart.js", "Material-UI"]
    },
    {
        id: 7,
        title: "Travel Mobile App",
        description: "Travel Mobile App is a user-friendly and intuitive application designed to enhance your travel experiences. With features like itinerary planning, real-time.",
        image: "/project-travel.jpg",
        category: "mobile",
        technologies: ["React Native", "Redux", "API Integration"]
    },
    {
        id: 8,
        title: "RentAbout - Recycled Goods...",
        description: "We excited to share the design for RentAbout eCommerce platform dedicated to sustainability and recycling! This platform allows users.",
        image: "/project-rent.jpg",
        category: "web",
        technologies: ["Next.js", "PostgreSQL", "Prisma"]
    },
    {
        id: 9,
        title: "Brand Identity Design",
        description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a modern tech startup.",
        image: "/project-brand.jpg",
        category: "branding",
        technologies: ["Illustrator", "Photoshop", "Brand Design"]
    },
    {
        id: 10,
        title: "E-learning Dashboard",
        description: "Modern educational dashboard with analytics, course management, and student progress tracking features for online learning platforms.",
        image: "/project-elearning.jpg",
        category: "dashboard",
        technologies: ["Vue.js", "D3.js", "Laravel"]
    },
    {
        id: 11,
        title: "Social Media App",
        description: "A modern social media application with real-time messaging, story sharing, and advanced privacy controls for enhanced user experience.",
        image: "/project-social.jpg",
        category: "mobile",
        technologies: ["React Native", "Socket.io", "Express"]
    },
    {
        id: 12,
        title: "E-commerce Platform",
        description: "Complete e-commerce solution with advanced filtering, payment integration, and inventory management for modern online businesses.",
        image: "/project-ecommerce.jpg",
        category: "web",
        technologies: ["Next.js", "Stripe", "MongoDB"]
    }
];

export const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web design' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'branding', label: 'Branding' }
];
