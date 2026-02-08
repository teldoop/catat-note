import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold" }}>404</h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "1.5rem" }}>
        Halaman tidak ditemukan.
      </p>

      <Link href="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
