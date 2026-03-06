import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

interface ThemeState {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

/**
 * @description 전역 테마 스토어
 */
export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: "dark",
            toggleTheme: () =>
                set((state) => ({
                    theme: state.theme === "dark" ? "light" : "dark",
                })),
            setTheme: (theme) => set({ theme }),
        }),
        { name: "fendbook-theme" }
    )
)
