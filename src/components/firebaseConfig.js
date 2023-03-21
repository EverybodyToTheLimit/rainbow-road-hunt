// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs0TvQ4va236Ntjg-NQTJkc7mybmFQR4U",
  authDomain: "rainbow-road-hunt.firebaseapp.com",
  projectId: "rainbow-road-hunt",
  storageBucket: "rainbow-road-hunt.appspot.com",
  messagingSenderId: "436106079779",
  appId: "1:436106079779:web:977dd5960d94bee4e88b96",
  measurementId: "G-PN6Z64BT8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    app,
    analytics
}