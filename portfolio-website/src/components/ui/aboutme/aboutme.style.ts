import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const AboutmeContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 80px 20px;
    background-color: ${colors.background};
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
        padding: 50px 20px;
        text-align: center;
    }
`;

export const ServicesColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    flex: 1;
`;

export const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 12px;
        bottom: -20px;
        width: 2px;
        height: 20px;
        background-color: ${colors.primary};
    }

    &::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${colors.primary};
        z-index: 2;
    }
`;

export const ServiceIcon = styled.div`
    width: 48px;
    height: 48px;
    border: 2px solid ${colors.whiteBorder};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.whiteText};
    margin-left: 30px;
    
    svg {
        width: 24px;
        height: 24px;
    }
`;

export const ServiceText = styled.span`
    color: ${colors.whiteText};
    font-size: 18px;
    font-weight: 500;
`;

export const ContentColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const AboutTitle = styled.h2`
    color: ${colors.whiteText};
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

export const AboutDescription = styled.p`
    color: ${colors.whiteText};
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    max-width: 500px;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    gap: 60px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    @media (max-width: 480px) {
        flex-direction: row;
        justify-content: space-around;
        gap: 20px;
    }
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StatNumber = styled.div`
    color: ${colors.whiteText};
    font-size: 36px;
    font-weight: 700;
    line-height: 1;

    span {
        color: ${colors.primary};
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const StatLabel = styled.span`
    color: ${colors.whiteText};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
`;

// Mantendo para compatibilidade, caso seja usado em outro lugar
export const AboutmeTextContainer = styled.header`
    background-color: ${colors.background};
    padding: 20px;
    border-radius: 8px;
`;