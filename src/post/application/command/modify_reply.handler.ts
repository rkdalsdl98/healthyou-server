import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";
import { ModifyReplyCommand } from "./modify_reply.command";


@CommandHandler(ModifyReplyCommand)
export class ModifyReplyHandler implements ICommandHandler<ModifyReplyCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory
    ){}
    
    async execute(command: ModifyReplyCommand): Promise<any> {
        await this.postReposistory.modifyReply(command.reply_id, command.content)
    }
}