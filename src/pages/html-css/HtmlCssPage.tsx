import { htmlCssQuestions } from "@/features/html-css/model/HtmlCssQuestion"
import { QuestionAccordion } from "@/shared/ui/QuestionAccordion"
import { SectionHeader } from "@/shared/ui/SectionHeader"

/**
 * @description html, css 설명 페이지
 */
function HtmlCssPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Html/Css" content="마크업과 스타일링의 기초부터 고급 개념까지" />

                <QuestionAccordion questions={htmlCssQuestions} />
            </div>
        </div>
    )
}
export default HtmlCssPage
