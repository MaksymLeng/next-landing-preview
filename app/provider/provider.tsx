"use client";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import {ThemeProvider} from "next-themes";
import { ReactNode} from "react";
import { SonnToaster } from "@/app/components/ui/sonner";
import {Geist, Geist_Mono} from "next/font/google";
import {Navbar} from "@/app/components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Provider({children,}: {
    children: ReactNode;
}) {

    const scrollbarOptions = {
        scrollbars: {
            autoHide: "leave" as const,
            autoHideDelay: 500,
            clickScroll: true,
        },
    };

    return (
        <OverlayScrollbarsComponent
            element="body"
            options={scrollbarOptions}
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
            defer
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <SonnToaster />
            </ThemeProvider>
        </OverlayScrollbarsComponent>
    )
}