import type { Question } from "@/shared/model/Question"

/**
 * @description javascript 질문 목록
 */
export const JavascriptQuestions: Question[] = [
    {
        id: "event-loop",
        question: "이벤트 루프(Event Loop)에 대해 설명해주세요.",
        answer: `이벤트 루프는 자바스크립트의 비동기 처리를 담당하는 핵심 메커니즘입니다.

구조:
- Call Stack: 실행 중인 함수
- Web APIs: 비동기 작업 처리
- Callback Queue: 콜백 대기열

동작:
1. Call Stack이 비면
2. Queue에 있는 콜백을 Stack으로 이동

즉, 싱글 스레드 환경에서 비동기를 가능하게 합니다.`,
    },

    {
        id: "closure",
        question: "클로저(Closure)는 무엇인가요?",
        answer: `클로저는 함수가 선언될 당시의 스코프를 기억하는 개념입니다.

특징:
- 외부 함수의 변수에 접근 가능
- 상태 유지 가능

사용 예:
- 데이터 은닉
- 상태 관리`,
        codeExample: {
            language: "javascript",
            code: `function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}`,
        },
    },

    {
        id: "this",
        question: "this의 동작 방식에 대해 설명해주세요.",
        answer: `this는 호출 방식에 따라 값이 결정됩니다.

규칙:
- 일반 함수 → window (strict mode에서는 undefined)
- 메서드 → 객체
- 생성자 → 인스턴스
- arrow function → 상위 스코프의 this

즉, 선언이 아닌 호출 시점에 결정됩니다.`,
    },

    {
        id: "promise",
        question: "Promise와 async/await의 차이는 무엇인가요?",
        answer: `둘 다 비동기 처리를 위한 방식입니다.

Promise:
- then, catch 체이닝
- 가독성 떨어질 수 있음

async/await:
- 동기 코드처럼 작성 가능
- try/catch로 에러 처리

실무에서는 async/await을 더 많이 사용합니다.`,
    },

    {
        id: "debounce-throttle",
        question: "Debounce와 Throttle의 차이는 무엇인가요?",
        answer: `둘 다 이벤트 최적화 기법입니다.

Debounce:
- 마지막 이벤트만 실행
- 검색 입력창

Throttle:
- 일정 간격마다 실행
- 스크롤, 리사이즈`,
    },

    {
        id: "deep-shallow-copy",
        question: "얕은 복사와 깊은 복사의 차이는 무엇인가요?",
        answer: `얕은 복사:
- 참조값만 복사
- 원본 변경 시 영향 있음

깊은 복사:
- 완전히 새로운 객체 생성
- 독립적인 데이터

예:
- 얕은: spread, Object.assign
- 깊은: structuredClone, JSON.parse(JSON.stringify())`,
    },

    {
        id: "hoisting",
        question: "호이스팅(Hoisting)에 대해 설명해주세요.",
        answer: `호이스팅은 변수와 함수 선언이 코드 상단으로 끌어올려지는 것처럼 동작하는 현상입니다.

특징:
- var → undefined 초기화
- let, const → TDZ 존재
- 함수 선언문 → 전체 호이스팅`,
    },

    {
        id: "prototype",
        question: "프로토타입(Prototype)에 대해 설명해주세요.",
        answer: `자바스크립트는 프로토타입 기반 상속을 사용합니다.

특징:
- 객체는 prototype을 통해 상속
- 메서드 공유 가능
- 메모리 효율적

예:
- Array.prototype
- Object.prototype`,
    },

    {
        id: "event-delegation",
        question: "이벤트 위임(Event Delegation)은 무엇인가요?",
        answer: `부모 요소에 이벤트를 등록해 자식 요소 이벤트를 처리하는 방식입니다.

장점:
- 성능 최적화
- 동적 요소 대응 가능

원리:
- 이벤트 버블링 활용`,
    },

    {
        id: "call-apply-bind",
        question: "call, apply, bind의 차이는 무엇인가요?",
        answer: `this를 명시적으로 바인딩하는 함수입니다.

call:
- 즉시 실행
- 인자 개별 전달

apply:
- 즉시 실행
- 배열로 전달

bind:
- 함수 반환
- 나중에 실행`,
    },

    {
        id: "map-filter-reduce",
        question: "map, filter, reduce의 차이를 설명해주세요.",
        answer: `배열을 다루는 대표적인 함수형 메서드입니다.

map:
- 요소 변환

filter:
- 조건에 맞는 요소만 반환

reduce:
- 하나의 값으로 누적`,
    },

    {
        id: "undefined-null",
        question: "undefined와 null의 차이는 무엇인가요?",
        answer: `undefined:
- 값이 할당되지 않음

null:
- 의도적으로 비어있음

즉, undefined는 시스템, null은 개발자의 의도입니다.`,
    },

    {
        id: "strict-mode",
        question: "strict mode(use strict)는 무엇인가요?",
        answer: `자바스크립트의 엄격 모드입니다.

특징:
- 에러를 더 엄격하게 체크
- this가 undefined
- 암묵적 전역 변수 금지

안전한 코드 작성을 도와줍니다.`,
    },

    {
        id: "module-system",
        question: "ES Module과 CommonJS의 차이는 무엇인가요?",
        answer: `모듈 시스템의 차이입니다.

ES Module:
- import/export
- 정적 분석 가능
- 브라우저 지원

CommonJS:
- require/module.exports
- 동적 로딩
- Node.js 기반`,
    },

    {
        id: "memory-leak",
        question: "메모리 누수(Memory Leak)는 어떻게 발생하고 어떻게 해결하나요?",
        answer: `더 이상 사용하지 않는 메모리가 해제되지 않는 현상입니다.

원인:
- 이벤트 리스너 미제거
- 클로저 참조 유지
- 타이머 미정리

해결:
- removeEventListener
- clearTimeout, clearInterval
- 참조 해제`,
    },
]
