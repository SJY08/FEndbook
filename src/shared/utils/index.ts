import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @description tailwind 클래스네임 깔끔하게 하려고 쓰는 유틸
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
