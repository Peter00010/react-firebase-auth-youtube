import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-rNSEdy0RsFfzg3SQMCsz2liikszod7M",
  authDomain: "book-list-ed458.firebaseapp.com",
  projectId: "book-list-ed458",
  storageBucket: "book-list-ed458.appspot.com",
  messagingSenderId: "575794105209",
  appId: "1:575794105209:web:be5745891f179018f0bda8"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
