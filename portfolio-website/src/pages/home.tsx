import Header from "../components/ui/header/Header.tsx"
import Presentation from "../components/ui/presentation/Presentation.tsx"
import AboutMe from "../components/ui/aboutme/Aboutme.tsx"
import Projects from "../components/ui/projects/Projects.tsx"
import Contacts from "../components/ui/contacts/Contacts.tsx"

export default function Home() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <main>
                <section id="home">
                    <Presentation />
                </section>
                <section id="about">
                    <AboutMe />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contacts">
                    <Contacts />
                </section>
            </main>
        </div>
    )
}
