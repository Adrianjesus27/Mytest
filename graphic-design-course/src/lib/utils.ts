import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Snippet } from "svelte";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type WithElementRef<T = HTMLElement> = T & {
	ref?: HTMLElement | null;
    class?: string;
    children?: Snippet;
};

export type WithoutChild<T> = Omit<T, "child" | "children"> & {
    children?: Snippet;
    class?: string;
};