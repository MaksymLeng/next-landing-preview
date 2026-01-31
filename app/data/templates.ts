import  {Iphone_ART_HTML} from '@/app/examples/iphome-template'
import {jacketTemplate} from "@/app/examples/jacket-template";
import { POP_ART_HTML } from '@/app/examples/pop-art-template';
import {Template} from "@/app/lib/utils";

export const templates: Template[] = [
    {
        id: "pop-art-lamp",
        name: "Pop Art Lamp",
        description: "A bright, bold style with high contrast and comic book effects for gadgets.",
        color: "bg-yellow-400",
        html: POP_ART_HTML,
    },
    {
        id: "iphone-pro",
        name: "iPhone 17 Pro",
        description: "A cinematic landing page with a dark theme, glitch headlines, and premium presentation.",
        color: "bg-orange-500",
        html: Iphone_ART_HTML,
    },
    {
        id: "tech-jacket",
        name: "Cyber Techwear",
        description: "Futuristic e-commerce design with neon elements and technical aesthetics.",
        color: "bg-cyan-400",
        html: jacketTemplate,
    }
];