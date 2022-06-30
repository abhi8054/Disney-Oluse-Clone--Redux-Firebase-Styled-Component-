import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCXnInmIKbB-XrXf5KumSWRsa4q5vjltek",
  authDomain: "disney-plus-clone-ad242.firebaseapp.com",
  projectId: "disney-plus-clone-ad242",
  storageBucket: "disney-plus-clone-ad242.appspot.com",
  messagingSenderId: "967557528053",
  appId: "1:967557528053:web:064198331e1a13cde848bc",
  measurementId: "G-S02WFVM3P9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, GoogleProvider, storage };
export default db;
