import { useLanguage } from '../../../contexts/LanguageContext';
import { LanguageToggleContainer, LanguageOption, SliderIndicator } from './LanguageToggle.style.ts';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (lang: 'pt' | 'en') => {
        setLanguage(lang);
    };

    return (
        <LanguageToggleContainer>
            <SliderIndicator $language={language} />
            <LanguageOption
                onClick={() => handleLanguageChange('pt')}
                $isActive={language === 'pt'}
            >
                PT
            </LanguageOption>
            <LanguageOption
                onClick={() => handleLanguageChange('en')}
                $isActive={language === 'en'}
            >
                EN
            </LanguageOption>
        </LanguageToggleContainer>
    );
};

export default LanguageToggle;
