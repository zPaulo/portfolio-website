import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const LanguageButtonContainer = styled.div`
  display: flex;
  background: ${colors.backgroundDarker};
  border-radius: 20px;
  padding: 2px;
  gap: 2px;
`;

export const LanguageButton = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? colors.primary : 'transparent'};
  color: ${props => props.$isActive ? colors.white : colors.whiteMuted};
  border: none;
  padding: 6px 12px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isActive ? colors.primary : colors.whiteHover};
  }
`;
