import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxlCA5JP3sON-NMfu_uNpbEOD8-2qU2iw",
    authDomain: "fethics-77f78.firebaseapp.com",
    projectId: "fethics-77f78",
    storageBucket: "fethics-77f78.appspot.com",
    messagingSenderId: "248432597355",
    appId: "1:248432597355:web:04aad4970262f21890542e",
    measurementId: "G-1KRLTYNX01"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };