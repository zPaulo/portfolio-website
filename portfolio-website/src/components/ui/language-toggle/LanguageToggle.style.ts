import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const LanguageToggleContainer = styled.div`
  position: relative;
  display: flex;
  background: ${colors.backgroundDarker};
  border-radius: 22px;
  padding: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const SliderIndicator = styled.div<{ $language: 'pt' | 'en' }>`
  position: absolute;
  top: 3px;
  left: ${props => props.$language === 'pt' ? '3px' : 'calc(50% + 1px)'};
  width: calc(50% - 4px);
  height: calc(100% - 6px);
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryHover});
  border-radius: 19px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 6px rgba(43, 123, 185, 0.3);
  z-index: 1;
`;

export const LanguageOption = styled.button<{ $isActive: boolean }>`
  position: relative;
  background: transparent;
  color: ${props => props.$isActive ? colors.white : colors.whiteMuted};
  border: none;
  padding: 8px 14px;
  border-radius: 19px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  font-family: inherit;
  letter-spacing: 0.5px;
  min-width: 36px;
  outline: none;
  
  &:hover {
    color: ${props => props.$isActive ? colors.white : colors.whiteText};
    transform: ${props => props.$isActive ? 'none' : 'scale(1.05)'};
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    transform: scale(0.95);
  }
`;
