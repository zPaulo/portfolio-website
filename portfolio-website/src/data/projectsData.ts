export interface Project {
    id: number;
    title: string;
    description: {
        pt: string;
        en: string;
    };
    image: string;
    category: string;
    technologies: string[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Finance Landing Page",
        description: {
            pt: "Uma landing page de finanças limpa e moderna, projetada para destacar recursos financeiros essenciais e fornecer confiança ao usuário em transações globais.",
            en: "A clean, modern finance landing page concept designed to highlight key financial features and provide user trust global transactions."
        },
        image: "/project-finance.jpg",
        category: "web",
        technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Real Estate UI Design",
        description: {
            pt: "Wire Dashboard é um conceito moderno e intuitivo de UI para imóveis, projetado para dar aos usuários uma visão abrangente e acesso a listagens de propriedades.",
            en: "Wire Dashboard is a modern and intuitive real estate UI concept designed to give users a comprehensive overview and access to property listings."
        },
        image: "/project-realestate.jpg",
        category: "web",
        technologies: ["Figma", "UI/UX", "Web Design"]
    },
    {
        id: 3,
        title: "Food delivery - Mobile app",
        description: {
            pt: "Este aplicativo móvel foi projetado para fornecer uma experiência de pedido de comida perfeita e intuitiva, conectando usuários aos seus restaurantes locais favoritos.",
            en: "This mobile app is designed to provide a seamless and intuitive food ordering experience, connecting users with their favorite local restaurants."
        },
        image: "/project-food.jpg",
        category: "mobile",
        technologies: ["React Native", "Node.js", "MongoDB"]
    },
    {
        id: 4,
        title: "Beauty Product eCommerce App",
        description: {
            pt: "Beauty Bliss é uma plataforma de eCommerce inovadora projetada para oferecer uma experiência de compra perfeita para entusiastas da beleza.",
            en: "Beauty Bliss is an innovative eCommerce platform designed to offer a seamless shopping experience for beauty enthusiasts. Our app."
        },
        image: "/project-beauty.jpg",
        category: "mobile",
        technologies: ["Flutter", "Firebase", "Stripe"]
    },
    {
        id: 5,
        title: "Yoga Website Design",
        description: {
            pt: "Explore este conceito sereno e amigável de design de site de yoga, misturando estética moderna com uma atmosfera acolhedora. O layout destaca recursos essenciais.",
            en: "Explore this serene and user-friendly yoga website design concept, blending modern aesthetics with an inviting vibe. The layout highlights essential features."
        },
        image: "/project-yoga.jpg",
        category: "web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 6,
        title: "Dashboard | SaaS Design",
        description: {
            pt: "Aqui está um design novo para a plataforma de aprendizagem Deepsho - um dashboard elegante e intuitivo feito sob medida para tutores. Meu foco foi criar uma interface amigável.",
            en: "Here's a fresh design for the Deepsho learning platform - a sleek and intuitive dashboard tailored for tutors. My focus was to create a user-friendly."
        },
        image: "/project-dashboard.jpg",
        category: "dashboard",
        technologies: ["React", "Chart.js", "Material-UI"]
    },
    {
        id: 7,
        title: "Travel Mobile App",
        description: {
            pt: "Travel Mobile App é uma aplicação amigável e intuitiva projetada para melhorar suas experiências de viagem. Com recursos como planejamento de itinerário e atualizações em tempo real.",
            en: "Travel Mobile App is a user-friendly and intuitive application designed to enhance your travel experiences. With features like itinerary planning, real-time."
        },
        image: "/project-travel.jpg",
        category: "mobile",
        technologies: ["React Native", "Redux", "API Integration"]
    },
    {
        id: 8,
        title: "RentAbout - Recycled Goods...",
        description: {
            pt: "Estamos animados em compartilhar o design para a plataforma de eCommerce RentAbout dedicada à sustentabilidade e reciclagem! Esta plataforma permite aos usuários.",
            en: "We excited to share the design for RentAbout eCommerce platform dedicated to sustainability and recycling! This platform allows users."
        },
        image: "/project-rent.jpg",
        category: "web",
        technologies: ["Next.js", "PostgreSQL", "Prisma"]
    },
    {
        id: 9,
        title: "Brand Identity Design",
        description: {
            pt: "Pacote completo de identidade de marca incluindo design de logotipo, paleta de cores, tipografia e diretrizes de marca para uma startup de tecnologia moderna.",
            en: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a modern tech startup."
        },
        image: "/project-brand.jpg",
        category: "branding",
        technologies: ["Illustrator", "Photoshop", "Brand Design"]
    },
    {
        id: 10,
        title: "E-learning Dashboard",
        description: {
            pt: "Dashboard educacional moderno com análises, gerenciamento de cursos e recursos de acompanhamento do progresso do aluno para plataformas de aprendizado online.",
            en: "Modern educational dashboard with analytics, course management, and student progress tracking features for online learning platforms."
        },
        image: "/project-elearning.jpg",
        category: "dashboard",
        technologies: ["Vue.js", "D3.js", "Laravel"]
    },
    {
        id: 11,
        title: "Social Media App",
        description: {
            pt: "Uma aplicação de mídia social moderna com mensagens em tempo real, compartilhamento de stories e controles avançados de privacidade para uma experiência do usuário aprimorada.",
            en: "A modern social media application with real-time messaging, story sharing, and advanced privacy controls for enhanced user experience."
        },
        image: "/project-social.jpg",
        category: "mobile",
        technologies: ["React Native", "Socket.io", "Express"]
    },
    {
        id: 12,
        title: "E-commerce Platform",
        description: {
            pt: "Solução completa de e-commerce com filtragem avançada, integração de pagamentos e gerenciamento de inventário para negócios online modernos.",
            en: "Complete e-commerce solution with advanced filtering, payment integration, and inventory management for modern online businesses."
        },
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
