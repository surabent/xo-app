import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "Let's play tic tac toe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${silkscreen.className} antialiased`}>
        {children}
        <div className="animate-background-x"></div>
      </body>
    </html>
  );
}
