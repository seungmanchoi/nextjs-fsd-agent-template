# Create Page Skill

Next.js App Router 규칙에 맞는 새 페이지를 추가하는 스킬.

## Trigger
- "페이지 추가해줘", "화면 만들어줘", "페이지 추가"

## Input
- `name`: 페이지 이름 (kebab-case)
- `group`: 라우트 그룹 (예: `(main)`, `(auth)`, `(marketing)`)
- `type`: `server` | `client` (default: server)

## Steps

### Step 1: 라우트 구조 확인
- `src/app/` 기존 라우트 분석
- 지정된 group 존재 여부 확인

### Step 2: 페이지 파일 생성

#### Server Component (default)
```typescript
// src/app/{group}/{name}/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '{Name}',
};

export default function {Name}Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">{Name}</h1>
    </main>
  );
}
```

#### Client Component
```typescript
'use client';

export default function {Name}Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">{Name}</h1>
    </main>
  );
}
```

### Step 3: 레이아웃 업데이트 (필요 시)
### Step 4: 네비게이션 연결 (optional)
### Step 5: QA 검증

## Agent Delegation
| Step | Agent |
|------|-------|
| 1-4 | ui-developer |
| 5 | qa-reviewer |
