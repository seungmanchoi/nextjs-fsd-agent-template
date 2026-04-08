---
name: inspect-app
description: "구현된 웹 서비스의 기능, UX, 디자인, 접근성, SEO를 종합 검수하는 스킬. '앱 검수', '기능 점검', 'UX 검토', '디자인 QA', '출시 전 점검' 요청 시 반드시 이 스킬을 사용할 것."
---

# Inspect App — 웹 서비스 종합 검수 스킬

## Trigger
- "검수해줘", "기능 점검", "QA 해줘"
- "UX 검토", "디자인 QA", "출시 전 점검"

## Steps

### Step 1: 기능 완성도 검수
- PRD 유저 스토리 체크리스트 변환 → PASS/FAIL/PARTIAL

### Step 2: UX 흐름 검증
- 페이지 간 네비게이션, 에러/로딩/빈 상태

### Step 3: 디자인 일관성 검수
- 디자인 토큰 vs 실제 className 비교

### Step 4: 접근성 점검
- 키보드 네비게이션, 색상 대비, aria-label, focus-visible

### Step 5: 성능/SEO 점검
- Core Web Vitals, metadata, OG 태그

### Step 6: 보고서 생성
- `_workspace/05_inspection_report.md`에 저장

## Agent Delegation
| Step | Agent |
|------|-------|
| 1-6 | app-inspector |
