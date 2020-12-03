import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBWNW6fMrMt4AgB8gr71vYtbX0rvcrjBDs",
authDomain: "healthformspa.firebaseapp.com",
databaseURL: "https://healthformspa.firebaseio.com",
projectId: "healthformspa",
storageBucket: "healthformspa.appspot.com",
messagingSenderId: "693532090223",
appId: "1:693532090223:web:19a30fa1ed469b2299529a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
