import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { motion } from "motion/react"
import { useTheme } from "next-themes"
import type { Question } from "../model/Question"

interface QuestionAccordionProps {
    questions: Question[]
}

/**
 * @description 면접 질문 아코디언 컴포넌트
 */
export function QuestionAccordion({ questions }: QuestionAccordionProps) {
    const { theme } = useTheme()

    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {questions.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                    <AccordionItem
                        value={item.id}
                        className="border border-slate-300 dark:border-slate-700 rounded-lg px-6 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="text-lg text-slate-900 dark:text-white">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="pt-2 space-y-4"
                            >
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                    {item.answer}
                                </p>
                                {item.codeExample && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-4"
                                    >
                                        <SyntaxHighlighter
                                            language={item.codeExample.language}
                                            style={theme === "dark" ? oneDark : vscDarkPlus}
                                            customStyle={{
                                                borderRadius: "0.5rem",
                                                fontSize: "0.875rem",
                                            }}
                                        >
                                            {item.codeExample.code}
                                        </SyntaxHighlighter>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AccordionContent>
                    </AccordionItem>
                </motion.div>
            ))}
        </Accordion>
    )
}
