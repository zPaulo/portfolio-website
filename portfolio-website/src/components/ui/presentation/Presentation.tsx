import { PresentationContainer, PresentationTitle, PresentationSubTitle, PresentationDescription, PresentationTextContainer, OrangeDot, ButtonContainer, PrimaryButton, SecondaryButton, ImageContainer } from "./Presentation.style";
import TechBar from "../tech-bar/TechBar";

const Presentation = () => {
    return (
    <>
        <PresentationContainer>
            <PresentationTextContainer>
                <PresentationSubTitle>Hello<OrangeDot></OrangeDot></PresentationSubTitle>
                <PresentationDescription>I'm Paulo Arruda</PresentationDescription>
                <PresentationTitle>Data Analyst</PresentationTitle>
                <ButtonContainer>
                    <PrimaryButton>Got a project?</PrimaryButton>
                    <SecondaryButton>My resume</SecondaryButton>
                </ButtonContainer>
            </PresentationTextContainer>

            <ImageContainer>
                {/* Aqui você pode adicionar sua imagem */}
                <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#48545E',
                    fontSize: '18px'
                }}>
                    Espaço para sua imagem
                </div>
            </ImageContainer>
        </PresentationContainer>
        <TechBar />
    </>  
    );
}

export default Presentation;