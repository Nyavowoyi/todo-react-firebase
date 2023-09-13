import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBr1SgkZEM6F5C9ptb4N3LAQ6EJ0mDuFEQ",
    authDomain: "todo-react-firebase-a441b.firebaseapp.com",
    projectId: "todo-react-firebase-a441b",
    storageBucket: "todo-react-firebase-a441b.appspot.com",
    messagingSenderId: "245309993436",
    appId: "1:245309993436:web:f7ad6360e46bbfd314df19"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();

  export default firebase;