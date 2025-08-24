import { useState } from "react";
import {
    ProjectsContainer,
    ProjectsHeader,
    ProjectsTitle,
    ProjectsSubtitle,
    CategoriesContainer,
    CategoryButton,
    ProjectsGrid,
    ProjectCard,
    ProjectImage,
    ProjectContent,
    ProjectTitle,
    TechTags,
    TechTag,
    ProjectDescription,
    ViewMoreButton,
    SeeMoreContainer,
    SeeMoreButton
} from "./Projects.style";
import { projectsData, categories } from "../../../data/projectsData";
import { useLanguage } from '../../../contexts/LanguageContext';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [showAllProjects, setShowAllProjects] = useState(false);
    const { t, language } = useLanguage();

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 8);
    const hasMoreProjects = filteredProjects.length > 8;

    const handleCategoryChange = (categoryId: string) => {
        setActiveCategory(categoryId);
        setShowAllProjects(false); // Reset para mostrar apenas 8 projetos ao trocar categoria
    };

    const handleSeeMore = () => {
        setShowAllProjects(true);
    };

    return (
        <ProjectsContainer>
            <ProjectsHeader>
                <ProjectsTitle>
                    {t('projects.title')}
                </ProjectsTitle>
                <ProjectsSubtitle>
                    {t('projects.description')}
                </ProjectsSubtitle>
            </ProjectsHeader>

            <CategoriesContainer>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $active={activeCategory === category.id}
                        onClick={() => handleCategoryChange(category.id)}
                    >
                        {category.label}
                    </CategoryButton>
                ))}
            </CategoriesContainer>

            <ProjectsGrid>
                {projectsToShow.map((project) => (
                    <ProjectCard key={project.id}>
                        <ProjectImage>
                            <img src={project.image} alt={project.title} />
                        </ProjectImage>
                        <ProjectContent>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <TechTags>
                                {project.technologies.map((tech, index) => (
                                    <TechTag key={index}>{tech}</TechTag>
                                ))}
                            </TechTags>
                            <ProjectDescription>{project.description[language]}</ProjectDescription>
                            <ViewMoreButton
                                onClick={() => window.open(project.url, '_blank')}
                            >
                                {t('projects.viewProject')}
                            </ViewMoreButton>
                        </ProjectContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>

            {hasMoreProjects && !showAllProjects && (
                <SeeMoreContainer>
                    <SeeMoreButton onClick={handleSeeMore}>
                        {t('projects.seeMore')}
                    </SeeMoreButton>
                </SeeMoreContainer>
            )}
        </ProjectsContainer>
    );
};

export default Projects;
