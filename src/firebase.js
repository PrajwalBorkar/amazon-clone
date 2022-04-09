import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {    
    apiKey: "AIzaSyAA1Ei9gSOiSMNzrfIhdGGnnIarcSMVosg",
    authDomain: "clone-c6d12.firebaseapp.com",
    projectId: "clone-c6d12",
    storageBucket: "clone-c6d12.appspot.com",
    messagingSenderId: "842455431150",
    appId: "1:842455431150:web:f6c8adf10b2444c61600ff",
    measurementId: "G-FCMYP9NWSN"
  };    
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth();


export { auth };
export default db; 
