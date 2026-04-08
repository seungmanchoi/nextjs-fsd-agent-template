# Create Entity Skill

FSD 아키텍처의 entity(도메인 모델) 레이어에 새 엔티티를 생성하는 스킬.

## Trigger
- "엔티티 만들어줘", "entity 추가", "도메인 모델 추가"

## Input
- `name`: 엔티티 이름 (kebab-case)

## Steps

### Step 1: 이름 검증 및 중복 확인

### Step 2: 디렉토리 구조 생성
```
src/entities/{name}/
├── api/
│   ├── {name}.api.ts
│   └── index.ts
├── store/
│   ├── {name}.store.ts
│   └── index.ts
├── types/
│   ├── {name}.types.ts
│   └── index.ts
└── index.ts
```

### Step 3: 파일 생성 (타입, 스토어, API, barrel)

### Step 4: QA 검증

## Agent Delegation
| Step | Agent |
|------|-------|
| 1-3 | feature-builder |
| 4 | qa-reviewer |
