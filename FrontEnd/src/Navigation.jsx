import logo from "../public/argentBankLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./redux/loginSlice";


const Navigation = () => {
  // Utilise useDispatch pour obtenir la fonction dispatch de Redux
    const dispatch = useDispatch();
    // Utilise useSelector pour lire l'état du slice login dans le store Redux
    const loginStore = useSelector((state) => state.login);
    // Récupère le token de l'utilisateur depuis l'état du store
    const token = useSelector((state) => state.login.userToken);
    if (token) {
      console.log("le token est présent dans le store")
    } else {
      console.log("le token n'est pas présent")
    }
      // Fonction de gestion du clic sur le bouton de déconnexion
      const handleRedirectHome = () => {``
      // Supprime le token du localStorage
        localStorage.removeItem("token");
        // Envoie l'action logoutUser au store Redux pour mettre à jour l'état et déconnecter l'utilisateur
        dispatch(logoutUser());
      };
    return (

        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
                <img className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"

                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            

            <div className="login">
        {/* Conditionnellement rendu le lien "Sign In" ou "Sign Out" */}
        {loginStore && // Vérifie si loginStore est défini
          loginStore.userProfil && // Vérifie si userProfil est défini dans loginStore
          loginStore.userProfil.userName && ( // Vérifie si userName est défini dans userProfil
            <Link to="/user" className="userName">
            <i className="fa fa-user-circle"></i>
            <p>{loginStore.userProfil.userName}</p>
            </Link>
          
            )}
        {/* Conditionnellement rendu du lien "Sign In" ou "Sign Out" */}
        {token ? ( // Vérifie si un token est présent (utilisateur connecté)
          <NavLink
          className="main-nav-item"
          to="/" // Redirige vers la page d'accueil
          onClick={handleRedirectHome} // Déclenche la fonction de déconnexion au clic
          >
            {/* Affiche une icône de déconnexion */}
            <i className="fa-solid fa-right-to-bracket"></i>
            Sign Out
          </NavLink>
        ) : (  // Si aucun token n'est présent (utilisateur non connecté)
          <NavLink className="main-nav-item" to="/Login"> {/*Redirige vers la page de connexion*/}
             {/* Affiche une icône de connexion */}
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
      
    </nav>
  );
};


export default Navigation;