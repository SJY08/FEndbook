/**
 * @description 질문 아코디언 프롭스 타입
 */
export interface Question {
    id: string
    question: string
    answer: string
    codeExample?: {
        language: string
        code: string
    }
}
