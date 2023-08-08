import { ICommand } from "@nestjs/cqrs";

export class IncreaseThumbsReplyCommand implements ICommand {
    constructor(
        readonly reply_id: number,
    ){}
}