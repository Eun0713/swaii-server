---
name: 버그 제보
about: 발생한 문제를 기록하고 해결할 수 있도록 하기 위한 템플릿입니다.
title: ""
labels: 🐞bug
---

## 🐞 버그 설명 (Bug Description)

어떤 문제가 발생했는지 간단히 설명해주세요.
예: 모바일 환경에서 버튼이 클릭되지 않음

## 📍 발생 위치 (Location)

- API 경로: `POST /api/feedback`
- 서버 로그 시간대: `2025-06-27 14:23:12`
- 배포 환경: `dev`, `prod`, `local`

## ⚠ 재현 방법 (Steps to Reproduce)

1. 해당 API에 POST 요청 전송
2. 잘못된 body 또는 인증 토큰 포함
3. 서버에서 500 에러 응답

## ✅ 기대 동작 (Expected Behavior)

버그가 없을 경우 어떤 동작이 일어나야 하는지 설명해주세요.
예: 로그인 성공 시 `/dashboard`로 리다이렉트되어야 함

## 🧪 실제 동작 (Actual Behavior)

실제 동작과 콘솔 에러 등을 설명해주세요.
예: 페이지가 멈추고 콘솔에 에러 발생 (`Uncaught TypeError: ...`)

## 📸 스크린샷 (Screenshot)

문제 상황의 화면 캡처나 콘솔 에러 등 시각 자료가 있다면 첨부해주세요.
