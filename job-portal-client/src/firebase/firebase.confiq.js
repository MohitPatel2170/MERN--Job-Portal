// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT-mkeEyd6Nfzknj-EsnJ5n_5Wm6YaKGw",
  authDomain: "job-portal-demo-652b3.firebaseapp.com",
  projectId: "job-portal-demo-652b3",
  storageBucket: "job-portal-demo-652b3.appspot.com",
  messagingSenderId: "238766528946",
  appId: "1:238766528946:web:c1019417be9e7e1fe92cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;