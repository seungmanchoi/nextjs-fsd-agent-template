# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Next.js 15 + Feature-Sliced Design (FSD) architecture template with **AI Agent Harness** for full lifecycle web development with Claude Code.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4
- **Global State**: Zustand 5
- **Server State**: TanStack Query 5
- **Form & Validation**: React Hook Form 7 + Zod 3
- **API Client**: Axios (auto token refresh)
- **Animation**: Framer Motion 12
- **Lint & Format**: ESLint 9 + Prettier 3

## Harness Engineering Rules (MANDATORY)

**이 프로젝트의 모든 작업은 아래 하네스 규칙을 따른다.**

### 핵심 규칙

1. **새 기능 구현 시**: 반드시 FSD 구조 규칙을 따른다. `.claude/agents/` 파일을 참조한다.
2. **풀 서비스 개발 시**: `/orchestrate` 스킬의 7-Phase 파이프라인을 따른다.
3. **QA는 생략할 수 없다**: `npm run typecheck`, `npm run lint`, `npm run build`를 실행한다.
4. **`_workspace/` 디렉토리**: 에이전트 간 데이터 교환 허브.
5. **디자인 변경 시**: 4축 평가 기준 적용 (Design Quality, Originality, Craft, Functionality).

### Hard Thresholds (위반 시 작업 FAIL)

| 기준 | 임계값 |
|------|--------|
| `npm run typecheck` 오류 | **0개** |
| `npm run lint` 에러 | **0개** |
| `npm run build` 에러 | **0개** |
| `any` 타입 사용 | **0개** |
| FSD 레이어 의존성 위반 | **0개** |
| barrel export 누락 | **0개** |

### Tailwind CSS 필수 설정 (CRITICAL)

| 파일 | 필수 설정 |
|------|----------|
| `postcss.config.mjs` | `'@tailwindcss/postcss'` 플러그인 |
| `src/app/globals.css` | `@import 'tailwindcss'` |
| `src/app/layout.tsx` | `import './globals.css'` |
| `tsconfig.json` | path alias (`@/*`, `@shared/*` 등) |

### 에이전트 활용 매핑

| 작업 유형 | 사용할 에이전트 | 참조 파일 |
|----------|--------------|----------|
| 아이디어/리서치 | `idea-researcher` | `.claude/agents/idea-researcher.md` |
| 기획/PRD | `product-planner` | `.claude/agents/product-planner.md` |
| 스펙/Task 분해 | `spec-planner` | `.claude/agents/spec-planner.md` |
| 디자인/테마 | `design-architect` | `.claude/agents/design-architect.md` |
| FSD 모듈 생성 | `feature-builder` | `.claude/agents/feature-builder.md` |
| API/상태관리 | `api-integrator` | `.claude/agents/api-integrator.md` |
| UI/페이지 | `ui-developer` | `.claude/agents/ui-developer.md` |
| 코드 품질 | `qa-reviewer` | `.claude/agents/qa-reviewer.md` |
| 기능/UX 검수 | `app-inspector` | `.claude/agents/app-inspector.md` |

## Agent Team & Skills

### Full Pipeline

```
Phase 1: Ideation      — idea-researcher  (/ideate)
Phase 2: Planning      — product-planner  (/plan-app)
Phase 2.5: Spec Planning — spec-planner
Phase 3: Design        — design-architect (/design-system)
Phase 4: Implementation (순차 + spec task 체크 병행)
  4a feature-builder   (/create-feature, /create-entity)
  4b api-integrator
  4c ui-developer      (/create-page)
Phase 5: QA (병렬)
  5a qa-reviewer
  5b app-inspector     (/inspect-app)
Phase 6: Iteration     — Fix Loop (최대 3회)
Phase 7: Deployment    — Vercel / Self-hosted
```

## Commands

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Production build
npm start            # Production server
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run format       # Prettier
```

## Architecture: Feature-Sliced Design (FSD)

```
src/
├── core/          # App initialization, providers
├── features/      # Business logic (auth, etc.)
├── entities/      # Domain models (user, etc.)
├── widgets/       # Independent UI blocks
└── shared/        # Shared utilities
    ├── api/       # API client (Axios)
    ├── config/    # Environment, theme
    ├── lib/       # Hooks, utils
    ├── types/     # Common types
    └── ui/        # Reusable UI components
```

**Dependency Rule**: `app → widgets → features → entities → shared`

## Feature Structure Convention

```
features/{name}/
├── api/           # API calls
├── hooks/         # Custom hooks (useQuery, useMutation)
├── store/         # Zustand store (if needed)
├── types/         # TypeScript types
├── ui/            # UI components
└── index.ts       # Public API (barrel export)
```

## Code Conventions

- No `any` type in production code
- Interface prefix: `I`, Type prefix: `T`, Enum prefix: `E`
- Use `@/` alias for imports
- Server Component by default, `'use client'` only when needed
- Semantic HTML tags (main, nav, section, article)
- Responsive design required (sm, md, lg, xl breakpoints)
- Run lint, typecheck, build after changes

## Branch Strategy

```
main     <- Production
  ^
devel    <- Development (default)
  ^
feature/* <- Feature branches
```
