import { auth } from "@/app/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

export const loginUser = (email:string, password:string) =>
  signInWithEmailAndPassword(auth, email, password);


export const handleLogout = async () => {
  await signOut(auth);
};