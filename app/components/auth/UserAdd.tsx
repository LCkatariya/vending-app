import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/app/lib/firebase";

export const registerUser = async (email:string, password:string, role:string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", userCredential.user.uid), {
    email,
    role, // "admin" or "user"
    createdAt: Date.now(),
  });
};
