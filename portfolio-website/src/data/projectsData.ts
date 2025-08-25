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
    url: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "PETR4 Dashboard Analytics",
        description: {
            pt: "Dashboard de Análise de indicadores financeiros fundamentáis para auxiliar na tomada de decisão em compra ou venda de ações, proporcionando uma visão clara e objetiva dos dados.",
            en: "Dashboard for analyzing fundamental financial indicators to assist in making buy or sell decisions, providing a clear and objective view of the data."
        },
        image: "/assets/images/petr4_dash.png",
        category: "dashboard",
        technologies: ["Power BI", "Python", "API"],
        url: "https://app.powerbi.com/view?r=eyJrIjoiMWI1YWYyNDMtMDJjZi00ZTE1LWFjM2YtYTc0MWJlMDE2ZWMzIiwidCI6ImE2Zjc0ZWZhLTM2NzQtNDQ5YS1hY2FlLWMwYTIzODYzNzUwNCJ9&pageName=ReportSectionb64099a2d14108a05925"
    },
    {
        id: 2,
        title: "API de Checklist",
        description: {
            pt: "API para gerenciamento de checklists de tarefas de usuários, permitindo criar, atualizar, excluir e visualizar tarefas de forma eficiente e organizada.",
            en: "API for managing user task checklists, enabling the creation, updating, deletion, and viewing of tasks in an efficient and organized manner."
        },
        image: "/assets/images/checklist_api.png",
        category: "Web Development",
        technologies: ["Python", "FastAPI", "DevOps", "PostgreSQL", "Pytest"],
        url: "https://github.com/zPaulo/checklist_api"
    },
    {
        id: 3,
        title: "Gestão de Contratos",
        description: {
            pt: "APP para gerenciamento de novos contratos de exportação com SLA por etapa, encorporando 8 setores da cadeia produtiva empresarial.",
            en: "APP for managing new export contracts with SLA by stage, incorporating 8 sectors of the business production chain."
        },
        image: "/assets/images/app_contratos.png",
        category: "Power Plataform",
        technologies: ["Power Apps", "Power Automate", "DevOps", "SQL Server"],
        url: "https://github.com/zPaulo"
    }
];

// Função para gerar categorias dinamicamente baseadas nos projetos
export const getCategories = () => {
    const projectCategories = [...new Set(projectsData.map(project => project.category))];

    const categoryLabels: { [key: string]: string } = {
        'automation': 'Automation',
        'data-engineering': 'Data Engineering',
        'dashboard': 'Dashboard',
        'api': 'API',
        'web': 'Web',
        'mobile': 'Mobile',
        'branding': 'Branding'
    };

    const dynamicCategories = projectCategories.map(category => ({
        id: category,
        label: categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)
    }));

    return [
        { id: 'all', label: 'All' },
        ...dynamicCategories
    ];
};

export const categories = getCategories();
