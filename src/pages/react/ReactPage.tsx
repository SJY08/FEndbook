import { ReactQuestions } from "@/features/react/model/ReactQuestion"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"
import { SectionHeader } from "@/shared/ui/SectionHeader"

/**
 * @description react 설명 페이지
 */
function ReactPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="React" content="React의 핵심 개념과 실무 활용" />

                <QuestionAccordion questions={ReactQuestions} />
            </div>
        </div>
    )
}
export default ReactPage
