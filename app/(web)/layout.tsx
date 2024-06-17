import type { Metadata } from "next";
import { GoogleTagManager} from '@next/third-parties/google'
import { Montserrat } from "next/font/google";
import "../globals.css";
import MainNav from "@/components/MainNav";

const font = Montserrat({subsets:['latin']})

export const metadata: Metadata = {
  title: "Daniel Campos Arce",
  description: "Software Developer, npm run ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-P8ZXV62T" />
      <body className={`${font.className}`}>
        <header className="flex flex-row justify-between items-center mb-6 px-8 py-4 content-center">
          <h1 className="text-3xl">DA</h1>
        <MainNav />
        </header>
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
