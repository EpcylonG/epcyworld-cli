import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNozUUDX__iEmok0RQaLN5Be2X5IhKluw",
  authDomain: "epcyworld.firebaseapp.com",
  projectId: "epcyworld",
  storageBucket: "epcyworld.appspot.com",
  messagingSenderId: "988621391451",
  appId: "1:988621391451:web:6ba5b6729c8d882ac3217e"
};

initializeApp(firebaseConfig);

export const auth = getAuth();

// Sign Up
export function signUpWithEmail(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login
export function loginWithEmail(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export async function signInWithGoogle(){
    return await signInWithPopup(auth, new GoogleAuthProvider()).catch(console.error);
}

// Reset email
export function sendResetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }

// Logout
export function logOut(){
    return signOut(auth);
}

// Get User Token
export function getCurrentUserToken() {
    if (!auth.currentUser) return null;
    return auth.currentUser.getIdToken();
}