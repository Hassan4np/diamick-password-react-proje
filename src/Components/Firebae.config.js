// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMZ9PvB8iWyLmAGeNUfdKyKMrnawz1AyY",
    authDomain: "dinamic-password-react-project.firebaseapp.com",
    projectId: "dinamic-password-react-project",
    storageBucket: "dinamic-password-react-project.appspot.com",
    messagingSenderId: "495784136480",
    appId: "1:495784136480:web:c09952f87ea17903835145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth