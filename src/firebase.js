import { initializeApp } from "firebase/app";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// });
const app = initializeApp({
  apiKey: "AIzaSyDzwcHlj50cqwjiEBFbQF3WNso4iPLe1_U",
  authDomain: "quiz-app763.firebaseapp.com",
  databaseURL:
    "https://quiz-app763-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-app763",
  storageBucket: "quiz-app763.appspot.com",
  messagingSenderId: "366391321124",
  appId: "1:366391321124:web:daac82bfa393c04275aeb1",
});

export default app;
