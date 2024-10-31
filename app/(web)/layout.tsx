import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { GTAG_KEY } from '@/config/constants';
const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Daniel Campos Arce",
    description: "Creating Websites and more ",
    authors: [{ name: "Daniel Arce", url: "https//darce.vercel.app" }],
    twitter: {
        creator: "Daniel Arce",
        card: "summary"
    },
    keywords: ["Software Development", "Website builder", "Software as Service", "Development Custom Software"],
    icons: {
        apple: '/Logo_34.png',
        shortcut:'/Logo_34.png'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId={GTAG_KEY} />
            <body className={`${font.className} bg-neutral text-black`}>
                <main>
                    {children}
                </main>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}