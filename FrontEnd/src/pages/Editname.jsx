import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

//Variable pour manipuler le store redux
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "../redux/loginSlice";
import { modifyUsername } from "../api";
//Importation de la fonction pour le PUT


const Editname = () => {
  const navigate = useNavigate(); //Pour changer de page
  // enregistrement de la slice login depuis le store dans une variable
  const loginStore = useSelector((state) => state.login)// Récupère l'état de connexion du store Redux
  const storeUserProfil = loginStore.userProfil; //Profil utilisateur depuis le store Redux
  const dispatch = useDispatch(); // Utilise useDispatch Pour envoyer des actions au store Redux
  // Initialisation de l'état local avec le nom d'utilisateur actuel
  const [newUserName, setNewUserName] = useState(storeUserProfil.userName);
  const token = loginStore.userToken; // Jeton d'authentification
    // Met à jour le nom d'utilisateur local quand l'utilisateur tape dans le champ de texte
  const handleChangeUserName = (e) => {
    setNewUserName(e.target.value);
  };
  // Annule la modification et redirige vers la page utilisateur
  const handleCancel = () => {
    navigate("/user");
  };
  
 // Soumet le formulaire pour modifier le nom d'utilisateur
  const handleForm = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    // Appel à l'API pour mettre à jour le nom d'utilisateur
    const updateUserName = await modifyUsername(newUserName, token)
    if (updateUserName.status === 200) {
      // Si la mise à jour réussit, met à jour le store Redux
      dispatch(infoUserName(newUserName));
    }
  };
  return (
    <main className="main bg-dark">
    <section className="sign-in-content toogle-edit-name">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Edit User info</h1>
      <form onSubmit={handleForm} onClick={(event) => event.stopPropagation()}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            value={newUserName}
            onChange={handleChangeUserName}
            type="text"
            id="username"
            placeholder="Tapez votre username"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            disabled
            value={storeUserProfil.firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            disabled
            value={storeUserProfil.lastName}
          />
        </div>
        <Button  btnText={"Save"} className={"sign-in-button"}/>
      </form>
        <Button  btnText={"Cancel"} onClick={handleCancel} className={"sign-in-button"}/>
    </section>
    </main>
  );
};

export default Editname;