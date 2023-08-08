import { ICommand } from "@nestjs/cqrs";

export class ModifyReplyCommand implements ICommand {
    constructor(
        readonly reply_id: number,
        readonly content: string
    ){}
}