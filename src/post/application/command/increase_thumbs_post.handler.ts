import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IncreaseThumbsPostCommand } from "./increase_thumbs_post.command";
import { Inject } from "@nestjs/common";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";

@CommandHandler(IncreaseThumbsPostCommand)
export class IncreaseThumbsPostHanlder implements ICommandHandler<IncreaseThumbsPostCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory
    ){}
    
    async execute(command: IncreaseThumbsPostCommand): Promise<any> {
        await this.postReposistory.increaseThumbsByPost(command.detail_id)
    }
}