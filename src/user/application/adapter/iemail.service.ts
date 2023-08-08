import { IEmailOption } from 'src/user/domain/email/iemail.option';
import { SentMessageInfo } from 'nodemailer';

export interface IEmailService {
    sendEmail(
        emailOption: IEmailOption
    ) : Promise<SentMessageInfo>
}