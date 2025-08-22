import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PresentationContainer = styled.section`
  margin-top: 80px; /* Compensando a altura do header fixo */
  padding: 2rem 5%; /* Reduzindo o padding horizontal */
  width: 100%;
  min-height: calc(100vh - 160px); /* Subtraindo header + espaço para techbar */
  background-color: ${colors.background};
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-top: 72px; /* Altura do header mobile */
    padding: 2rem 5%;
    min-height: calc(100vh - 200px);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;


export const PresentationTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex: 1;
    max-width: 600px;
    
    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        width: 100%;
        max-width: 100%;
        padding-bottom: 2rem;
    }
`;

export const PresentationTitle = styled.h1`
    font-size: 3.5rem;
    color: ${colors.whiteText};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const PresentationSubTitle = styled.h2`
    font-size: 3rem;
    color: ${colors.whiteText};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const PresentationDescription = styled.h3`
    font-size: 2.6rem;
    font-weight: normal;
    color: ${colors.whiteText};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    margin-bottom: 2rem;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        left: -80px;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
        height: 4px;
        background-color: ${colors.primary};
        
        @media (max-width: 768px) {
            left: 50%;
            top: -20px;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
        }
    }
    
    @media (max-width: 768px) {
        font-size: 2rem;
        margin-top: 30px;
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.6rem;
        margin-top: 25px;
    }
`;

export const OrangeDot = styled.span`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: ${colors.primary};
    border-radius: 10%;
    text-align: center;
    vertical-align: baseline;
    margin-left: 0.6em;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    margin-top: 2.5rem;
    
    @media (max-width: 768px) {
        gap: 1rem;
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    
    @media (max-width: 480px) {
        gap: 0.8rem;
        margin-top: 1.5rem;
    }
`;

export const PrimaryButton = styled.button`
    background-color: ${colors.primary};
    color: ${colors.whiteText};
    border: none;
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${colors.primaryHover};
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
        width: 200px;
    }
    
    @media (max-width: 480px) {
        width: 180px;
        padding: 0.7rem 1.3rem;
    }
`;

export const SecondaryButton = styled.button`
    background-color: transparent;
    color: ${colors.whiteText};
    border: 2px solid ${colors.whiteText};
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${colors.whiteText};
        color: ${colors.background};
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
        width: 200px;
    }
    
    @media (max-width: 480px) {
        width: 180px;
        padding: 0.7rem 1.3rem;
    }
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    height: 100%;
    
    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 300px;
    }
    
    @media (max-width: 480px) {
        min-height: 250px;
    }
`;