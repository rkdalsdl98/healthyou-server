import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { UserCreateEvent } from '../../domain/user_create.event';
import { UserCreateReceiveEvent } from '../../domain/user_create_receive.event';
import { Inject } from '@nestjs/common';
import { EmailService } from 'src/user/infra/adapter/email.service';

require('dotenv').config()

@EventsHandler(UserCreateReceiveEvent, UserCreateEvent)
export class UserEventHandler implements IEventHandler<UserCreateEvent | UserCreateReceiveEvent>{
    constructor(
        @Inject('EmailService')
        private readonly emailService: EmailService
        ){}

    async handle(event: UserCreateEvent | UserCreateReceiveEvent) {
        switch(event.eventname) {
            case UserCreateEvent.name:
                var { email } = event as UserCreateEvent
                this.emailService.sendEmail({
                    to: email,
                    from: process.env.AUTH_EMAIL,
                    subject: "회원가입을 축하드립니다!",
                    text: "Healthyou에서 성취감을 느낄일만 남았네요!",
                    html: `<br><p>Healthyou에서 성취감을 느낄일만 남았네요!</p><p>Health는 언제나 당신을 지켜보고 있답니다!</p></br>`,
                })
                break
            case UserCreateReceiveEvent.name:
                var { email, secretCode } = event as UserCreateReceiveEvent
                await this.emailService.sendEmail({
                    to: email,
                    from: process.env.AUTH_EMAIL,
                    subject: "Healthyou 회원가입을 위한 인증 메일",
                    text: "",
                    html: 
                    `
                        <br>
                            <form action="${process.env.BASEURL}/user/create/verify/${email}" method="post">
                                <p>${secretCode}</p>
                                <p>상단에 보이는 숫자를 어플화면에서 입력하고 확인을 눌러주세요.</p>
                            </form>
                        </br>
                    `,
                })
                break
        }
    }
}