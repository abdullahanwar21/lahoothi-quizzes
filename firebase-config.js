/* Lahoothi Quizzes: your Firebase keys.
   1. In the Firebase console open Project settings, then "Your apps", then the web app.
   2. Copy each value from the firebaseConfig block into the same name below.
   These keys are safe to keep in the website. The database rules protect your data.
   Leave them empty to run the site with sample data. */
window.LQ_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBcxCFJuVdMTYJbIMlMAmFnId-UjZPZz2A",
  authDomain: "lahoothiquizzes-a333d.firebaseapp.com",
  projectId: "lahoothiquizzes-a333d",
  storageBucket: "lahoothiquizzes-a333d.firebasestorage.app",
  messagingSenderId: "606971924277",
  appId: "1:606971924277:web:681cfb569a331e4572067c"
  },
  /* Students must open the link in the verification email before they can enter. Set to false to switch this off. */
  requireEmailVerification: true,
  /* Only needed when you choose "Firebase AI Logic" as the AI provider in Settings. */
  recaptchaEnterpriseKey: ""
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxCFJuVdMTYJbIMlMAmFnId-UjZPZz2A",
  authDomain: "lahoothiquizzes-a333d.firebaseapp.com",
  databaseURL: "https://lahoothiquizzes-a333d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lahoothiquizzes-a333d",
  storageBucket: "lahoothiquizzes-a333d.firebasestorage.app",
  messagingSenderId: "606971924277",
  appId: "1:606971924277:web:681cfb569a331e4572067c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
