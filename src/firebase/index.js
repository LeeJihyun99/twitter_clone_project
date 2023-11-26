import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 
const firebaseConfig = {
  apiKey: "AIzaSyBnwv1ljwqyUlcPHLmo4XJ8N22nmmYckSg",
  authDomain: "twitter-clone-project-jihyun.firebaseapp.com",
  projectId: "twitter-clone-project-jihyun",
  storageBucket: "twitter-clone-project-jihyun.appspot.com",
  messagingSenderId: "759918409977",
  appId: "1:759918409977:web:935f14819a416d024b4a28"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

