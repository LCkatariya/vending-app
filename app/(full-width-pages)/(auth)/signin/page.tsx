import SignInForm from "@/app/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vending Machin Dashboard",
  description: "Vending Machin Dashboard",
};

export default function SignIn() {
  return <SignInForm />;
}
