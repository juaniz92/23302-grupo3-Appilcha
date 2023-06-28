
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuu0p0VZBsify1bYOUq3gyGkgLBQAiUiU",
  authDomain: "appilcha-9e524.firebaseapp.com",
  projectId: "appilcha-9e524",
  storageBucket: "appilcha-9e524.appspot.com",
  messagingSenderId: "133904254951",
  appId: "1:133904254951:web:5af7ccf0433366e2941f42"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app