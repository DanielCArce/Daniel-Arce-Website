import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        template: ' %s - Daniel Arce',
        default: 'Blog - Daniel Arce'
    },
    description: "Creating Websites and more ",
    authors: [{ name: "Daniel Arce", url: "https//darce.vercel.app" }],
    twitter: {
        creator: "Daniel Arce",
        card: "summary"
    },
    keywords: ["Software Development", "Website builder", "Software as Service", "Development Custom Software"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-P8ZXV62T" />
            <body className={`${font.className} bg-white text-gray-700`}>
                <main className="px-4 pt-5">
                    {children}
                </main>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}