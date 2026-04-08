<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Feature--Sliced_Design-FSD-orange?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-Harness-purple?style=for-the-badge&logo=anthropic&logoColor=white" />
  <img src="https://img.shields.io/badge/Agents-9_Specialists-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Skills-8_Workflows-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Pattern-Pipeline-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vibe_Coding-AI_Driven-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Harness_Engineering-Production-red?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Zustand-5-433E38?style=flat-square" />
  <img src="https://img.shields.io/badge/TanStack_Query-5-FF4154?style=flat-square&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat-square&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Hook_Form-7-EC5990?style=flat-square&logo=reacthookform&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-3-3E67B1?style=flat-square&logo=zod&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-3-F7B93E?style=flat-square&logo=prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/Day.js-1.11-FF5F4C?style=flat-square" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Web-lightgrey?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/node-%3E%3D18-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
</p>

# Next.js FSD Agent Template

AI 에이전트 기반 풀 라이프사이클 개발을 지원하는 Next.js 15 + Feature-Sliced Design 프로덕션 템플릿.

> **What makes this different?** 이 템플릿은 FSD 아키텍처 규칙을 이해하는 9개의 Claude Code 에이전트와 8개의 스킬을 포함합니다. "서비스 만들어줘" 한 마디로 아이디어 도출부터 시장 조사 → 기획 → 디자인 시스템 → FSD 모듈 스캐폴딩 → API 연동 → 페이지 개발 → QA 검증까지 전체 파이프라인이 자동으로 실행됩니다.

---

## Full Pipeline

```
Phase 1: Ideation       idea-researcher   시장 조사, 경쟁 서비스 분석, 아이디어 도출
           │
Phase 2: Planning       product-planner   PRD, 유저 스토리, FSD 모듈 맵 설계
           │
Phase 2.5: Spec Planning  spec-planner    피처별 스펙 문서, phase/task 분해, 진행 추적
           │
Phase 3: Design         design-architect  Tailwind CSS 테마, 페이지 레이아웃
           │
Phase 4: Implementation (순차 + spec task 체크 병행)
  4a       feature-builder   FSD 모듈, Zustand store, TypeScript 타입
  4b       api-integrator    Axios 클라이언트, TanStack Query hooks, API Routes
  4c       ui-developer      Next.js 페이지, Tailwind CSS UI
           │
Phase 5: QA (병렬)
  5a       qa-reviewer       코드 품질, TypeScript strict, FSD 규칙
  5b       app-inspector     기능/UX 검사, 접근성, SEO, 성능
           │
Phase 6: Iteration      Fix Loop (최대 3회)
           │
Phase 7: Deployment     Vercel / Self-hosted
```

데이터 흐름: 에이전트 간 컨텍스트는 `_workspace/` 디렉토리를 통해 전달됩니다.

---

## Agent Team

| 에이전트 | 역할 | 트리거 |
|---------|-----|-------|
| **idea-researcher** | 시장 조사, 서비스 아이디어 도출 | "아이디어 찾아줘" |
| **product-planner** | PRD, FSD 모듈 맵, 유저 스토리 | "기획해줘" |
| **spec-planner** | 피처별 스펙 문서, phase/task 분해, 진행 추적 | Phase 2 완료 후 자동 |
| **design-architect** | 디자인 시스템, Tailwind CSS 테마 | "디자인 시스템 만들어줘" |
| **feature-builder** | FSD 모듈 스캐폴딩 | "feature/entity 만들어줘" |
| **api-integrator** | Axios + TanStack Query + Zustand + API Routes | "API 연동해줘" |
| **ui-developer** | Tailwind CSS 페이지 & UI 컴포넌트 | "페이지 만들어줘" |
| **qa-reviewer** | 코드 품질, TypeScript, FSD 규칙 | 각 Phase 자동 실행 |
| **app-inspector** | 기능/UX 검사, 접근성, SEO, 성능 | "검수해줘" |

---

## Skills

