import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPostsQuery } from "./get_posts.query";
import { Inject } from "@nestjs/common/decorators";
import { PostReposistory } from "src/post/infra/db/reposistory/post_reposistory";
import { PostDto } from "src/post/interface/dto/post.dto";
import { ReplyModel } from "src/post/domain/model/reply.model";

@QueryHandler(GetPostsQuery)
export class PostQueryHandler implements IQueryHandler<GetPostsQuery> {
    constructor(
        @Inject('PostReposistory')
        private readonly postReposistory: PostReposistory,
    ){}

    async execute(query: GetPostsQuery): Promise<any> {
        switch(query.name) {
            case GetPostsQuery.name:
                const entities = await this.postReposistory.getPosts()
                if(entities === null || entities === undefined) return []
                
                if(Array.isArray(entities)) {
                    const posts : PostDto[] = entities.map(post => {
                        const { detail } = post
                        return {
                            post_id: post.id,
                            writer_email: post.writer_email,
                            writer_name: post.writer_name,
                            detail: {
                                content: detail.content,
                                replys: detail.replys.map(v => new ReplyModel(
                                    v.content,
                                    v.thumbs,
                                    v.created_at,
                                    detail.id,
                                    v.writer_email,
                                    v.writer_name,
                                    v.id
                                ))
                            }
                        }
                    })
                    return posts
                } else {
                    const { detail } = entities
                    return [{
                        post_id: entities.id,
                        writer_email: entities.writer_email,
                        writer_name: entities.writer_name,
                        detail: {
                            content: detail.content,
                            replys: detail.replys.map(v => new ReplyModel(
                                v.content,
                                v.thumbs,
                                v.created_at,
                                detail.id,
                                v.writer_email,
                                v.writer_name,
                                v.id
                            ))
                        }
                    }]
                }
        }
    }
}