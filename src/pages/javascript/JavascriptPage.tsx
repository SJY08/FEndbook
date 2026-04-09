import { JavascriptQuestions } from "@/features/javascript/model/JavascriptQuestion"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"
import { SectionHeader } from "@/shared/ui/SectionHeader"

/**
 * @description javascript 설명 페이지
 */
function JavascriptPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="JavaScript" content="JavaScript 핵심 개념과 동작 원리" />

                <QuestionAccordion questions={JavascriptQuestions} />
            </div>
        </div>
    )
}
export default JavascriptPage