| 스킬 | 커맨드 | 설명 |
|-----|-------|-----|
| `ideate` | "아이디어 찾아줘" | 시장 조사 및 아이디어 도출 |
| `plan-app` | "기획해줘" | PRD 작성 및 FSD 모듈 맵 설계 |
| `design-system` | "디자인 시스템 만들어줘" | Tailwind CSS 테마 및 페이지 레이아웃 |
| `create-feature` | "피처 만들어줘" | FSD feature 모듈 스캐폴딩 |
| `create-entity` | "엔티티 만들어줘" | FSD entity 도메인 모델 생성 |
| `create-page` | "페이지 추가해줘" | Next.js App Router 페이지 생성 |
| `inspect-app` | "검수해줘" | 기능/UX/접근성/SEO 전체 검사 |
| `orchestrate` | "서비스 만들어줘" | 전체 파이프라인 오케스트레이션 |

---

## Architecture Pattern

### Harness Design Principles

[Anthropic의 공식 하네스 설계 가이드](https://www.anthropic.com/engineering/harness-design-long-running-apps)와 [revfactory/harness](https://github.com/revfactory/harness)를 기반으로 설계되었습니다.

| 원칙 | 설명 |
|------|------|
| **Context Reset** | Phase 간 `_workspace/`에 산출물 저장 후 컨텍스트 리셋 |
| **Sprint 기반 분해** | Phase 4에서 feature 단위 스프린트. 구현→평가→수정 |
| **독립 Evaluator** | Generator(builder/integrator/developer)와 Evaluator(reviewer/inspector) 분리 |
| **Hard Threshold** | pass/fail 경성 기준. typecheck 0 에러, any 0개, FSD 위반 0개 |
| **디자인 4축 평가** | Design Quality(30%), Originality(25%), Craft(25%), Functionality(20%) |
| **능동 테스트** | 정적 분석 + `npm run typecheck/lint/build` 실행 |

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5.9 (strict mode) |
| Styling | Tailwind CSS 4 |
| Global State | Zustand 5 |
| Server State | TanStack Query 5 |
| Form & Validation | React Hook Form 7 + Zod 3 |
| API Client | Axios (auto token refresh) |
| Animation | Framer Motion 12 |
| Date | Day.js |
| Lint & Format | ESLint 9 + Prettier 3 |
| Deploy | Vercel / Self-hosted |

---

## Getting Started

### 1. 템플릿 사용

GitHub에서 **"Use this template"** 버튼을 클릭하거나:

```bash
gh repo create my-app --template seungmanchoi/nextjs-fsd-agent-template --clone
cd my-app
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 설정

```bash
cp .env.example .env
```

### 4. 실행

```bash
npm run dev        # Next.js Dev Server (Turbopack)
```

### 5. AI Agent Harness 사용 (Claude Code)

```bash
# 전체 파이프라인 — 서비스를 처음부터 끝까지 만들기
"프로젝트 관리 대시보드를 만들어줘"

# 개별 스킬 — 특정 기능만 추가
"상품 목록/상세 기능을 만들어줘. API는 /api/products 엔드포인트"

# → feature-builder: src/features/product/ 스캐폴딩
# → api-integrator: API 함수 + useProducts 훅 생성
# → ui-developer: 상품 리스트/상세 페이지 생성
# → qa-reviewer: FSD 규칙 + 타입 검증
```

---

## Project Structure

```
.
├── .claude/
│   ├── agents/                         # AI Agent definitions
│   │   ├── idea-researcher.md
│   │   ├── product-planner.md
│   │   ├── spec-planner.md
│   │   ├── design-architect.md
│   │   ├── feature-builder.md
│   │   ├── api-integrator.md
│   │   ├── ui-developer.md
│   │   ├── qa-reviewer.md
│   │   └── app-inspector.md
│   └── skills/                         # AI Skills
│       ├── ideate/
│       ├── plan-app/
│       ├── design-system/
│       ├── create-feature/
│       ├── create-entity/
│       ├── create-page/
│       ├── inspect-app/
│       └── orchestrate/
│
├── docs/
│   └── specs/                         # 피처별 스펙 문서 (spec-planner 출력)
│
├── _workspace/                         # 에이전트 간 데이터 교환
│
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout (providers)
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Tailwind CSS
│   │   ├── (auth)/                    # Auth group
│   │   │   └── login/page.tsx
│   │   ├── (main)/                    # Main layout group
│   │   └── api/                       # API Routes
│   │
│   ├── core/                          # App initialization
│   │   └── providers/                 # QueryProvider, etc.
│   │
│   ├── features/                      # Business logic features
│   │   └── auth/                      # Example: authentication
│   │       ├── api/
│   │       ├── hooks/
│   │       ├── types/
│   │       └── index.ts
│   │
│   ├── entities/                      # Domain models
│   │   └── user/                      # Example: user entity
│   │       ├── api/
│   │       ├── store/
│   │       ├── types/
│   │       └── index.ts
│   │
│   ├── widgets/                       # Independent UI blocks
│   │
│   └── shared/                        # Shared code
│       ├── api/                       # Axios client + token management
│       ├── config/                    # Environment, theme
│       ├── lib/                       # Custom hooks, utils
│       ├── types/                     # Common types
│       └── ui/                        # UI components (Button, Input)
│
├── next.config.ts                     # Next.js config
├── tsconfig.json                      # TypeScript (path aliases)
├── postcss.config.mjs                 # Tailwind CSS PostCSS
├── eslint.config.mjs                  # ESLint rules
├── .prettierrc.json                   # Prettier rules
└── CLAUDE.md                          # Claude Code instructions
```

---

## FSD Architecture

**Feature-Sliced Design**은 비즈니스 도메인별로 코드를 구성하는 아키텍처입니다.

### Layer Hierarchy

```
app (routing) → widgets → features → entities → shared
```

상위 레이어는 하위 레이어만 참조할 수 있습니다. 동일 레벨 간 직접 참조는 금지합니다.

### Adding a New Feature

```
src/features/my-feature/
├── api/
│   ├── my-feature.api.ts
│   └── index.ts
├── hooks/
│   ├── use-my-feature.ts
│   └── index.ts
├── store/                      # (optional)
│   ├── my-feature.store.ts
│   └── index.ts
├── types/
│   ├── my-feature.types.ts
│   └── index.ts
├── ui/                         # (optional)
│   ├── MyComponent.tsx
│   └── index.ts
└── index.ts                    # Public API (barrel export)
```

---

## Path Aliases

| Alias | Path |
|-------|------|
| `@/*` | `./src/*` |
| `@core/*` | `./src/core/*` |
| `@features/*` | `./src/features/*` |
| `@entities/*` | `./src/entities/*` |
| `@widgets/*` | `./src/widgets/*` |
| `@shared/*` | `./src/shared/*` |

```typescript
import { Button } from '@shared/ui';
import { useLogin } from '@features/auth';
import { useUserStore } from '@entities/user';
```

---

## Available Scripts

```bash
npm run dev            # Dev server (Turbopack)
npm run build          # Production build
npm start              # Production server
npm run lint           # ESLint check
npm run typecheck      # TypeScript check
npm run format         # Prettier format
```

---

## Customization

### 1. 서비스 이름

`src/app/layout.tsx`에서 metadata 수정:

```typescript
export const metadata: Metadata = {
  title: 'My Service',
  description: 'My awesome web service',
};
```

### 2. 테마 색상

`src/app/globals.css`에서 CSS 변수 변경:

```css
:root {
  --primary: #3b82f6;
}
```

`src/shared/config/theme.ts`에서 상세 테마 수정.

### 3. API URL

`.env` 파일:

```
NEXT_PUBLIC_API_URL=https://api.your-service.com
```

---

## Naming Conventions

| Type | Prefix | Example |
|------|--------|---------|
| Interface | `I` | `IUserState` |
| Type | `T` | `TButtonVariant` |
| Enum | `E` | `EUserRole` |
| Hook | `use-` | `use-login.ts` |
| Component | PascalCase | `Button.tsx` |

---

## Branch Strategy

```
main      ← Production
  ^
devel     ← Development (default)
  ^
feature/* ← Feature branches
```

---

## Deployment

### Vercel (권장)

```bash
npm i -g vercel
vercel
```

### Self-hosted

```bash
npm run build
npm start
```

### Docker

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Inspired By

- **[revfactory/harness](https://github.com/revfactory/harness)** — Agent Team & Skill Architect 메타 스킬
- **[Anthropic Harness Design](https://www.anthropic.com/engineering/harness-design-long-running-apps)** — Context Reset, Sprint 분해, Hard Threshold, 독립 Evaluator
- **[Feature-Sliced Design](https://feature-sliced.design/)** — 프론트엔드 아키텍처 방법론

---

## License

MIT
