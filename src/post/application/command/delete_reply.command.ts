import { ICommand } from "@nestjs/cqrs";

export class DeleteReplyCommand implements ICommand {
    constructor(
        readonly writer_email: string,
        readonly reply_id: number, 
    ){}
}