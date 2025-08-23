import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContactsContainer = styled.section`
    background-color: ${colors.backgroundDarker};
    width: 100%;
    padding: 60px 0;
    border-top: 1px solid ${colors.whiteBorder};
    
    @media (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const ContactsContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 0 5%;
    
    @media (max-width: 1200px) {
        gap: 45px;
    }
    
    @media (max-width: 1024px) {
        gap: 35px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
    
    @media (max-width: 480px) {
        gap: 25px;
    }
`;

export const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: ${colors.whiteText};
    transition: all 0.3s ease;
    padding: 12px 20px;
    border-radius: 8px;
    position: relative;
    
    &:hover {
        color: ${colors.primary};
        background-color: ${colors.whiteHover};
        transform: translateY(-2px);
    }
    
    &:hover svg {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        justify-content: center;
        padding: 15px 25px;
        width: 200px;
        border: 1px solid ${colors.whiteBorder};
        
        &:hover {
            border-color: ${colors.primary};
        }
    }
`;

export const ContactIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    
    svg {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
    }
`;

export const ContactText = styled.span`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;
