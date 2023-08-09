<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).  

# 개요  

  실생활에서 운동을 시작 할때 혹은 운동을 지속적으로 이어나갈때 내가 계획한 목표를 달성해 나아가고 있는가? 에 대한 과정을 직접 계획하고 행한 결과를 기록하는 어플리케이션이 있으면 어떨까?? 하는 생각에서 기반된 프로젝트 입니다.  
    
  1인 개발로 시작한 이 프로젝트는 Flutter를 이용한 어플리케이션 배포를 목적으로 만들었으며 해당 레포지토리는 유저간에 커뮤니케이션을 가능하게 도와주는 서버입니다.

# Clean Architecture  

클린 아키텍처를 최대한 따르며 작성된 코드입니다.  
해당 아키텍처를 따르게된 이유는 코드를 작성하다 보면 여러곳에서 하나의 모델, 레포지토리를 공유하거나 사용하는 경우가 많아지는데, 이런 경우에 공유되는 부분을 수정하게 되면 공유를 받는 다른곳에 영향을 끼쳐 수정이 매우 어려워지고 확장은 생각하지도 못하게 되는 일이 계속 일어나던중 여러 공고에서 해당 아키텍처를 사용하는걸 보고 무엇이길래 이 아키텍처를 많이 수용을 할까? 하는 생각에 찾아보니 여태 서버를 작성하며 겪어왔던 모든 불편함, 고민을 한번에 날려줄 방법이라 생각되어 따르게 되었습니다.  
  
최대한 따르려고 노력했지만 아쉬운 부분이 많고 개선을 하기엔 아직은 제가 부족하여 완벽하게 따르지 못하였습니다.

# DB Diagram  

<p align="center">
<img src="https://github.com/rkdalsdl98/healthyou-server/assets/77562358/b1bed8ca-e66b-43b6-937c-220c15055384" width="400" alt="Nest Logo" />
</p>

# 현황  

회원가입 메일 송신 루틴  
회원가입 메일 인증 루틴  
회원가입 루틴 완성  
게시판 글 생성 루틴  
게시글에 댓글 생성 루틴  
게시글 삭제 루틴  
댓글 삭제 루틴  
비밀번호 암호화 루틴  
JWT 인증 루틴  
User, Profile 분할  
게시글, 댓글 수정 루틴  

JWT 설정 좀 자세히 알아봐라  
refresh토큰 넣어야 한다  
배포 하기전에 crud에 가드 넣어줘라  
ssl 넣어줘라  
아키텍처 그려서 넣어라 clean architecture  
사용한 패턴 설명 간단하게 넣어라 cqrs  
db 다이어그램 새로 그러서 넣어라  
erd 그려서 넣어라  
게시글에 카테고리 넣을거다  
