import { useState } from "react";
import { logUser, getUserProfile, modifyUsername } from "../src/api";
import { useNavigate } from "react-router-dom";
import { useDispatch,} from "react-redux";
import { loginUser,infoUser } from "./redux/loginSlice";
import Button from "./Button";

const Signin = () => {
  // États pour stocker les valeurs du formulaire et gérer les erreurs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  // Hook pour la navigation
  const navigate = useNavigate();
  // Hook pour dispatcher des actions Redux
  const dispatch = useDispatch(); // Utilise useDispatch
 // Fonction pour gérer la connexion de l'utilisateur
  const login = async (e) => {
    e.preventDefault();
    try {
      // Appel de la fonction logUser pour se connecter avec l'email et le mot de passe
      const userData = await logUser(email, password); // Utilisation de la fonction loginUser
      const token = userData.body.token;
      // Envoie du token à Redux pour authentifier l'utilisateur
      await dispatch(loginUser(token));
      
      // Stockage du token dans localStorage si "Remember me" est coché
      if (rememberMe) {
        localStorage.setItem('token', token);
      }
       // Récupération des informations de profil de l'utilisateur
      const userInfo = await getUserProfile(token); // Utilisation de la fonction getUserProfile
      const userInfos = {
        email: userInfo.body.email,
        firstName: userInfo.body.firstName,
        lastName: userInfo.body.lastName,
        userName: userInfo.body.userName
      };
      // Enregistrement des informations de profil de l'utilisateur dans Redux
      await dispatch(infoUser(userInfos));
        // Redirection vers la page utilisateur après la connexion réussie
      navigate("/user");
    } catch (error) {
      // Gestion des erreurs lors de la connexion
      console.error("Erreur lors de la connexion:", error);
      setError("Identifiants incorrects");
    }
  };
    // Fonction pour gérer l'option "Remember me"
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };  

  return (
    <main className="main bg-dark">
        <section className="sign-in-content">
        <i className="fa fa-user-circle "></i>
        <h1>Sign In</h1>
        <form action="" onSubmit={login}>
            <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder=" exemple@gmail.com" required
              
            />
            </div>
            <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </div>
            <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe}
              onChange={handleRememberMe} />
            <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className={"input-error " + (error ? " " : "sr-only")}>
            Email or password invalid
            </div>
            <Button btnText={"Sign In"} className={"sign-in-button"}/>
        </form>
        </section>
    </main>
  );
}

export default Signin;






