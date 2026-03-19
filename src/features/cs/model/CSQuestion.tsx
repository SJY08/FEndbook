import type { Question } from "@/shared/model/Question"

/**
 * @description cs 질문 목록
 */
export const CSQuestions: Question[] = [
    {
        id: "process-thread",
        question: "프로세스와 스레드의 차이는 무엇인가요?",
        answer: `프로세스는 실행 중인 프로그램이고, 스레드는 그 안에서 실행되는 작업 단위입니다.

프로세스:
- 독립된 메모리 공간
- 생성 비용 큼

스레드:
- 메모리 공유
- 생성 비용 적음

즉, 스레드는 프로세스 내부의 실행 흐름입니다.`,
    },

    {
        id: "sync-async",
        question: "동기와 비동기의 차이는 무엇인가요?",
        answer: `작업 처리 방식의 차이입니다.

동기:
- 작업이 끝날 때까지 대기

비동기:
- 작업을 요청하고 바로 다음 작업 수행

즉, 비동기는 효율적인 자원 사용을 가능하게 합니다.`,
    },

    {
        id: "blocking-nonblocking",
        question: "Blocking과 Non-blocking의 차이는 무엇인가요?",
        answer: `제어권 반환 여부의 차이입니다.

Blocking:
- 작업 완료까지 기다림

Non-blocking:
- 바로 제어권 반환

비동기와 함께 자주 비교되는 개념입니다.`,
    },

    {
        id: "cpu-scheduling",
        question: "CPU 스케줄링이란 무엇인가요?",
        answer: `여러 프로세스 중 어떤 것을 CPU에 할당할지 결정하는 방식입니다.

대표 알고리즘:
- FCFS
- SJF
- Round Robin

목표:
- 응답 시간 최소화
- CPU 활용도 극대화`,
    },

    {
        id: "context-switching",
        question: "컨텍스트 스위칭(Context Switching)이란 무엇인가요?",
        answer: `CPU가 한 프로세스에서 다른 프로세스로 전환되는 과정입니다.

특징:
- 상태 저장/복원 필요
- 비용 발생

즉, 멀티태스킹을 위한 핵심 과정입니다.`,
    },

    {
        id: "deadlock",
        question: "데드락(Deadlock)은 무엇인가요?",
        answer: `프로세스들이 서로 자원을 기다리며 무한 대기 상태에 빠지는 현상입니다.

조건:
- 상호 배제
- 점유 대기
- 비선점
- 순환 대기

해결:
- 예방, 회피, 탐지`,
    },

    {
        id: "memory-structure",
        question: "메모리 구조(스택, 힙)에 대해 설명해주세요.",
        answer: `프로그램 실행 시 메모리는 여러 영역으로 나뉩니다.

Stack:
- 함수 호출
- LIFO 구조
- 빠름

Heap:
- 동적 할당
- 참조 타입 저장
- 상대적으로 느림`,
    },

    {
        id: "garbage-collection",
        question: "가비지 컬렉션(GC)은 무엇인가요?",
        answer: `사용하지 않는 메모리를 자동으로 해제하는 기능입니다.

방식:
- Mark and Sweep

장점:
- 메모리 관리 자동화

단점:
- 성능 오버헤드`,
    },

    {
        id: "http-https",
        question: "HTTP와 HTTPS의 차이는 무엇인가요?",
        answer: `웹 통신 프로토콜입니다.

HTTP:
- 평문 통신

HTTPS:
- 암호화 통신 (SSL/TLS)

즉, HTTPS는 보안이 강화된 HTTP입니다.`,
    },

    {
        id: "tcp-udp",
        question: "TCP와 UDP의 차이는 무엇인가요?",
        answer: `전송 계층 프로토콜입니다.

TCP:
- 연결 지향
- 신뢰성 높음

UDP:
- 비연결
- 속도 빠름

즉, 안정성 vs 속도의 차이입니다.`,
    },

    {
        id: "rest-api",
        question: "REST API란 무엇인가요?",
        answer: `자원을 URL로 표현하는 API 설계 방식입니다.

특징:
- HTTP 메서드 사용 (GET, POST 등)
- Stateless

즉, 일관된 구조로 API를 설계할 수 있습니다.`,
    },

    {
        id: "dns",
        question: "DNS는 무엇인가요?",
        answer: `도메인을 IP 주소로 변환하는 시스템입니다.

예:
- google.com → IP 주소

즉, 사람이 읽을 수 있는 주소를 컴퓨터가 이해하도록 변환합니다.`,
    },

    {
        id: "load-balancing",
        question: "로드 밸런싱이란 무엇인가요?",
        answer: `서버 트래픽을 여러 서버로 분산하는 기술입니다.

목적:
- 성능 향상
- 장애 대응

즉, 시스템의 안정성과 확장성을 높입니다.`,
    },

    {
        id: "database-index",
        question: "데이터베이스 인덱스(Index)는 무엇인가요?",
        answer: `검색 속도를 향상시키는 자료구조입니다.

장점:
- 조회 속도 증가

단점:
- 쓰기 성능 저하
- 추가 메모리 사용`,
    },

    {
        id: "normalization",
        question: "정규화(Normalization)는 무엇인가요?",
        answer: `데이터 중복을 최소화하는 설계 기법입니다.

목적:
- 데이터 무결성 유지
- 이상 현상 방지

대표 단계:
- 1NF, 2NF, 3NF`,
    },
]
