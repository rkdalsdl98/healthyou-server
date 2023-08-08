import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";
import { ModifyPostCommand } from "./modify_post.command";

@CommandHandler(ModifyPostCommand)
export class ModifyPostHandler implements ICommandHandler<ModifyPostCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory
    ){}
    
    async execute(command: ModifyPostCommand): Promise<any> {
        await this.postReposistory.modifyPostDetail(command.detail_id, command.content)
    }
}