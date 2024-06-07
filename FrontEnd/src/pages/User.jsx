import Footer from "../Footer";
import Navigation from "../Navigation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button"
import Transactions from "../Transactions";
import { useEffect } from "react";

const User = () => {
    // Utilisation de useSelector pour obtenir les informations utilisateur depuis le store Redux
    const userProfil = useSelector(state => state.login.userProfil);
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifie si userProfil est null ou undefined
        if (!userProfil) {
            // Redirection vers la page d'accueil 
            navigate("/"); 
        }
    }, [navigate, userProfil]);

    // Vérifie si userProfil est null ou undefined
    if (!userProfil) {
        // Retourne null pour ne pas afficher le contenu du composant si userProfil est null
        return null;
    }

    const { userName, firstName, lastName } = userProfil;

    // Gestion de l'affichage du formulaire pour modifier son username
    const handleDisplayEdit = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du clic
        navigate("/Editname"); // Redirige vers la page de modification de nom d'utilisateur
    };

    return (
        <div>
            <Navigation />
            <main className="main bg-dark2">
                <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}<br />{userName}</h1>
                    <Button className={"edit-button"} btnText={"Edit Name"} onClick={handleDisplayEdit}></Button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Transactions />
            </main>
            <Footer />
        </div>
    );
}

export default User;
