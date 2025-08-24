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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const headerHeight = 80 // altura do header
            const elementPosition = element.offsetTop - headerHeight

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
        setIsMenuOpen(false)
    }

    return (
        <>
            <HeaderContainer>
                <Logo>Paulo Arruda</Logo>

                {/* Menu desktop */}
                <Nav>
                    <NavItem onClick={() => scrollToSection('home')}>{t('header.home')}</NavItem>
                    <NavItem onClick={() => scrollToSection('about')}>{t('header.about')}</NavItem>
                    <NavItem onClick={() => scrollToSection('projects')}>{t('header.projects')}</NavItem>
                    <NavItem onClick={() => scrollToSection('contacts')}>{t('header.contacts')}</NavItem>
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
                <NavItem onClick={() => scrollToSection('home')}>{t('header.home')}</NavItem>
                <NavItem onClick={() => scrollToSection('about')}>{t('header.about')}</NavItem>
                <NavItem onClick={() => scrollToSection('projects')}>{t('header.projects')}</NavItem>
                <NavItem onClick={() => scrollToSection('contacts')}>{t('header.contacts')}</NavItem>
                <LanguageToggle />
            </MobileMenu>
        </>
    )
}

export default Header