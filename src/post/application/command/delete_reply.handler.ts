import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { DeleteReplyCommand } from "./delete_reply.command";
import { Inject } from '@nestjs/common'
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";


@CommandHandler(DeleteReplyCommand)
export class DeleteReplyHandler implements ICommandHandler<DeleteReplyCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory
    ){}
    
    async execute(command: DeleteReplyCommand): Promise<any> {
        await this.postReposistory.deleteReply(command.writer_email, command.reply_id)
    }
}