import { Module } from '@nestjs/common';
import { UserController } from './interface/user.controller';
import { UserFactory } from './domain/user.factory';
import { CqrsModule } from '@nestjs/cqrs';

import { UserReposistory } from './infra/db/reposistory/user.reposistory';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/db/entity/user.entity';
import { UserAuthManager } from 'src/user/application/auth/user_auth.manager';
import { UserEventHandler } from './application/event/user_event.handler';
import { CreateUserHandler } from './application/command/create_user.handler';
import { CreateUserReceiveHandler } from './application/command/create_user_receive.handler';
import { EmailService } from './infra/adapter/email.service';
import { ValidateFactory } from './interface/adapter/validate.factory';
import { LoginHandler } from './application/query/login.handler';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ProfileEntity } from './infra/db/entity/profile.entity';

require('dotenv').config()

const repositories = [
  {
    provide: 'UserReposistory',
    useClass: UserReposistory,
  },
  { 
    provide: 'EmailService',
    useClass: EmailService,
  },
];

const queryHanlders = [LoginHandler]
const commandHandlers = [CreateUserHandler, CreateUserReceiveHandler];
const eventHandlers = [UserEventHandler];

const factories = [
  UserFactory,
  ValidateFactory,
]

@Module({
  imports: [
    CqrsModule,
    EmailModule,
    TypeOrmModule.forFeature([UserEntity, ProfileEntity]),
  ],
  controllers: [UserController],
  providers: [
    ...repositories,
    ...factories,
    {
      provide: 'UserAuthManager',
      useClass: UserAuthManager
    },
    ...commandHandlers,
    ...eventHandlers,
    ...queryHanlders,
    {
      provide: 'JwtService',
      useClass: JwtService
    }
  ]
})
export class UserModule {}
