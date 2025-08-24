import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(18, 30, 40, 0.95);
    backdrop-filter: blur(10px);
    justify-content: space-between;
    padding: 0px 40px;
    z-index: 1000;
    box-sizing: border-box;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        padding: 0px 20px;
        height: 72px;
    }
`;

export const Logo = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${colors.whiteText};
    letter-spacing: -0.5px;
    
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 18px;
    align-items: center;
    margin-left: 0;
    position: relative;
    left: -50px;

    @media screen and (max-width: 900px) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
    }
`;

export const NavItem = styled.button`
    text-decoration: none;
    font-size: 0.95rem;
    color: ${colors.whiteTransparent};
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 10px 16px;
    position: relative;
    letter-spacing: 0.3px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
    
    &:hover {
        color: ${colors.primary};
    }
    
    &:focus {
        outline: none;
        color: ${colors.primary};
    }
    
    &:active {
        outline: none;
        transform: scale(0.98);
    }
`;

export const MenuToggle = styled.button<{ $isOpen: boolean }>`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    position: relative;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${colors.whiteHover};
    }

    @media (max-width: 900px) {
        display: flex; /* Mostra o botão hambúrguer no mobile */
    }

    span {
        display: block;
        height: 3px;
        width: 24px;
        background-color: ${colors.whiteText};
        margin: 2px 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: center;
        border-radius: 2px;
    }

    /* Animação do menu hambúrguer para X mais suave */
    ${({ $isOpen }) => $isOpen && `
        span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        span:nth-child(2) {
            opacity: 0;
            transform: scale(0);
        }
        span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `}
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
    display: none;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: ${colors.background};
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 40px;
    box-shadow: 0 4px 20px ${colors.backgroundBlur};
    transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease;
    z-index: 999;

    @media (max-width: 900px) {
        display: flex; 
    }

    @media (max-width: 768px) {
        top: 72px;
        padding: 20px;
    }

    ${NavItem} {
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px solid ${colors.whiteBorder};
        text-align: left;
        font-size: 1.1rem;
        background-color: transparent;
        display: block;
        
        &:last-of-type {
            border-bottom: 1px solid ${colors.whiteBorder};
        }

        &:hover {
            color: ${colors.primary};
        }
    }

    /* Espaçamento especial para o botão de idioma no mobile */
    > div:last-child {
        margin-top: 20px;
        align-self: center;
    }
`;