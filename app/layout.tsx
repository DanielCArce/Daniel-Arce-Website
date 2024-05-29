import type { Metadata } from "next";
import { GoogleTagManager} from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Campos Arce",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-P8ZXV62T" />
      <body className={`${inter.className}`}>
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
