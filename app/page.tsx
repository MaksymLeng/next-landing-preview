"use client";
import { useState } from "react";
import { LandingPreview } from "@/app/components/landing-preview";
import { Button } from "@/app/components/ui/button";
import {templates} from "@/app/data/templates";
import { cn } from "./lib/utils";
import {ArrowRight, LayoutTemplate} from "lucide-react";

export default function DemoPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentHtml, setCurrentHtml] = useState(templates[0].html);

    const handlePreview = (html: string) => {
        setCurrentHtml(html);
        setIsOpen(true);
    };

    return (
        <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center overflow-hidden bg-background text-foreground py-20">

            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-[-10%] m-auto h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]"></div>
            </div>

            <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 mb-16">
                <div className="mb-6 inline-flex items-center rounded-full border border-border/40 bg-background/50 backdrop-blur px-3 py-1 text-sm text-muted-foreground shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                    Templates Gallery
                </div>

                <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
                    Choose Your Style.
                </h1>

                <p className="max-w-[600px] text-lg text-muted-foreground">
                    Select one of the templates below to test the preview component in different modes.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 container px-4 max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm p-6 hover:border-border/80 transition-all hover:shadow-2xl hover:-translate-y-1"
                    >
                        <div className={cn("absolute top-0 left-0 w-full h-1", template.color)} />

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className={cn("p-2 rounded-lg bg-secondary/50 text-foreground")}>
                                    <LayoutTemplate size={20} />
                                </div>
                                <div className={cn("h-3 w-3 rounded-full", template.color)} />
                            </div>

                            <div>
                                <h3 className="font-bold text-xl">{template.name}</h3>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                    {template.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button
                                onClick={() => handlePreview(template.html)}
                                className="w-full group/btn"
                                variant="outline"
                            >
                                Preview Template
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        </div>

                        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none", template.color)} />
                    </div>
                ))}
            </div>

            <LandingPreview
                open={isOpen}
                onClose={() => setIsOpen(false)}
                htmlContent={currentHtml}
            />
        </div>
    );
}