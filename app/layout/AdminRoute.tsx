"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";

export default function AdminRoute({ children }: any) {
  const [isLoading, setIsLoading] = useState(true)
  const { user, role, loading } = useContext(AuthContext);
  const router = useRouter();
  console.log("user, role, loading", user, role, loading)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else if (role !== "admin") {
        router.replace("/dashboard");
      }else{
        setIsLoading(false)
      }
    }
  }, [user, role, loading]);

  if (isLoading) return <p>...loading</p>;

  return <>{children}</>;
}
