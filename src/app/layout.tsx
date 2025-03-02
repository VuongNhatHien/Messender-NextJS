import Navbar from "@/components/app/navbar/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToasterWrapper from "@/components/ui/toaster-wrapper";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/fetcher";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Messender",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SWRConfig
                        value={{
                            fetcher,
                            revalidateIfStale: false,
                            revalidateOnFocus: false,
                            revalidateOnReconnect: false,
                        }}
                    >
                        <main className="flex h-screen flex-col">
                            <Navbar />
                            <div className="flex-1 overflow-auto">
                                <div className="container-custom h-full w-full py-5">
                                    {children}
                                </div>
                            </div>
                        </main>
                    </SWRConfig>
                    <ToasterWrapper />
                </ThemeProvider>
            </body>
        </html>
    );
}
