---
name: design-system
description: "웹 서비스 디자인 시스템을 설계하고 Tailwind CSS 코드로 구현하는 스킬. 컬러 팔레트, 타이포그래피, 컴포넌트 variant, 페이지 레이아웃을 정의한다. '디자인 해줘', '디자인 시스템 만들어줘', '색상 팔레트', 'UI 설계' 요청 시 반드시 이 스킬을 사용할 것."
---

# Design System — 웹 디자인 시스템 스킬

## Trigger
- "디자인 해줘", "디자인 시스템 만들어줘"
- "색상 팔레트", "테마 설정", "UI 설계"

## Steps

### Step 0: Tailwind CSS 설정 검증 (GATE)

```
검증 항목 (모두 PASS 필수):
1. postcss.config.mjs — '@tailwindcss/postcss' 플러그인
2. src/app/globals.css — @import 'tailwindcss'
3. src/app/layout.tsx — import './globals.css'
4. tsconfig.json — path alias 설정
```

### Step 1: 브랜드 톤 결정
- 3가지 시각적 방향성 옵션 제시 → 사용자 선택

### Step 2: 컬러 시스템
- Primary, Secondary, Accent, Semantic 컬러
- Light/Dark 모드 CSS 변수

### Step 3: 타이포그래피
- Heading, Body, Caption 스케일

### Step 4: 컴포넌트 라이브러리
- variant, size, state 정의
- Tailwind className 명세

### Step 5: 페이지별 레이아웃
- 반응형 레이아웃 정의
- 핵심 페이지 2~3개 상세 레이아웃

### Step 6: 파일 업데이트
- `src/app/globals.css` CSS 변수 업데이트
- `src/shared/config/theme.ts` 업데이트
- `_workspace/03_design_system.md` 저장

## Agent Delegation
| Step | Agent |
|------|-------|
| 0-6 | design-architect |
