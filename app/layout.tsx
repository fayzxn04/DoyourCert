import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "DoYourCert",
  description: "Using Outfit & Parkinsans",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={`${outfit.variable} ${parkinsans.variable}`}> */}
      <body>{children}</body>
    </html>
  );
}
