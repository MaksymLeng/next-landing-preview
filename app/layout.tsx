import type { Metadata } from "next";
import Provider from "@/app/provider/provider";
import "overlayscrollbars/overlayscrollbars.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Landing Preview App",
    description: "Preview your HTML components",
    icons: {
        icon: "/book.svg",
    }
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Provider>
                {children}
            </Provider>
        </html>
    );
}