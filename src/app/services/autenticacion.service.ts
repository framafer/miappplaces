import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


//import * as firebase from 'firebase/app';
//import { FirebaseAuth } from 'angularfire2';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  usuarioAutenticado:boolean = false;
  //   
  //credencialesUsuario: 

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBCdmIvuKFOI8nAlQIbx7TiCegFiVLy3E8",
      authDomain: "gdi-places-app-e2fd6.firebaseapp.com",
      projectId: "gdi-places-app-e2fd6",
      storageBucket: "gdi-places-app-e2fd6.appspot.com",
      messagingSenderId: "591001654415",
      appId: "1:591001654415:web:8d1c1e7662d2b55aeb4cfa"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
  }


  registroUsuario(userdata: any) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorCode, errorMessage);


      });
  }

  // Esto inicia sesión con Google
  inicioSesionGoogle() {
  //inicioSesionGoogle(userdata: { email: any; password: any; }) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //this.credencialesUsuario = credential?.toJSON;
        const token = credential.accessToken;
        //const usuario = credential.user;

        console.log("Este es el token: ", token);
        //console.log("Este es el credential: ", this.credencialesUsuario);
        //console.log("Este es el usuario: ", usuario);

        if(credential){
          this.usuarioAutenticado = true;
          console.log("El usuarioAutenticado vale:", this.usuarioAutenticado);

        }
        
        //const usuario = getAdditionalUserInfo(result);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {

        this.usuarioAutenticado = false;
        console.log("El usuarioAutenticado vale:", this.usuarioAutenticado)        
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  // ESto inicia sesión con una cuenta email y contraseña
  /* inicioSesion(userdata: { email: any; password: any; }) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch(
        error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..

          console.log(errorCode, errorMessage);
        }
      )
  } */

  isAuthenticated() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    const auth = getAuth();
    auth.signOut();
  }

}