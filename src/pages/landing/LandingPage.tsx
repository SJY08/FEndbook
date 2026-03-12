import { AboutSection } from "@/features/landing/ui/sections/AboutSection"
import { CategoriesSection } from "@/features/landing/ui/sections/CategoriesSection"
import { CTASection } from "@/features/landing/ui/sections/CTASection"
import { HeroSection } from "@/features/landing/ui/sections/HeroSection"

/**
 * @description 렌딩 페이지
 */
const LandingPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-fuchsia-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <HeroSection delay={0} />

                <AboutSection delay={0.4} />

                <CategoriesSection delay={0.8} />

                <CTASection delay={1.2} />
            </div>
        </div>
    )
}

export default LandingPage
