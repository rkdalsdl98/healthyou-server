import { ICommand } from "@nestjs/cqrs";

export class DeletePostCommand implements ICommand {
    constructor(readonly email: string, readonly postId: number){}
}