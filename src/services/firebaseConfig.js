// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw3-ijb4t_39WvqiT1KygEoYZKNFwh2po",
  authDomain: "finrise-storage.firebaseapp.com",
  projectId: "finrise-storage",
  storageBucket: "finrise-storage.appspot.com",
  messagingSenderId: "379971239741",
  appId: "1:379971239741:web:d364f8e8760f047e6f0f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };