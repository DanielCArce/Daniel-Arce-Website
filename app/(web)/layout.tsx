import type { Metadata } from "next";
import { GoogleTagManager} from '@next/third-parties/google'
import { Montserrat } from "next/font/google";
import "../globals.css";
import MainNav from "@/components/MainNav";
import MainHeader from "@/components/MainHeader";

const font = Montserrat({subsets:['latin']})

export const metadata: Metadata = {
  title: "Daniel Campos Arce",
  description: "Creating Websites and more ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-P8ZXV62T" />
      <body className={`${font.className} bg-white text-white`}>
        <MainHeader/>
        <main>
          {children}
        </main>
        <footer>
          <p className="text-center text-black">Creating software that have results since 2021</p>
        </footer>
        </body>
    </html>
  );
}
