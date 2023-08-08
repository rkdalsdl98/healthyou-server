import { ICommand } from "@nestjs/cqrs";

export class ModifyPostCommand implements ICommand {
    constructor(
        readonly detail_id: number,
        readonly content: string
    ){}
}