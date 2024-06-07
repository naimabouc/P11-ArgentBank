import Footer from "../Footer";
import Navigation from "../Navigation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button"
import Transactions from "../Transactions";

const User = () => {
    // Utilisation de useSelector pour obtenir les informations utilisateur depuis le store Redux
    const username = useSelector(state =>(state.login.userProfil.userName))
    const firstname = useSelector(state =>(state.login.userProfil.firstName))
    const lastname = useSelector(state =>(state.login.userProfil.lastName))
  // Gestion de l'affichage du formulaire pour modifier son username
    const navigate = useNavigate();
    const handleDisplayEdit = (e) => {
      e.preventDefault() // Empêche le comportement par défaut du clic
      navigate("/Editname") // Redirige vers la page de modification de nom d'utilisateur
    };
    return (
        
        
        <div>
            <Navigation />
            <main className="main bg-dark2">
                    <div className="header">
                        <h1>Welcome back<br />{firstname} {lastname} <br />{username}</h1>
                        <Button className={"edit-button"} btnText={"Edit Name"} onClick={handleDisplayEdit}></Button>
                    </div>
                <h2 className="sr-only">Accounts</h2>
               <Transactions />
            </main>
            <Footer />
        </div>
    )
}

export default User;