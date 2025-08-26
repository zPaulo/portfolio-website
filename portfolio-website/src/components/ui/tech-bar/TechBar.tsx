import { TechBarContainer, TechList, TechItem } from "./TechBar.style";

const TechBar = () => {
    const technologies = [
        "Python",
        "PySpark",
        "SQL",
        "Power BI",
        "Tableau",
        "QlikSense",
        "Looker Studio",
        "Power Platform",
        "Typescript",
        "React",
        "DevOps"
    ];

    return (
        <TechBarContainer>
            <TechList>
                {technologies.map((tech, index) => (
                    <TechItem key={index} $delay={index * 2}>
                        {tech}
                    </TechItem>
                ))}
            </TechList>
        </TechBarContainer>
    );
};

export default TechBar;
