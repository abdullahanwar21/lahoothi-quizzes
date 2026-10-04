/* Lahoothi Quizzes: your Firebase keys.
   1. In the Firebase console open Project settings, then "Your apps", then the web app.
   2. Copy each value from the firebaseConfig block into the same name below.
   These keys are safe to keep in the website. The database rules protect your data.
   Leave them empty to run the site with sample data. */
window.LQ_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  /* Students must open the link in the verification email before they can enter. Set to false to switch this off. */
  requireEmailVerification: true,
  /* Only needed when you choose "Firebase AI Logic" as the AI provider in Settings. */
  recaptchaEnterpriseKey: ""
};
