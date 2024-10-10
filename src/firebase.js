import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBWAROXdQax7Kup__OQ2BFIZrQe8jjReFo",
  authDomain: "netflix-error.firebaseapp.com",
  projectId: "netflix-error",
  storageBucket: "netflix-error.appspot.com",
  messagingSenderId: "526966981718",
  appId: "1:526966981718:web:d9c3adc59e6490bf39e7f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email , password)=>{
  try {
  const res =  await createUserWithEmailAndPassword(auth ,email, password);
  const user =res.user;
  await addDoc(collection(db, "user"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,

  });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }

}
const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth , email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const logout = ()=>{
  signOut(auth);
}
export {auth, db, login, signup, logout};