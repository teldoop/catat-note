import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Login ke Catat Note",
};

export default function Page() {
  return <LoginClient />;
}
