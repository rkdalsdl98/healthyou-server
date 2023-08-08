import { ICommand } from "@nestjs/cqrs";

export class AddReplyCommand implements ICommand {
    constructor(
        readonly writerName: string,
        readonly content: string,
        readonly detailId: number,
        readonly writerEmail: string
    ){}
}