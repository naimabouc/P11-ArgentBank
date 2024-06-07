import Features from "../Features"
import Hero from "../Hero"
import Navigation from "../Navigation"
import Footer from "../Footer"


const Accueil = () => {
    return (
        <div className="accueil">
            <Navigation />
            <Hero />
            <Features />
            <Footer />

        </div>
    )
}

export default Accueil;