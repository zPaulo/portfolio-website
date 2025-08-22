import Header from "../components/ui/header/Header.tsx"
import Presentation from "../components/ui/presentation/Presentation.tsx"
import AboutMe from "../components/ui/aboutme/Aboutme.tsx"

export default function Home() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <main>
                <Presentation />
                <AboutMe />
            </main>
        </div>
    )
}
