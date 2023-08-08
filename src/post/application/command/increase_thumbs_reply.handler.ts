import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IncreaseThumbsReplyCommand } from "./increase_thumbs_reply.command";
import { Inject } from "@nestjs/common";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";

@CommandHandler(IncreaseThumbsReplyCommand)
export class IncreaseThumbsReplyHandler implements ICommandHandler<IncreaseThumbsReplyCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory
    ){}
    
    async execute(command: IncreaseThumbsReplyCommand): Promise<any> {
        await this.postReposistory.increaseThumbsByReply(command.reply_id)
    }
}