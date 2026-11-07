# 레이서 포트폴리오 서비스

> 엘리스 AI 트랙 4기 · 팀 프로젝트 · 2022.03 ~ 04 · 5명

자신의 포트폴리오(학력, 수상 이력, 자격증, 프로젝트)를 작성하고 다른 사람의 포트폴리오를 둘러볼 수 있는 웹 서비스입니다.

## 내 역할: 백엔드 (공동)

엄혜진 님과 백엔드를 나눠 맡았습니다. 백엔드 커밋 기록에서 추가한 줄 수로는 두 사람이 거의 같습니다 (김현서 2,151줄, 엄혜진 2,226줄).

- **프로젝트·자격증 API 전체**: 작성, 조회, 목록, 수정, 삭제 ([`projectRouter`](back/src/routers/projectRouter.js), [`projectService`](back/src/services/projectService.js), [`certificateRouter`](back/src/routers/certificateRouter.js), [`certificateService`](back/src/services/certificateService.js), [`project`](back/src/db/schemas/project.js)·[`certificate`](back/src/db/schemas/certificate.js) 스키마와 모델)
- **회원 기능 확장** ([`userRouter`](back/src/routers/userRouter.js) 중 227줄)
  - 회원가입 이메일 인증: 가입 시 인증 링크 메일 발송 ([`sendMail`](back/src/middlewares/sendMail.js))
  - 비밀번호 재설정: 8자리 임시 비밀번호를 만들어 메일로 발송 ([`generatePassword`](back/src/middlewares/generatePassword.js))
  - 프로필 이미지 업로드: multer와 AWS S3 ([`uploadImage`](back/src/middlewares/uploadImage.js))
  - 회원 탈퇴: 탈퇴하면 그 회원의 프로젝트, 수상 이력 등 포트폴리오도 함께 삭제
  - 좋아요 기능
- **알림**: 프로젝트가 바뀌면 알림을 남기는 기능 ([`alert`](back/src/db/schemas/alert.js) 스키마)
- **GitHub 로그인**: OAuth 토큰 요청부터 이메일 정보 조회까지 백엔드와 프론트 ([`GithubLogin`](front/src/components/user/GithubLogin.js))

## 주요 기능

- 회원가입(이메일 인증), 로그인(이메일, GitHub), 비밀번호 재설정
- 포트폴리오 작성: 학력, 수상 이력, 자격증, 프로젝트
- 다른 사용자의 포트폴리오 보기, 좋아요
- 프로필 이미지 업로드

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| Backend | Node.js, Express, MongoDB(Mongoose), JWT, bcrypt, nodemailer, multer, AWS S3 |
| Frontend | React, React Bootstrap, Recoil, axios |

## 팀 구성

커밋 기록 기준으로 각자 주로 작업한 부분입니다.

| 이름 | 담당 | 주로 작업한 부분 |
|---|---|---|
| **김현서** | 백엔드 | 프로젝트·자격증 API, 이메일 인증, 비밀번호 재설정, 이미지 업로드, 탈퇴, 좋아요, 알림, GitHub 로그인 |
| 엄혜진 | 백엔드·프론트엔드 | 회원 API, 학력 API, 회원 화면 |
| 배주영 | 백엔드 | 수상 이력 API |
| 김채정 | 프론트엔드 | 프론트엔드 전반 (학력, 회원, 수상 이력 화면 등) |
| 이정민 | 프론트엔드 | 프로젝트·자격증 화면 |

## 실행

```bash
cd back && yarn && yarn start     # MongoDB, 메일, AWS 정보가 담긴 .env 필요
cd front && yarn && yarn start
```

## 저장소 안내

팀 GitHub 저장소(DeveloperInWonderland/portfolio-share-service)를 커밋 기록과 브랜치 그대로 옮겨 온 사본입니다. 접속 정보가 담긴 `.env` 파일은 커밋 기록에서 지웠습니다.

<details>
<summary>프로젝트 당시 README</summary>

### 레이서 포트폴리오 서비스

이 프로젝트는 자기자신의 포트폴리오를 작성하고, 또한 다른 사람의 포트폴리오를 확인할 수 있는 웹 서비스입니다. \
웹 구현 예시: http://34.64.140.205/

> 위 IP 주소는 프로젝트 진행 기간에만 유효합니다.

**5개 MVP**로 구성됩니다.

- User (회원가입, 로그인 등 사용자 관련)
- Award (포트폴리오 중 상장 이력 관련)
- Certificate (포트폴리오 중 자격증 관련)
- Project (포트폴리오 중 프로젝트 관련)
- Education (포트폴리오 중 교육, 학교 관련)

#### 주요 사용 기술

1. 프론트엔드

- React (create-react-app으로 구현되었습니다.)
- React Bootstrap
- axios

2. 백엔드

- Express (nodemon, babel-node로 실행됩니다.)
- Mongodb, Mongoose

#### 설치 방법

1. 프론트 엔드 서버 실행

```bash
cd front
yarn
yarn start
```

2. 백엔드 서버 실행

```bash
back 폴더 내부 README 참고
```

---

본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
Copyright 2022 엘리스 Inc. All rights reserved.

</details>
