"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/login"); // redirect after logout
  };

  return <button className="dark:text-gray-300" onClick={handleLogout}>Logout</button>;
}