import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBPbWXWNyxWtMo7KYuTOE5J42O7fa5LzKI",
    authDomain: "morse-7d592.firebaseapp.com",
    projectId: "morse-7d592",
    storageBucket: "morse-7d592.appspot.com",
    messagingSenderId: "159329004623",
    appId: "1:159329004623:web:67a50ffbf28fa8d9260e3a",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function emailLogin(username, password) {
    await signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    if (auth.currentUser) {
        return auth.currentUser;
    }
}

export function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}