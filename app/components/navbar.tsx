"use client";

import Link from "next/link";
import { ToggleTheme } from "@/app/components/toggle-theme";

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
                <div className="mr-4 flex">
                    <Link href="https://github.com/MaksymLeng" className="mr-6 flex items-center space-x-2 font-bold">
                        <span>Landing Preview</span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-end">
                        <ToggleTheme />
                    </nav>
                </div>
            </div>
        </header>
    );
};