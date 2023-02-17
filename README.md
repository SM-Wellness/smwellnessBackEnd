<div align=center>
  <h1>:smiley:SM COSSTON 대회</h1>
    <h2>
   SM웰니스팀 'SocialBio' 3등 수상작
   </h2>
   <h3>BackEnd 로직</h3>
</div> 

![backend](https://user-images.githubusercontent.com/50544455/219040478-8fa804f6-3851-434e-b9a4-4c22cedb686e.png)

## AWS CodePipeline 및 Elastic Beanstalk으로 CI/CD 구축
### 1. 배포 환경 설정
* <code>**AWS Elastic Beanstalk**</code>에 환경 설정 Web 서버 환경을 선택하여 고름.
* Node.js 플랫폼으로 환경 구축 및 환경 변수등 설정

### 2. Code PipeLine 생성
* 현 레포지토리의 서버 코드를 빌드 할 수 있도록 Procfile을 만들기
* Procfile에 <code>web: npm run deploy</code> 자동 빌드 할 수 있도록 설정 
-- package.json에서 deploy 명령어<br>
<code>"deploy": "npx prisma generate && npx prisma db push && npm ci && npm run build && npm run start:prod"</code>
* 이 후 <code>**AWS Code PipeLine**</code>에 등록
* 코드가 변경될 때마다 코드를 빌드, 테스트 및 배포를 할 수 있음.

### CI/CD 파이프라인 구축
* Github 레포지토리의 코드를 AWS Code PipeLine으로 자동 빌드(CI)하고, AWS Elastic BeanStalk를 통해 (CD) 자동배포를 구축
* 이 후 서버URL을 통해 데이터베이스에 접근 할 수 있음.

### 힘들었던 점
* 배포과정에서 오류가 많아서, 코드 수정 및 오류 로그를 찾아가면서 서버 빌드에 있어서 오류를 찾아서 해결해 나감.
* 로컬에서는 걸리지 않았던 오류가 배포과정에서 나오다 보니 어디서 오류가 나는지 잘 몰랐음.
* 이후 에러 로그에서 환경 변수 설정때문에 생겼던 오류로 찾고 해결함.
