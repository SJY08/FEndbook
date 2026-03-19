import type { Question } from "@/shared/model/Question"

/**
 * @description 브라우저 질문 목록
 */
export const BrowserQuestions: Question[] = [
    {
        id: "browser-rendering",
        question: "브라우저 렌더링 과정에 대해 설명해주세요.",
        answer: `브라우저는 HTML을 화면에 그리기까지 다음 과정을 거칩니다.

1. HTML 파싱 → DOM 생성
2. CSS 파싱 → CSSOM 생성
3. DOM + CSSOM → Render Tree 생성
4. Layout (Reflow)
5. Paint (Repaint)

즉, 구조 → 스타일 → 배치 → 그리기 순서로 진행됩니다.`,
    },

    {
        id: "reflow-repaint",
        question: "Reflow와 Repaint의 차이점은 무엇인가요?",
        answer: `Reflow는 레이아웃 계산, Repaint는 화면 다시 그리기입니다.

Reflow:
- 요소 크기, 위치 변경
- 비용 큼

Repaint:
- 색상 등 시각 변경
- 비교적 가벼움

Reflow가 발생하면 Repaint도 함께 발생합니다.`,
    },

    {
        id: "critical-rendering-path",
        question: "Critical Rendering Path는 무엇인가요?",
        answer: `브라우저가 화면을 그리기까지의 최적 경로입니다.

구성:
- DOM 생성
- CSSOM 생성
- Render Tree
- Layout
- Paint

최적화 방법:
- CSS 최소화
- JS blocking 제거
- 리소스 로딩 최적화`,
    },

    {
        id: "defer-async",
        question: "script의 async와 defer의 차이는 무엇인가요?",
        answer: `둘 다 스크립트 로딩 최적화 방식입니다.

async:
- 다운로드 후 바로 실행
- 순서 보장 안됨

defer:
- HTML 파싱 후 실행
- 순서 보장됨

실무에서는 대부분 defer를 사용합니다.`,
    },

    {
        id: "web-storage",
        question: "localStorage와 sessionStorage, cookie의 차이는 무엇인가요?",
        answer: `브라우저 저장소의 차이입니다.

localStorage:
- 영구 저장
- 용량 큼

sessionStorage:
- 탭 종료 시 삭제

cookie:
- 서버와 자동 전송
- 용량 작음
- 만료 시간 설정 가능`,
    },

    {
        id: "same-origin-policy",
        question: "Same-Origin Policy와 CORS에 대해 설명해주세요.",
        answer: `Same-Origin Policy는 다른 출처 간 요청을 제한하는 보안 정책입니다.

CORS:
- 서버가 허용하면 요청 가능
- Access-Control-Allow-Origin 헤더 사용

즉, SOP를 완화하기 위한 메커니즘입니다.`,
    },

    {
        id: "event-bubbling-capturing",
        question: "이벤트 버블링과 캡처링에 대해 설명해주세요.",
        answer: `이벤트 전파 방식입니다.

캡처링:
- 부모 → 자식

버블링:
- 자식 → 부모

기본은 버블링이며,
addEventListener의 옵션으로 제어 가능합니다.`,
    },

    {
        id: "event-loop-browser",
        question: "브라우저에서 이벤트 루프는 어떻게 동작하나요?",
        answer: `자바스크립트의 비동기 처리를 담당합니다.

구성:
- Call Stack
- Web APIs
- Task Queue

동작:
- Stack이 비면 Queue에서 작업을 가져옴

이를 통해 싱글 스레드에서도 비동기 처리가 가능합니다.`,
    },

    {
        id: "layout-thrashing",
        question: "Layout Thrashing이란 무엇인가요?",
        answer: `DOM 읽기와 쓰기를 반복하면서 Reflow가 과도하게 발생하는 현상입니다.

문제:
- 성능 저하

해결:
- 읽기/쓰기 분리
- requestAnimationFrame 사용`,
    },

    {
        id: "gpu-rendering",
        question: "GPU 가속은 언제 사용되나요?",
        answer: `transform, opacity 같은 속성은 GPU에서 처리됩니다.

장점:
- 성능 향상
- 부드러운 애니메이션

반면 layout 속성은 CPU에서 처리됩니다.`,
    },

    {
        id: "preload-prefetch",
        question: "preload와 prefetch의 차이는 무엇인가요?",
        answer: `리소스 로딩 전략입니다.

preload:
- 현재 페이지에 필요
- 우선순위 높음

prefetch:
- 미래에 필요
- 우선순위 낮음`,
    },

    {
        id: "http-cache",
        question: "브라우저 캐싱 전략에 대해 설명해주세요.",
        answer: `리소스를 재사용하기 위한 방법입니다.

종류:
- 강력 캐시 (Cache-Control)
- 협상 캐시 (ETag, Last-Modified)

목적:
- 네트워크 비용 절감
- 성능 향상`,
    },

    {
        id: "cookie-secure",
        question: "쿠키 보안 속성에 대해 설명해주세요.",
        answer: `쿠키 보안을 강화하는 옵션입니다.

Secure:
- HTTPS에서만 전송

HttpOnly:
- JS 접근 불가

SameSite:
- CSRF 공격 방지`,
    },

    {
        id: "spa-routing",
        question: "SPA에서 라우팅이 동작하는 원리는 무엇인가요?",
        answer: `페이지를 새로고침하지 않고 URL만 변경합니다.

방식:
- History API (pushState)
- hash (#)

즉, 브라우저 주소만 바꾸고 JS로 화면을 갱신합니다.`,
    },

    {
        id: "service-worker",
        question: "Service Worker는 무엇인가요?",
        answer: `브라우저에서 동작하는 백그라운드 스크립트입니다.

기능:
- 오프라인 지원
- 캐싱
- 푸시 알림

PWA 구현에 핵심 역할을 합니다.`,
    },
]
