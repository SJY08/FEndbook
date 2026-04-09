import { BrowserQuestions } from "@/features/browser/model/BrowserQuestion"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"
import { SectionHeader } from "@/shared/ui/SectionHeader"

/**
 * @description Browser 설명 페이지
 */
function BrowserPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="브라우저" content="브라우저의 동작 원리와 웹 성능 최적화" />

                <QuestionAccordion questions={BrowserQuestions} />
            </div>
        </div>
    )
}
export default BrowserPage
