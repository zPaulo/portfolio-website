import { useState } from 'react'
import { HeaderContainer, Logo, Nav, NavItem, MenuToggle, MobileMenu } from "./header.style"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <HeaderContainer>
                <Logo>Paulo Arruda</Logo>

                {/* Menu desktop */}
                <Nav>
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#about">About</NavItem>
                    <NavItem href="#projects">Projects</NavItem>
                    <NavItem href="#contacts">Contacts</NavItem>
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
                <NavItem href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
                <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
                <NavItem href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavItem>
                <NavItem href="#contacts" onClick={() => setIsMenuOpen(false)}>Contacts</NavItem>
            </MobileMenu>
        </>
    )
}

export default Header