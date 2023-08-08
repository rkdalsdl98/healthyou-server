import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { EmailModule } from './email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import ormConfig from '../orm.config'
import smtpConfig from 'smtp.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ValidateFactory } from './common/post/validate/validate.factory';

@Module({
  imports: [
    UserModule,
    PostModule,
    EmailModule,
    TypeOrmModule.forRoot(ormConfig),
    MailerModule.forRoot(smtpConfig),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ValidateFactory
  ],
})
export class AppModule {}
