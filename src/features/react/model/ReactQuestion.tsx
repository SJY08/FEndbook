import type { Question } from "@/shared/model/Question"

/**
 * @description react 질문 목록
 */
export const ReactQuestions: Question[] = [
    {
        id: "react-concept",
        question: "React의 핵심 개념은 무엇인가요?",
        answer: `React는 컴포넌트 기반 UI 라이브러리입니다.

핵심:
- 컴포넌트 기반 구조
- Virtual DOM
- 단방향 데이터 흐름

즉, UI를 상태 기반으로 선언적으로 관리합니다.`,
    },

    {
        id: "virtual-dom",
        question: "Virtual DOM이란 무엇인가요?",
        answer: `실제 DOM을 추상화한 가상의 DOM입니다.

동작:
- 변경 전/후 비교 (diffing)
- 최소한의 DOM 업데이트

장점:
- 성능 최적화
- 렌더링 비용 감소`,
    },

    {
        id: "reconciliation",
        question: "Reconciliation(재조정)이란 무엇인가요?",
        answer: `Virtual DOM을 비교하여 실제 DOM을 업데이트하는 과정입니다.

특징:
- diff 알고리즘 사용
- key를 통해 효율적인 비교

즉, 변경된 부분만 업데이트합니다.`,
    },

    {
        id: "component-lifecycle",
        question: "컴포넌트 생명주기에 대해 설명해주세요.",
        answer: `컴포넌트는 생성 → 업데이트 → 제거 과정을 거칩니다.

함수형 기준:
- mount → useEffect 실행
- update → 의존성 변경 시 실행
- unmount → cleanup 실행`,
    },

    {
        id: "useState",
        question: "useState는 어떻게 동작하나요?",
        answer: `상태를 관리하는 Hook입니다.

특징:
- 상태 변경 시 리렌더링 발생
- 비동기적으로 업데이트됨

즉, 상태 기반 UI를 가능하게 합니다.`,
    },

    {
        id: "useEffect",
        question: "useEffect는 언제 사용하나요?",
        answer: `부수 효과(side effect)를 처리할 때 사용합니다.

예:
- API 호출
- 이벤트 등록
- 타이머

의존성 배열에 따라 실행 시점이 결정됩니다.`,
    },

    {
        id: "useRef",
        question: "useRef는 무엇인가요?",
        answer: `값을 유지하거나 DOM에 접근할 때 사용합니다.

특징:
- 변경되어도 리렌더링 없음
- current로 접근

사용:
- DOM 참조
- 이전 값 저장`,
    },

    {
        id: "state-vs-props",
        question: "state와 props의 차이는 무엇인가요?",
        answer: `데이터 전달 방식의 차이입니다.

state:
- 내부 상태
- 변경 가능

props:
- 부모 → 자식 전달
- 읽기 전용

즉, props는 외부 데이터, state는 내부 데이터입니다.`,
    },

    {
        id: "lifting-state",
        question: "State Lifting은 무엇인가요?",
        answer: `공통 상태를 부모로 올리는 패턴입니다.

목적:
- 여러 컴포넌트 간 상태 공유

즉, 가장 가까운 공통 부모에서 관리합니다.`,
    },

    {
        id: "controlled-uncontrolled",
        question: "Controlled와 Uncontrolled 컴포넌트의 차이는 무엇인가요?",
        answer: `폼 상태 관리 방식입니다.

Controlled:
- React state로 관리

Uncontrolled:
- DOM이 직접 관리

실무에서는 Controlled를 더 많이 사용합니다.`,
    },

    {
        id: "memoization",
        question: "React에서 성능 최적화 방법은 무엇인가요?",
        answer: `불필요한 렌더링을 줄이는 것이 핵심입니다.

방법:
- React.memo
- useMemo
- useCallback

즉, 값/함수를 메모이제이션합니다.`,
    },

    {
        id: "key-prop",
        question: "key props는 왜 필요한가요?",
        answer: `리스트 렌더링 시 요소를 식별하기 위해 필요합니다.

역할:
- diffing 최적화
- 재사용 판단 기준

잘못된 key 사용 시 성능 저하 발생`,
    },

    {
        id: "context-api",
        question: "Context API는 언제 사용하나요?",
        answer: `전역 상태를 전달할 때 사용합니다.

예:
- 로그인 정보
- 테마

props drilling을 해결합니다.`,
    },

    {
        id: "custom-hook",
        question: "Custom Hook은 무엇인가요?",
        answer: `로직을 재사용하기 위한 Hook입니다.

특징:
- use로 시작
- 상태/로직 분리 가능

즉, 코드 재사용성과 가독성을 높입니다.`,
    },

    {
        id: "react-query",
        question: "서버 상태 관리는 어떻게 하나요?",
        answer: `React Query 같은 라이브러리를 사용합니다.

장점:
- 캐싱
- 자동 refetch
- 로딩/에러 관리

즉, 서버 상태를 효율적으로 관리할 수 있습니다.`,
    },
]
