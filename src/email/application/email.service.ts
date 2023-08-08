import { Injectable } from '@nestjs/common';
import { SentMessageInfo } from 'nodemailer';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService){}

    async sendEmail(emailOption): Promise<SentMessageInfo> {
        return await this.mailerService.sendMail(emailOption as ISendMailOptions)
    }
}
