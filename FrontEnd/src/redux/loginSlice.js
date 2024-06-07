// Creation de la slice de conexion

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login", // nom de la slice
  // Etat initial de la slice
  initialState: {
    userToken: null, // Token de l'utilisateur, initialisé à null
    userProfil: null, // Profil de l'utilisateur, initialisé à null
  },
  reducers: {
    //Action pour connecter l'utilisateur
    loginUser: (state, action) => {
      state.userToken = action.payload; // Modifie l'état pour stocker le token de l'utilisateur à partir de l'action
    },
    // Action pour deconecter l'utilisateur
    logoutUser: (state) => {
      // Réinitialise les informations de l'utilisateur (token et profil) à null
      state.userToken = null; 
      state.userProfil= null;
    },
    //Action pour stoker les données utilisateur
    infoUser: (state, action) => {
            // Modifie l'état pour stocker les informations de profil de l'utilisateur à partir de l'action
      state.userProfil = action.payload; 
    },
    //Action pour stoker les données utilisateur
    infoUserName: (state, action) => {
            // Modifie l'état pour stocker le nom d'utilisateur à partir de l'action
      state.userProfil.userName = action.payload; 
    },
  },
});

export const { loginUser, logoutUser, infoUser, infoUserName } =
  loginSlice.actions;

export default loginSlice;