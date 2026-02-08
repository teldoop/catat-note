import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Buat Akun Catat Note",
};

export default function Page() {
  return <RegisterClient />;
}
