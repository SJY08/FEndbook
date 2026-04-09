import { CSQuestions } from "@/features/cs/model/CSQuestion"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"
import { SectionHeader } from "@/shared/ui/SectionHeader"

/**
 * @description cs 설명 페이지
 */
function CSPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="CS" content="컴퓨터 과학 기초 개념과 이론" />

                <QuestionAccordion questions={CSQuestions} />
            </div>
        </div>
    )
}
export default CSPage
