import { PresentationContainer, PresentationTitle, PresentationSubTitle, PresentationDescription, PresentationTextContainer, OrangeDot, ButtonContainer, PrimaryButton, SecondaryButton } from "./Presentation.style";
import TechBar from "../tech-bar/TechBar";

const Presentation = () => {
    return (
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
            <TechBar />
        </PresentationContainer>
    );
}

export default Presentation;