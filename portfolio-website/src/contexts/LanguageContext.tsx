import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    // Função para obter tradução
    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Traduções
const translations = {
    pt: {
        header: {
            home: 'Home',
            about: 'Sobre',
            projects: 'Projetos',
            contacts: 'Contatos'
        },
        presentation: {
            hello: 'Olá',
            name: 'Eu sou Paulo Arruda',
            role: 'Analista de Dados',
            gotProject: 'Tem um projeto?',
            resume: 'Meu currículo'
        },
        aboutme: {
            title: 'Sobre mim',
            description: 'Sou um analista de dados apaixonado por transformar informações em insights valiosos. Com experiência em Python, SQL e ferramentas de visualização, ajudo empresas a tomar decisões baseadas em dados.',
            services: {
                analysis: 'Análise de Dados',
                visualization: 'Visualização',
                automation: 'Automação'
            },
            stats: {
                projects: 'Projetos Completados',
                economy: 'Economia do Cliente em Processos',
                experience: 'Anos de experiência'
            }
        },
        projects: {
            title: 'Projetos',
            description: 'Explore alguns dos meus projetos mais recentes e veja como transformo dados em soluções práticas.',
            categories: {
                all: 'Todos',
                analysis: 'Análise',
                dashboard: 'Dashboard',
                automation: 'Automação',
                web: 'Web',
                mobile: 'Mobile'
            },
            seeMore: 'Ver mais projetos',
            showLess: 'Ver menos',
            viewProject: 'Ver projeto'
        },
        contacts: {
            title: 'Contatos',
            description: 'Vamos trabalhar juntos! Entre em contato comigo através dessas plataformas.'
        }
    },
    en: {
        header: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contacts: 'Contacts'
        },
        presentation: {
            hello: 'Hello',
            name: "I'm Paulo Arruda",
            role: 'Data Analyst',
            gotProject: 'Got a project?',
            resume: 'My resume'
        },
        aboutme: {
            title: 'About me',
            description: 'I am a data analyst passionate about transforming information into valuable insights. With experience in Python, SQL and visualization tools, I help companies make data-driven decisions.',
            services: {
                analysis: 'Data Analysis',
                visualization: 'Visualization',
                automation: 'Automation'
            },
            stats: {
                projects: 'Completed Projects',
                economy: 'Client Economy Process',
                experience: 'Years of experience'
            }
        },
        projects: {
            title: 'Projects',
            description: 'Explore some of my latest projects and see how I transform data into practical solutions.',
            categories: {
                all: 'All',
                analysis: 'Analysis',
                dashboard: 'Dashboard',
                automation: 'Automation',
                web: 'Web',
                mobile: 'Mobile'
            },
            seeMore: 'See more projects',
            showLess: 'Show less',
            viewProject: 'View project'
        },
        contacts: {
            title: 'Contacts',
            description: "Let's work together! Get in touch with me through these platforms."
        }
    }
};
