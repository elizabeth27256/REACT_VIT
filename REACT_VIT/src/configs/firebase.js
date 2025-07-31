import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
apiKey: "AIzaSyCwt3kOnz9bkPnKmfexwPEWEWzlE4wO18I",
authDomain: "login-app-23e64.firebaseapp.com",
projectId: "login-app-23e64",
storageBucket: "login-app-23e64.firebasestorage.app",
messagingSenderId: "894878654296",
appId: "1:894878654296:web:db0c65c9a421fe05aa8f2d",
measurementId: "G-PF5G68K2WF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
