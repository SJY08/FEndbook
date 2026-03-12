import type { Question } from "@/shared/model/Question"

/**
 * @description html 및 css 질문 목록
 */
export const htmlCssQuestions: Question[] = [
    {
        id: "reflow-repaint",
        question: "Reflow와 Repaint의 차이점은 무엇인가요?",
        answer: `Reflow와 Repaint는 브라우저 렌더링 과정에서 발생하는 작업입니다.

Reflow (Layout):
- DOM 변경이나 요소 크기/위치 변경 시 발생
- 전체 레이아웃을 다시 계산
- 비용이 큰 작업

Repaint:
- 색상, 배경 등 시각적 변경 시 발생
- 레이아웃 변경 없이 화면만 다시 그림

성능 최적화:
- DOM 변경 최소화
- class 변경으로 스타일 변경
- layout thrashing 방지`,
        codeExample: {
            language: "css",
            code: `/* repaint */
.box{
  background:red;
}

/* reflow */
.box{
  width:200px;
}`,
        },
    },

    {
        id: "display-none-visibility",
        question: "display:none과 visibility:hidden의 차이는 무엇인가요?",
        answer: `두 속성 모두 요소를 숨기지만 동작 방식이 다릅니다.

display:none
- 요소가 DOM에서 제거된 것처럼 동작
- 공간도 차지하지 않음
- Reflow 발생

visibility:hidden
- 요소는 보이지 않지만 공간은 유지
- Repaint만 발생

사용 기준:
- 완전히 제거 → display:none
- 공간 유지 → visibility:hidden`,
    },

    {
        id: "inline-block",
        question: "inline, block, inline-block의 차이를 설명해주세요.",
        answer: `display 속성에 따라 요소의 레이아웃 동작이 달라집니다.

block
- 한 줄 전체 차지
- width, height 설정 가능
- div, section 등

inline
- 콘텐츠 크기만큼 차지
- width, height 설정 불가
- span, a 등

inline-block
- inline처럼 흐르지만
- width, height 설정 가능`,
    },

    {
        id: "z-index",
        question: "z-index가 동작하지 않는 경우는 언제인가요?",
        answer: `z-index는 position 속성이 설정된 요소에서만 동작합니다.

조건:
- position: relative
- position: absolute
- position: fixed
- position: sticky

또한 stacking context가 형성되면 부모 기준으로 계산됩니다.

stacking context 생성 예:
- position + z-index
- opacity < 1
- transform`,
    },

    {
        id: "overflow",
        question: "overflow 속성의 종류와 사용 사례를 설명해주세요.",
        answer: `overflow는 콘텐츠가 컨테이너를 넘칠 때 처리 방법을 정의합니다.

종류:
visible: 기본값
hidden: 넘치는 부분 숨김
scroll: 항상 스크롤 생성
auto: 필요할 때만 스크롤

사용 예:
- 스크롤 영역
- 카드 UI
- 이미지 잘라내기`,
    },

    {
        id: "vh-vw",
        question: "vh, vw 단위는 무엇인가요?",
        answer: `vh와 vw는 viewport 기반 단위입니다.

vh
- viewport height의 1%

vw
- viewport width의 1%

예:
100vh → 화면 전체 높이

사용 예:
- 풀스크린 섹션
- hero 영역
- 반응형 레이아웃`,
    },

    {
        id: "rem-em",
        question: "rem과 em의 차이는 무엇인가요?",
        answer: `rem과 em은 모두 상대 단위입니다.

em
- 부모 요소 font-size 기준

rem
- root(html) font-size 기준

차이점:
em → 중첩될수록 계산 복잡
rem → 일관된 크기 유지

그래서 대부분 rem을 선호합니다.`,
    },

    {
        id: "css-specificity",
        question: "CSS Specificity(명시도)에 대해 설명해주세요.",
        answer: `CSS Specificity는 어떤 스타일이 우선 적용될지 결정하는 규칙입니다.

우선순위:

inline style
id selector
class selector
element selector

예:
#id > .class > div

!important는 모든 규칙보다 우선하지만
남용하면 유지보수가 어려워집니다.`,
    },

    {
        id: "pseudo-class",
        question: "Pseudo-class와 Pseudo-element의 차이는 무엇인가요?",
        answer: `Pseudo-class
- 요소의 상태를 선택
- :

Pseudo-element
- 요소의 특정 부분 선택
- ::

예:

Pseudo-class
:hover
:focus
:first-child

Pseudo-element
::before
::after
::placeholder`,
    },

    {
        id: "before-after",
        question: "::before와 ::after는 언제 사용하나요?",
        answer: `::before와 ::after는 요소 앞이나 뒤에 가상 콘텐츠를 삽입할 때 사용합니다.

특징:
- DOM에 실제로 존재하지 않음
- content 속성이 필요

사용 예:
- 아이콘
- 장식 요소
- clearfix`,
    },

    {
        id: "object-fit",
        question: "object-fit 속성은 무엇인가요?",
        answer: `object-fit은 이미지나 비디오가 컨테이너에 맞게 표시되는 방식을 정의합니다.

종류:
fill
contain
cover
none
scale-down

가장 많이 사용되는 값:

cover
→ 영역을 꽉 채우되 비율 유지`,
    },

    {
        id: "aspect-ratio",
        question: "aspect-ratio 속성은 무엇인가요?",
        answer: `aspect-ratio는 요소의 가로세로 비율을 유지하도록 설정하는 속성입니다.

예:
16 / 9

사용 예:
- 유튜브 영상
- 카드 UI
- 이미지 썸네일

padding hack 없이 비율 유지가 가능합니다.`,
    },

    {
        id: "css-variable",
        question: "CSS 변수(Custom Properties)는 무엇인가요?",
        answer: `CSS 변수는 스타일 값을 재사용할 수 있게 하는 기능입니다.

장점:
- 테마 관리
- 유지보수 향상
- 동적 스타일 변경

특히 다크모드 구현에 많이 사용됩니다.`,
        codeExample: {
            language: "css",
            code: `:root{
  --primary-color:#3b82f6;
}

.button{
  background:var(--primary-color);
}`,
        },
    },

    {
        id: "gpu-animation",
        question: "CSS 애니메이션 성능 최적화 방법은 무엇인가요?",
        answer: `성능 좋은 애니메이션을 위해 GPU 가속 속성을 사용합니다.

추천 속성:
transform
opacity

비추천:
width
height
margin
top

이유:
layout 계산이 발생하기 때문입니다.`,
    },

    {
        id: "flex-vs-grid",
        question: "Flexbox와 Grid를 언제 각각 사용하는 것이 좋나요?",
        answer: `Flexbox와 Grid는 목적이 다릅니다.

Flexbox
- 1차원 레이아웃
- 한 방향 정렬
- nav, 리스트

Grid
- 2차원 레이아웃
- 행과 열 동시 제어
- 페이지 레이아웃

실무에서는 둘을 함께 사용하는 경우가 많습니다.`,
    },
]
