import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Campos Arce",
  description: "More than a simple web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-8 pt-4`}>
        <PageHeader/>
        {children}
        <PageFooter/>
        </body>
    </html>
  );
}
