import { Injectable } from '@nestjs/common';
import { IEmailService } from 'src/user/application/adapter/iemail.service';
import { EmailService as ExternalEmailService } from 'src/email/application/email.service';
import { IEmailOption } from 'src/user/domain/email/iemail.option';

@Injectable()
export class EmailService implements IEmailService {
    constructor(
        private readonly emailService: ExternalEmailService
        ){}

    async sendEmail(emailOption : IEmailOption): Promise<void> {
        await this.emailService.sendEmail(emailOption)
    }
}
