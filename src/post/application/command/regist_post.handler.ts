import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RegistPostCommand } from "./regist_post.command";
import { Inject } from "@nestjs/common"
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";
import { PostFactory } from "src/post/domain/post.factory";
import { PostModel } from "src/post/domain/model/post.model";

@CommandHandler(RegistPostCommand)
export class RegistPostHandler implements ICommandHandler {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory,
        private readonly postFactory: PostFactory,
    ){}

    async execute(command: RegistPostCommand): Promise<any> {
        const post : PostModel = this.postFactory.createPost({...command})
        await this.postReposistory.registPost(post)
    }
}