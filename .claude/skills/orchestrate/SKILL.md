# Orchestrate Skill — Full Web App Lifecycle Pipeline

## Trigger Phrases
- "서비스 만들어줘", "웹앱 만들어줘"
- "풀스택으로 만들어줘", "처음부터 끝까지 만들어줘"

## Overview

이 스킬은 Next.js + FSD 아키텍처 기반 웹 서비스의 **전체 라이프사이클**을 9개의 AI 에이전트와 8개의 스킬을 통해 자동으로 오케스트레이션한다.

**Tech Stack**: Next.js 15 + FSD + Tailwind CSS 4 + Zustand + TanStack Query + Axios + TypeScript

### Harness Design Principles (Anthropic)

1. **Context Reset > Compaction** — Phase 간 `_workspace/`에 산출물 저장 후 컨텍스트 리셋
2. **Sprint 기반 분해** — Phase 4에서 feature 단위 스프린트
3. **독립 Evaluator** — Generator와 Evaluator 분리
4. **Hard Threshold** — pass/fail 경성 기준
5. **디자인 4축 평가** — Design Quality, Originality, Craft, Functionality

---

## Supervisor 메커니즘

`_workspace/pipeline-status.md`를 생성하고 매 Phase 전환 시 업데이트한다.

### Go/No-Go 판단

```
Go: 산출물 존재 + Quick QA PASS + Error 없음
No-Go: 산출물 누락 → 재실행 / QA FAIL → 수정 후 재검증
```

---

## Workspace

```
_workspace/
├── idea/              # Phase 1 출력
├── plan/              # Phase 2 출력
├── design/            # Phase 3 출력
├── implementation/    # Phase 4 출력
└── qa/                # Phase 5 출력
```

---

## Full Pipeline

### Phase 1: Ideation — `idea-researcher`
**스킬**: `/ideate`
**출력**: `_workspace/idea/`

### Phase 2: Planning — `product-planner`
**스킬**: `/plan-app`
**출력**: `_workspace/plan/`

### Phase 2.5: Spec Planning — `spec-planner`
**출력**: `docs/specs/`

### Phase 3: Design — `design-architect`
**스킬**: `/design-system`
**출력**: `_workspace/design/`

Tasks:
```
0. Tailwind CSS 설정 검증 (GATE)
1. 커스텀 테마 설계
2. 공통 UI 컴포넌트 스펙
3. 페이지 레이아웃 와이어프레임
4. 반응형 브레이크포인트 설계
```

### Phase 4: Implementation (순차 + Quick QA)

**Sprint Contract**: 각 서브스텝 전에 `_workspace/implementation/sprint-contract-{step}.md` 작성.

**Spec Task 추적**: 구현 시 `docs/specs/` 체크박스 업데이트.

#### Phase 4a: Feature Builder — `feature-builder`
**스킬**: `/create-feature`, `/create-entity`
→ Quick QA (typecheck + lint)

#### Phase 4b: API Integrator — `api-integrator`
→ Quick QA (typecheck + lint)

#### Phase 4c: UI Developer — `ui-developer`
**스킬**: `/create-page`
→ Quick QA (typecheck + lint + build)

### Phase 5: QA (병렬)

#### 5a: QA Reviewer — `qa-reviewer`
- TypeScript strict, FSD 규칙, ESLint, 보안

#### 5b: App Inspector — `app-inspector`
**스킬**: `/inspect-app`
- 기능/UX/디자인/접근성/SEO/성능

### Phase 6: Iteration — Pivot vs Refine (최대 3회)

```
점수 상승 → Refine
점수 정체/하락 → Pivot
3회 후 미해결 → // TODO 마킹 + unresolved.md
```

### Phase 7: Deployment

```
1. npm run build (프로덕션 빌드 검증)
2. Vercel / 자체 서버 배포
3. 도메인 연결 및 환경변수 설정
```

---

## Pipeline Diagram

```
[사용자 요청]
      │
      ▼
┌──────────────────────────┐
│  Phase 1: Ideation       │  idea-researcher  (/ideate)
└────────────┬─────────────┘
             │ _workspace/idea/
             ▼
┌──────────────────────────┐
│  Phase 2: Planning       │  product-planner  (/plan-app)
└────────────┬─────────────┘
             │ _workspace/plan/
             ▼
┌──────────────────────────┐
│  Phase 2.5: Spec Planning│  spec-planner (docs/specs/)
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Phase 3: Design         │  design-architect (/design-system)
└────────────┬─────────────┘
             │ _workspace/design/
             ▼
┌──────────────────────────────────────────────┐
│  Phase 4: Implementation (순차 + Quick QA)   │
│  4a feature-builder → 4a-QA                  │
│     → 4b api-integrator → 4b-QA             │
│        → 4c ui-developer → 4c-QA            │
└────────────┬─────────────────────────────────┘
             ▼
┌──────────────────────────────────────────────┐
│  Phase 5: QA (병렬)                          │
│  5a qa-reviewer  ◄──────►  5b app-inspector  │
└────────────┬─────────────────────────────────┘
             ▼
┌──────────────────────────┐
│  Phase 6: Iteration      │  Fix Loop (최대 3회)
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Phase 7: Deployment     │  Vercel / Self-hosted
└──────────────────────────┘
```

---

## Conventions (전 에이전트 공통)

```typescript
// 타입 네이밍
interface IUser { ... }     // Interface → I 접두사
type TApiResponse = ...     // Type → T 접두사
enum EStatus { ... }        // Enum → E 접두사

// import alias
import { Button } from '@shared/ui';
import { useAuth } from '@features/auth';

// no any
```

---

## Inspired By

- **[Anthropic Harness Design](https://www.anthropic.com/engineering/harness-design-long-running-apps)**
- **[revfactory/harness](https://github.com/revfactory/harness)**
- **[Feature-Sliced Design](https://feature-sliced.design/)**
