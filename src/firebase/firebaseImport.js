// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export {
  getFirestore, 
  GoogleAuthProvider, 
  signInWithPopup, 
  getAuth, 
  signOut
};

// const provider = new GoogleAuthProvider();

// export const auth = getAuth();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });

// export const logout = () => {
//   signOut(auth);
// };


// const logout = () => {
//   signOut(auth);
// };

// export {
//   auth,
//   db,
//   signInWithGoogle,
//   logout,
// };