// Cores padronizadas do projeto
export const colors = {
    // Cores principais
    primary: '#ff6b35',        // Laranja principal
    white: '#FFFFFF',          // Branco puro
    background: '#121E28',     // Azul escuro de fundo
    backgroundDarker: '#17232D', // Azul ainda mais escuro para a barra de tecnologias

    // Variações de branco
    whiteText: '#FFFFFF',      // Branco para textos
    whiteMuted: '#48545E',     // Branco mais escuro para textos secundários
    whiteTransparent: 'rgba(255, 255, 255, 0.9)', // Branco semi-transparente
    whiteHover: 'rgba(255, 255, 255, 0.1)',       // Branco para hover
    whiteBorder: 'rgba(255, 255, 255, 0.08)',     // Branco para bordas

    // Variações do laranja
    primaryHover: '#e55a2b',   // Laranja mais escuro para hover
    primaryLight: '#ff7a4a',   // Laranja mais claro

    // Cores de fundo
    backgroundOverlay: 'rgba(0, 0, 0, 0.95)', // Overlay escuro
    backgroundBlur: 'rgba(0, 0, 0, 0.3)',     // Blur/sombra
} as const;

export type ColorKeys = keyof typeof colors;
