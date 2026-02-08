import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body data-bs-theme="auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
