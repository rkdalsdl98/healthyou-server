import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeletePostCommand } from "./delete_post.command";
import { Inject } from "@nestjs/common";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";

@CommandHandler(DeletePostCommand)
export class DeletePostHandler implements ICommandHandler<DeletePostCommand> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory
    ){}

    async execute(command: DeletePostCommand): Promise<any> {
        await this.postReposistory.deletePost(command.postId, command.email)
    }
}