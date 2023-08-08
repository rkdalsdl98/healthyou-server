import { ICommand } from "@nestjs/cqrs";

export class IncreaseThumbsPostCommand implements ICommand {
    constructor(
        readonly detail_id: number
    ){}
}