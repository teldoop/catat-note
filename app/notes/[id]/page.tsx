import type { Metadata } from "next";
import EditNoteClient from "./EditNoteClient";

export const metadata: Metadata = {
  title: "Edit Catatan - Catat Note",
};

export default function Page() {
  return <EditNoteClient />;
}
