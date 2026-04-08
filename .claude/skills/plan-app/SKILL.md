---
name: plan-app
description: "웹 서비스 기획서(PRD)를 작성하는 스킬. 유저 스토리, 기능 목록, 페이지 구조, FSD 모듈 맵, API 엔드포인트를 정의한다. '기획해줘', 'PRD 작성', '기능 정의해줘', '페이지 흐름 설계해줘' 요청 시 반드시 이 스킬을 사용할 것."
---

# Plan App — 웹 서비스 기획/PRD 작성 스킬

## Trigger
- "기획해줘", "PRD 작성", "기능 정의"
- "페이지 구조 설계", "유저 스토리 작성"

## Input
- 아이디어 리서치 보고서 (`_workspace/01_idea_research.md`) 또는 사용자 직접 설명

## Steps

### Step 1: 요구사항 분석
- 핵심 가치 정의, 타겟 사용자 페르소나

### Step 2: 유저 스토리 작성
- P0(필수), P1(중요), P2(개선) 우선순위 태그

### Step 3: 페이지 구조 설계
- Next.js App Router 그룹 구조로 매핑
  - `(auth)/` — 인증 흐름
  - `(main)/` — 메인 레이아웃 (사이드바/헤더)
  - `(marketing)/` — 랜딩/마케팅 페이지
  - `api/` — API Routes

### Step 4: FSD 모듈 맵
- features, entities, widgets, 모듈 간 의존성

### Step 5: API 설계
- RESTful 엔드포인트 + Next.js Route Handlers

### Step 6: MVP 범위 결정
- `_workspace/02_product_plan.md`에 저장

## Agent Delegation
| Step | Agent |
|------|-------|
| 1-6 | product-planner |
