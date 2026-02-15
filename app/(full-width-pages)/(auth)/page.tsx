import SignInForm from "@/app/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vending Machin Login",
  description: "Vending Machin Login",
};

export default function SignIn() {
  return <SignInForm />;
}
