import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVQh66iaP2lvd6sKwA2TfiLKO4uICmdQ4",
  authDomain: "rs-chatapp-2195e.firebaseapp.com",
  projectId: "rs-chatapp-2195e",
  storageBucket: "rs-chatapp-2195e.appspot.com",
  messagingSenderId: "527059148702",
  appId: "1:527059148702:web:96adbd9868387cec79808f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);