import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFz6KMnpXKNIStUrQUWm5X_sMKSXjb06s",
    authDomain: "protfolio-db-9289e.firebaseapp.com",
    projectId: "protfolio-db-9289e",
    storageBucket: "protfolio-db-9289e.appspot.com",
    messagingSenderId: "10464663229",
    appId: "1:10464663229:web:1a7a17287c2b3bd6f109d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
