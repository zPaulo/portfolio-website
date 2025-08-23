import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ProjectsContainer = styled.section`
    padding: 40px 5% 120px 5%;
    background-color: ${colors.background};
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 30px 5% 80px 5%;
    }
`;

export const ProjectsHeader = styled.div`
    text-align: center;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
`;

export const ProjectsTitle = styled.h2`
    color: ${colors.whiteText};
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 20px 0;
    line-height: 1.2;

    span {
        color: ${colors.primary};
        position: relative;
        
        &::before {
            content: '✦';
            position: absolute;
            left: -30px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            color: ${colors.primary};
        }
        
        &::after {
            content: '↗';
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            color: ${colors.primary};
        }
    }

    @media (max-width: 768px) {
        font-size: 36px;
        
        span {
            &::before,
            &::after {
                display: none;
            }
        }
    }
`;

export const ProjectsSubtitle = styled.p`
    color: ${colors.whiteMuted};
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
        font-size: 14px;
        max-width: 100%;
    }
`;

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 15px;
        margin-bottom: 40px;
    }
`;

export const CategoryButton = styled.button<{ $active?: boolean }>`
    background-color: ${({ $active }) => $active ? colors.primary : 'transparent'};
    color: ${({ $active }) => $active ? colors.white : colors.whiteMuted};
    border: 2px solid ${({ $active }) => $active ? colors.primary : colors.whiteBorder};
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
        border-color: ${colors.primary};
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 13px;
    }
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 320px));
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
        gap: 25px;
        padding: 0 10px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0;
    }
`;

export const ProjectCard = styled.div`
    background-color: ${colors.backgroundDarker};
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid ${colors.whiteBorder};
    width: 320px;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const ProjectImage = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.3s ease;
    }
    
    &:hover img {
        transform: scale(1.05);
    }
`;

export const ProjectContent = styled.div`
    padding: 24px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const ProjectTitle = styled.h3`
    color: ${colors.whiteText};
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 12px 0;
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const TechTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
`;

export const TechTag = styled.span`
    background-color: ${colors.primary}20;
    color: ${colors.primary};
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid ${colors.primary}40;
`;

export const ProjectDescription = styled.p`
    color: ${colors.whiteMuted};
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 20px 0;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const ViewMoreButton = styled.button`
    background: none;
    border: none;
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    transition: color 0.3s ease;
    text-decoration: underline;
    
    &:hover {
        color: ${colors.primaryHover};
    }
`;

export const SeeMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
`;

export const SeeMoreButton = styled.button`
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px ${colors.primary}40;
    
    &:hover {
        background-color: ${colors.primaryHover};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px ${colors.primary}60;
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 12px 30px;
        font-size: 14px;
    }
`;
