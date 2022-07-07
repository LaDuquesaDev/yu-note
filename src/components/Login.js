import React from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "../firebase/firebaseImport";
import auth from "../firebase/firebaseConfig.js"
import '../styles/login.css'

const Login = () => {
  const navigate = useNavigate();
    const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
      .then(() => {
        navigate('/Notes');
      }).catch((error) => {
        console.error(error)
      });
    }
  return (
    <>
      <div className='login-container'>
        <section className='login-section'>
          <h1 className='yu-note'>Yu-Note</h1>
          <p className='perfect-app'>The perfect app to write down what you want</p>
          <section>
            <button className="login-btn login-google" variant="warning" onClick={loginWithGoogle}>
              Login with Google
            </button>
          </section>
        </section>
      </div>
    </>
  );
}
    
export default Login;