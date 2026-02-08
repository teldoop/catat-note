import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Catat Note App",
};

export default function Page() {
  return <HomeClient />;
}
