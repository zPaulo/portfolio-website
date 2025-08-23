import { useState } from 'react'
import { HeaderContainer, Logo, Nav, NavItem, MenuToggle, MobileMenu } from "./header.style"
import { useLanguage } from '../../../contexts/LanguageContext'
import LanguageToggle from '../language-toggle/LanguageToggle'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useLanguage()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <HeaderContainer>
                <Logo>Paulo Arruda</Logo>

                {/* Menu desktop */}
                <Nav>
                    <NavItem href="#home">{t('header.home')}</NavItem>
                    <NavItem href="#about">{t('header.about')}</NavItem>
                    <NavItem href="#projects">{t('header.projects')}</NavItem>
                    <NavItem href="#contacts">{t('header.contacts')}</NavItem>
                    <LanguageToggle />
                </Nav>

                {/* Botão hambúrguer mobile */}
                <MenuToggle $isOpen={isMenuOpen} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuToggle>
            </HeaderContainer>

            {/* Menu mobile */}
            <MobileMenu $isOpen={isMenuOpen}>
                <NavItem href="#home" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</NavItem>
                <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</NavItem>
                <NavItem href="#projects" onClick={() => setIsMenuOpen(false)}>{t('header.projects')}</NavItem>
                <NavItem href="#contacts" onClick={() => setIsMenuOpen(false)}>{t('header.contacts')}</NavItem>
                <LanguageToggle />
            </MobileMenu>
        </>
    )
}

export default Header