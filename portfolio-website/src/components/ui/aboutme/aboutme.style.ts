import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const AboutmeContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 20px 5% 60px 5%;
    background-color: ${colors.background};
    width: 100%;
    min-height: 85vh;
    box-sizing: border-box;
    margin-top: -40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 60px;
        padding: 80px 5% 40px 5%;
        text-align: center;
        min-height: auto;
        margin-top: 0;
    }
`;

export const ServicesColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    flex: 1;
    position: relative;

    /* Linha vertical principal */
    &::before {
        content: '';
        position: absolute;
        left: 14px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(
            to bottom,
            transparent 0%,
            ${colors.primary} 10%,
            ${colors.primary} 90%,
            transparent 100%
        );
        border-radius: 2px;
        z-index: 1;
    }

    @media (max-width: 768px) {
        gap: 40px;
        
        /* Esconder linha vertical no mobile */
        &::before {
            display: none;
        }
    }
`;

export const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    position: relative;
    padding-left: 50px;
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        left: 10.2px;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${colors.primary};
        z-index: 3;
        box-shadow: 0 0 0 4px ${colors.background}, 0 0 8px ${colors.primary}44;
    }

    /* Primeira bolinha */
    &:nth-child(1)::before {
        animation: pulseDot 3s ease-in-out infinite;
        animation-delay: 0s;
    }

    /* Segunda bolinha */
    &:nth-child(2)::before {
        animation: pulseDot 3s ease-in-out infinite;
        animation-delay: 1s;
    }

    /* Terceira bolinha */
    &:nth-child(3)::before {
        animation: pulseDot 3s ease-in-out infinite;
        animation-delay: 2s;
    }

    @keyframes pulseDot {
        0%, 66.67% {
            transform: translateY(-50%) scale(1);
            box-shadow: 0 0 0 4px ${colors.background}, 0 0 8px ${colors.primary}44;
        }
        33.33% {
            transform: translateY(-50%) scale(1.4);
            box-shadow: 0 0 0 4px ${colors.background}, 0 0 20px ${colors.primary}88, 0 0 30px ${colors.primary}55;
        }
    }

    @media (max-width: 768px) {
        padding-left: 0;
        justify-content: center;
        
        /* Esconder bolinhas no mobile */
        &::before {
            display: none;
        }
        
        /* Parar animações no mobile */
        &:nth-child(1)::before,
        &:nth-child(2)::before,
        &:nth-child(3)::before {
            animation: none;
        }
    }
`;

export const ServiceIcon = styled.div`
    width: 56px;
    height: 56px;
    border: 2px solid ${colors.whiteBorder};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.whiteText};
    
    svg {
        width: 28px;
        height: 28px;
    }
`;

export const ServiceText = styled.span`
    color: ${colors.whiteText};
    font-size: 20px;
    font-weight: 500;
`;

export const ContentColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

export const AboutTitle = styled.h2`
    color: ${colors.whiteText};
    font-size: 56px;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 42px;
    }
`;

export const AboutDescription = styled.p`
    color: ${colors.whiteText};
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
    max-width: 550px;

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 16px;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    gap: 70px;
    margin-top: 25px;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 50px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 35px;
    }
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StatNumber = styled.div`
    color: ${colors.whiteText};
    font-size: 42px;
    font-weight: 700;
    line-height: 1;

    span {
        color: ${colors.primary};
    }

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const StatLabel = styled.span`
    color: ${colors.whiteText};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

// Mantendo para compatibilidade, caso seja usado em outro lugar
export const AboutmeTextContainer = styled.header`
    background-color: ${colors.background};
    padding: 20px;
    border-radius: 8px;
`;