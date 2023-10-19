## API 키 발행 방법
[BLOCKSDK 홈페이지 회원가입](https://blocksdk.com/register)

토큰 목록 WEB3 API 토큰 사용

### 1. 시작하기
1. 터미널 실행
2. 프로젝트 디렉토리로 이동하여 `npm install` 실행
3. 빌드 `next build` , 시작 `next start`.
4. `next dev`로 개발모드로 진행 가능

## 디렉토리 구조

```bash
├── src/app
├── api //api 목록
│   └── wallet
│       ├── balance
│       ├── create
│       ├── erc20
│       ├── erc721
│       ├── erc1155
│       └── list
├── wallet //페이지 목록
│   ├── balance
│   ├── create
│   ├── send
│   └── page.tsx
└── page.tsx
```

### 4. env 파일 설정
````
NEXT_PUBLIC_BLOCKSDK_TOKEN     // blocksdk api 토큰
NEXT_PUBLIC_URL                // 테스트넷 or 메인넷
NEXT_PUBLIC_NET                // 사용할 메인넷(eth,bsc,klay,matic)                        

````

### 라이센스
````
배포 및 변형하여 판매하는 행위가 금지 됩니다
````