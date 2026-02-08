import type { Metadata } from "next";
import NewNoteClient from "./NewNoteClient";

export const metadata: Metadata = {
  title: "Catatan Baru - Catat Note",
};

export default function Page() {
  return <NewNoteClient />;
}
