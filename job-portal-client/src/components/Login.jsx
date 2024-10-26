import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import app from "../firebase/firebase.confiq"; // Ensure this stays

console.log(app);

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
      
     
        const user = result.user;
        console.log(user)
       
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button
        className="bg-blue-600 px-8 py-2 text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
