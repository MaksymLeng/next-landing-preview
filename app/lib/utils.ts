import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Template = {
  id: string;
  name: string;
  description: string;
  color: string;
  html: string;
};