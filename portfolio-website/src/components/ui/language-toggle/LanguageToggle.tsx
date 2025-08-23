import { useLanguage } from '../../../contexts/LanguageContext';
import { LanguageButton, LanguageButtonContainer } from './LanguageToggle.style.ts';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <LanguageButtonContainer>
            <LanguageButton onClick={toggleLanguage} $isActive={language === 'pt'}>
                PT
            </LanguageButton>
            <LanguageButton onClick={toggleLanguage} $isActive={language === 'en'}>
                EN
            </LanguageButton>
        </LanguageButtonContainer>
    );
};

export default LanguageToggle;
