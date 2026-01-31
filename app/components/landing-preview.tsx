"use client";

import { useEffect, useState } from "react";
import { X, Smartphone, Monitor } from "lucide-react";
import { cn } from "@/app/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { toast } from "sonner";

interface LandingPreviewProps {
    open: boolean;
    onClose: () => void;
    htmlContent: string;
    title?: string;
}

export const LandingPreview = ({
                                   open,
                                   onClose,
                                   htmlContent,
                                   title = "Landing Page Preview"
                               }: LandingPreviewProps) => {
    const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (open) {
            const originalHtmlOverflow = document.documentElement.style.overflow;
            const originalBodyOverflow = document.body.style.overflow;
            document.documentElement.style.setProperty("overflow", "hidden", "important");
            document.body.style.setProperty("overflow", "hidden", "important");
            return () => {
                document.documentElement.style.overflow = originalHtmlOverflow;
                document.body.style.overflow = originalBodyOverflow;
            };
        }
    }, [open]);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'PREVIEW_LINK_CLICK') {
                toast.info("Links are disabled in preview mode", {
                    description: `Target: ${event.data.href}`,
                    duration: 2000,
                });
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const interceptScript = `
        <script>
            document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (link) {
                    e.preventDefault();
                    window.parent.postMessage({ 
                        type: 'PREVIEW_LINK_CLICK', 
                        href: link.href 
                    }, '*');
                }
            }, true);
        </script>
    `;

    const scrollbarStyles = `
        <style>
            html, body { margin: 0 !important; padding: 0 !important; width: 100%; height: 100%; }
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        </style>
    `;

    if (!mounted) return null;

    let srcDoc = '';
    const safeHtml = htmlContent || '';
    const isFullHtml = safeHtml.trim().toLowerCase().startsWith('<!doctype') ||
        safeHtml.trim().toLowerCase().startsWith('<html');

    if (isFullHtml) {
        srcDoc = safeHtml;
        if (srcDoc.includes('</head>')) {
            srcDoc = srcDoc.replace('</head>', `${scrollbarStyles}</head>`);
        }
        if (srcDoc.includes('</body>')) {
            srcDoc = srcDoc.replace('</body>', `${interceptScript}</body>`);
        } else {
            srcDoc += interceptScript;
        }
    } else {
        srcDoc = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://cdn.tailwindcss.com"></script>
                ${scrollbarStyles}
            </head>
            <body>
                ${safeHtml || '<div style="display:flex;height:100vh;align-items:center;justify-content:center;color:#666;">Preview not available</div>'}
                ${interceptScript}
            </body>
            </html>
        `;
    }

    return (
        <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
            <DialogContent className="sm:max-w-none max-w-none w-screen h-screen p-0 m-0 border-none shadow-none bg-transparent flex flex-col items-center justify-center outline-none sm:rounded-none data-[state=open]:slide-in-from-bottom-0">
                <DialogHeader className="sr-only">
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>Device preview mode</DialogDescription>
                </DialogHeader>

                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose} />

                <div className="relative z-50 flex items-center gap-3 p-2 mb-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center bg-background/95 backdrop-blur border p-1 rounded-full shadow-lg">
                        <Button
                            variant={device === 'desktop' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setDevice('desktop')}
                            className="rounded-full px-4 h-8 text-xs font-medium"
                        >
                            <Monitor className="w-3.5 h-3.5 mr-2" />
                            Desktop
                        </Button>
                        <Button
                            variant={device === 'mobile' ? 'secondary' : 'ghost'}
                            size="sm"
                            onClick={() => setDevice('mobile')}
                            className="rounded-full px-4 h-8 text-xs font-medium"
                        >
                            <Smartphone className="w-3.5 h-3.5 mr-2" />
                            Mobile
                        </Button>
                    </div>
                </div>

                <Button
                    onClick={onClose}
                    variant="outline"
                    className="absolute top-4 right-4 z-50 rounded-full w-10 h-10 p-0 bg-background/50 hover:bg-background border-white/10"
                >
                    <X size={18} />
                </Button>

                <div
                    className={cn(
                        "relative z-50 transition-all duration-500 ease-in-out bg-white overflow-hidden shadow-2xl",
                        device === 'mobile'
                            ? "w-[375px] h-[812px] rounded-[3rem] border-[8px] border-zinc-900"
                            : "w-[95vw] h-[85vh] rounded-xl border border-border"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {device === 'mobile' && (
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-[24px] w-[90px] bg-black rounded-full z-10 pointer-events-none" />
                    )}
                    <iframe
                        title="Preview"
                        srcDoc={srcDoc}
                        className="w-full h-full border-none bg-white block"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};