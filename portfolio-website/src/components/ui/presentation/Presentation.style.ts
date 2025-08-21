import styled from 'styled-components';

export const PresentationContainer = styled.section`
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
`;

export const PresentationTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    position: absolute;
    left: 8%;
    top: 30%;
`;

export const PresentationTitle = styled.h1`
    font-size: 2.5rem;
    color: #FFFF;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    margin-bottom: 0.5rem;
`;

export const PresentationSubTitle = styled.h2`
    font-size: 2rem;
    color: #FFFF;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    margin-bottom: 0.9rem;
`;

export const PresentationDescription = styled.h3`
    font-size: 1.6rem;
    font-weight: normal;
    color: #FFFF;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    margin-bottom: 0.9rem;
`;