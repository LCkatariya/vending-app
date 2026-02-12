import { auth } from "@/app/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = (email:string, password:string) =>
  signInWithEmailAndPassword(auth, email, password);