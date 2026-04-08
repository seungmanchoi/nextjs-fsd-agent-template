# Create Feature Skill

FSD 아키텍처 규칙에 따라 새 feature 모듈을 생성하는 스킬.

## Trigger
- "피처 만들어줘", "feature 추가해줘", "새 기능 만들어줘"
- `/create-feature {name}`

## Input
- `name`: feature 이름 (kebab-case)
- `with-ui`: UI 컴포넌트 포함 여부 (optional, default: false)
- `with-store`: Zustand store 포함 여부 (optional, default: false)

## Steps

### Step 1: 이름 검증
- kebab-case 형식 확인
- 기존 feature와 중복 확인

### Step 2: 디렉토리 구조 생성

```
src/features/{name}/
├── api/
│   ├── {name}.api.ts
│   └── index.ts
├── hooks/
│   ├── use-{name}.ts
│   └── index.ts
├── types/
│   ├── {name}.types.ts
│   └── index.ts
├── ui/                    # (with-ui)
│   ├── {Name}View.tsx
│   └── index.ts
├── store/                 # (with-store)
│   ├── {name}.store.ts
│   └── index.ts
└── index.ts
```

### Step 3: 파일 생성 (타입, API, 훅, barrel export)

### Step 4: QA 검증
- `npm run typecheck` 실행
- FSD 레이어 의존성 규칙 확인

## Agent Delegation
| Step | Agent |
|------|-------|
| 1-3 | feature-builder |
| 4 | qa-reviewer |
