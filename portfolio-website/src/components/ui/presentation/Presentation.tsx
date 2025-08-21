import { PresentationContainer, PresentationTitle, PresentationSubTitle, PresentationDescription, PresentationTextContainer } from "./Presentation.style";

const Presentation = () => {
    return (
        <PresentationContainer>
            <PresentationTextContainer>
                <PresentationSubTitle>Hello</PresentationSubTitle>
                <PresentationDescription>I'm Paulo Arruda</PresentationDescription>
                <PresentationTitle>Data Analyst</PresentationTitle>
            </PresentationTextContainer>
        </PresentationContainer>
    );
}

export default Presentation;