import { Code2, BookOpen, Cpu, Globe, GraduationCap } from "lucide-react"

/**
 * @description 카테고리 리스트
 */
export const categories = [
    {
        path: "/html-css",
        title: "HTML/CSS",
        description: "시맨틱 태그, 박스 모델, Flex/Grid 등 마크업과 스타일링 기초",
        icon: Code2,
        color: "bg-orange-100 text-orange-600",
    },
    {
        path: "/javascript",
        title: "JavaScript",
        description: "실행 컨텍스트, 클로저, 비동기, 이벤트 루프 등 JS 핵심 개념",
        icon: BookOpen,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        path: "/react",
        title: "React",
        description: "Virtual DOM, Hooks, 상태관리 등 리액트 핵심 개념",
        icon: Cpu,
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        path: "/browser",
        title: "브라우저",
        description: "렌더링 과정, Reflow/Repaint, CSR/SSR 등 브라우저 동작 원리",
        icon: Globe,
        color: "bg-green-100 text-green-600",
    },
    {
        path: "/cs",
        title: "CS",
        description: "자료구조, 네트워크, 운영체제 등 컴퓨터 과학 기초",
        icon: GraduationCap,
        color: "bg-fuchsia-100 text-fuchsia-600",
    },
]
