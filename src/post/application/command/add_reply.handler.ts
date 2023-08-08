import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { AddReplyCommand } from "./add_reply.command";
import { Inject } from "@nestjs/common/decorators";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";

@CommandHandler(AddReplyCommand)
export class AddReplyHandler implements ICommandHandler<AddReplyCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory,
    ){}
    
    async execute(command: AddReplyCommand): Promise<any> {
        this.postReposistory.addReplyOnPost(
            command.writerName,
            command.content,
            command.detailId,
            command.writerEmail,
        )
    }
}