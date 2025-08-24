import {
    AboutmeContainer,
    ServicesColumn,
    ServiceItem,
    ServiceIcon,
    ServiceText,
    ContentColumn,
    AboutTitle,
    AboutDescription,
    StatsContainer,
    StatItem,
    StatNumber,
    StatLabel
} from "./aboutme.style";
import { useLanguage } from '../../../contexts/LanguageContext';

const AboutMe = () => {
    const { t } = useLanguage();

    return (
        <AboutmeContainer>
            <ServicesColumn>
                <ServiceItem>
                    <ServiceIcon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M9 9H15" stroke="currentColor" strokeWidth="2" />
                            <path d="M9 12H15" stroke="currentColor" strokeWidth="2" />
                            <path d="M9 15H12" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </ServiceIcon>
                    <ServiceText>{t('aboutme.services.analysis')}</ServiceText>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M8 8H16" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 16H12" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </ServiceIcon>
                    <ServiceText>{t('aboutme.services.dataengeneer')}</ServiceText>
                </ServiceItem>

                <ServiceItem>
                    <ServiceIcon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M7 8H17" stroke="currentColor" strokeWidth="2" />
                            <path d="M7 12H14" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </ServiceIcon>
                    <ServiceText>{t('aboutme.services.automation')}</ServiceText>
                </ServiceItem>
            </ServicesColumn>

            <ContentColumn>
                <AboutTitle>{t('aboutme.title')}</AboutTitle>
                <AboutDescription>
                    {t('aboutme.description')}
                </AboutDescription>

                <StatsContainer>
                    <StatItem>
                        <StatNumber>90 <span>+</span></StatNumber>
                        <StatLabel>{t('aboutme.stats.projects')}</StatLabel>
                    </StatItem>

                    <StatItem>
                        <StatNumber>500.000 <span>R$</span></StatNumber>
                        <StatLabel>{t('aboutme.stats.economy')}</StatLabel>
                    </StatItem>

                    <StatItem>
                        <StatNumber>3 <span>+</span></StatNumber>
                        <StatLabel>{t('aboutme.stats.experience')}</StatLabel>
                    </StatItem>
                </StatsContainer>
            </ContentColumn>
        </AboutmeContainer>
    )
}

export default AboutMe;