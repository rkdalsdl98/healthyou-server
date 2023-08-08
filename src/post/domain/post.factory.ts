import { EventBus } from "@nestjs/cqrs";
import { Injectable } from "@nestjs/common"
import { PostModel } from "./model/post.model";
import { PostDetailModel } from "./model/post_detail.model";

@Injectable()
export class PostFactory {
    constructor(private readonly eventBus: EventBus){}

    createPost({
        writer_name,
        title,
        content,
        writer_email,
    }): PostModel {
        const postDetail : PostDetailModel = new PostDetailModel(
            content,
            [],
        )
        return new PostModel(
            writer_email, 
            writer_name,
            title,
            postDetail,
        )
    }
}