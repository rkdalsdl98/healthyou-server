import { PostModel } from "../model/post.model";
import { PostEntity } from "src/post/infra/db/entity/post.entity";

export interface IPostReposistory {
    registPost(post: PostModel): Promise<void>
    deletePost(postId: number, email: string): Promise<void>
    findPostByEmail(email: string): Promise<PostEntity | null>
    addReplyOnPost(
        writer_name: string,
        content: string,
        detail_id: number,
        writer_email: string,
    ): Promise<void>
    deleteReply(writer_email: string, post_id: number): Promise<void>
    getPosts(): Promise<PostEntity[] | PostEntity>
    increaseThumbsByPost(post_id: number): Promise<void>
    increaseThumbsByReply(reply_id: number): Promise<void>
    modifyPostDetail(detail_id: number, content: string): Promise<void>
    modifyReply(reply_id: number, content: string): Promise<void>
}