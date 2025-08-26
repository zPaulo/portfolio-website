import { PresentationContainer, PresentationTitle, PresentationSubTitle, PresentationDescription, PresentationTextContainer, OrangeDot, ButtonContainer, PrimaryButton, SecondaryButton, PresentationImageContainer, PresentationImage } from "./Presentation.style";
import TechBar from "../tech-bar/TechBar";
import { useLanguage } from '../../../contexts/LanguageContext';

const Presentation = () => {
    const { t } = useLanguage();

    const handleResumeClick = () => {
        window.open('/PAULO-ARRUDA-GOMES.pdf', '_blank');
    };

    const handleProjectClick = () => {
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            const headerHeight = 80;
            const elementPosition = contactsSection.offsetTop - headerHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <PresentationContainer>
            <PresentationTextContainer>
                <PresentationSubTitle>{t('presentation.hello')}<OrangeDot></OrangeDot></PresentationSubTitle>
                <PresentationDescription>{t('presentation.name')}</PresentationDescription>
                <PresentationTitle>{t('presentation.role')}</PresentationTitle>
                <ButtonContainer>
                    <PrimaryButton onClick={handleProjectClick}>{t('presentation.gotProject')}</PrimaryButton>
                    <SecondaryButton onClick={handleResumeClick}>{t('presentation.resume')}</SecondaryButton>
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