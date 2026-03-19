import { BrowserQuestions } from "@/features/browser/model/BrowserQuestion"
import { BrowserHeader } from "@/features/browser/ui/BrowserHeader"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"

/**
 * @description Browser 설명 페이지
 */
function BrowserPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BrowserHeader />

                <QuestionAccordion questions={BrowserQuestions} />
            </div>
        </div>
    )
}
export default BrowserPage
