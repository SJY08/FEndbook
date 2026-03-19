import { ReactQuestions } from "@/features/react/model/ReactQuestion"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"
import { ReactHeader } from "@/features/react/ui/ReactHeader"

/**
 * @description react 설명 페이지
 */
function ReactPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ReactHeader />

                <QuestionAccordion questions={ReactQuestions} />
            </div>
        </div>
    )
}
export default ReactPage
