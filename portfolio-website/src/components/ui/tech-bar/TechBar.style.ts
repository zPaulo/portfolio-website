import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const TechBarContainer = styled.section`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.backgroundDarker};
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    
    @media (max-width: 768px) {
        position: static;
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        padding: 1.5rem 0;
        margin-top: 2rem;
    }
`;

export const TechList = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    max-width: 1400px;
    width: 100%;
    padding: 0 2rem;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: 1200px) {
        gap: 2rem;
    }
    
    @media (max-width: 900px) {
        gap: 1.8rem;
        padding: 0 1rem;
    }
    
    @media (max-width: 700px) {
        gap: 1.5rem;
    }
    
    @media (max-width: 500px) {
        gap: 1.2rem;
        padding: 0 0.5rem;
    }
    
    @media (max-width: 400px) {
        gap: 1rem;
    }
`;

export const TechItem = styled.span<{ $delay: number }>`
    color: ${colors.whiteMuted};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: all 0.4s ease;
    white-space: nowrap;
    flex-shrink: 0;
    position: relative;
    
    /* Animação sequencial mais suave - uma por vez */
    animation: smoothAutoHover 20s infinite ease-in-out;
    animation-delay: ${props => props.$delay}s;
    animation-fill-mode: both;
    
    @keyframes smoothAutoHover {
        0%, 8%, 92%, 100% {
            color: ${colors.whiteMuted};
            transform: scale(1);
            opacity: 0.7;
        }
        10%, 15% {
            color: ${colors.primary};
            transform: scale(1.05);
            opacity: 1;
        }
    }
    
    &:hover {
        color: ${colors.primary} !important;
        transform: scale(1.05) !important;
        opacity: 1 !important;
        animation-play-state: paused;
    }
    
    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    
    @media (max-width: 900px) {
        font-size: 0.95rem;
        letter-spacing: 0.2px;
    }
    
    @media (max-width: 700px) {
        font-size: 1.1rem;
        
        @keyframes smoothAutoHover {
            0%, 8%, 92%, 100% {
                color: ${colors.whiteMuted};
                transform: scale(1);
                opacity: 0.7;
            }
            10%, 15% {
                color: ${colors.primary};
                transform: scale(1.03);
                opacity: 1;
            }
        }
    }
    
    @media (max-width: 500px) {
        font-size: 1rem;
        letter-spacing: 0.1px;
    }
    
    @media (max-width: 400px) {
        font-size: 0.95rem;
    }
`;
