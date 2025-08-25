import { PresentationContainer, PresentationTitle, PresentationSubTitle, PresentationDescription, PresentationTextContainer, OrangeDot, ButtonContainer, PrimaryButton, SecondaryButton, PresentationImageContainer, PresentationImage } from "./Presentation.style";
import TechBar from "../tech-bar/TechBar";
import { useLanguage } from '../../../contexts/LanguageContext';

const Presentation = () => {
    const { t } = useLanguage();

    return (
        <PresentationContainer>
            <PresentationTextContainer>
                <PresentationSubTitle>{t('presentation.hello')}<OrangeDot></OrangeDot></PresentationSubTitle>
                <PresentationDescription>{t('presentation.name')}</PresentationDescription>
                <PresentationTitle>{t('presentation.role')}</PresentationTitle>
                <ButtonContainer>
                    <PrimaryButton>{t('presentation.gotProject')}</PrimaryButton>
                    <SecondaryButton>{t('presentation.resume')}</SecondaryButton>
                </ButtonContainer>
                <TechBar />
            </PresentationTextContainer>
            <PresentationImageContainer>
                <PresentationImage 
                    src="/assets/images/paulo_circle_bg.jpg" 
                    alt="Paulo Arruda"
                />
            </PresentationImageContainer>
        </PresentationContainer>
    );
}

export default Presentation;