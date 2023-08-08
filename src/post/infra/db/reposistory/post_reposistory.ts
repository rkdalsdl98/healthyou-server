import { IPostReposistory } from "src/post/domain/reposistory/ipost.resposistory";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PostEntity } from "../entity/post.entity";
import { PostDetailEntity } from "../entity/post_detail.entity";
import { ReplyEntity } from "../entity/reply.entity";
import { PostModel } from "src/post/domain/model/post.model";

export class PostReposistory implements IPostReposistory {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postReposistory: Repository<PostEntity>,
        @InjectRepository(PostDetailEntity)
        private readonly postDetailReposistory: Repository<PostDetailEntity>,
        @InjectRepository(ReplyEntity)
        private readonly replyReposistory: Repository<ReplyEntity>,
    ){}

    async registPost(post: PostModel): Promise<void> {
        const { detail } = post
        const postDetailEntity : PostDetailEntity = new PostDetailEntity()
        postDetailEntity.content = detail.content
        
        const postEntity : PostEntity = new PostEntity()
        postEntity.title = post.title
        postEntity.writer_email = post.writer_email
        postEntity.writer_name = post.writer_name

        postEntity.detail = postDetailEntity
        await this.postReposistory.save(postEntity)
    }

    async deletePost(postId: number, email: string): Promise<void> {
        await this.postReposistory.createQueryBuilder()
        .delete()
        .from(PostEntity)
        .where("post.writer_email = :email", { email })
        .andWhere("post.id = :postId", { postId })
        .execute()
    }

    async findPostByEmail(email: string): Promise<PostEntity | null> {
        return await this.postReposistory.findOneBy({writer_email: email})
    }

    async addReplyOnPost(
        writer_name: string,
        content: string,
        detail_id: number,
        writer_email: string,
    ): Promise<void> {
        await this.postDetailReposistory.findOneBy({id: detail_id})
        .then(async v => {
            const replyEntity : ReplyEntity = new ReplyEntity()
            replyEntity.content = content
            replyEntity.writer_email = writer_email
            replyEntity.writer_name = writer_name
            replyEntity.detail = v

            await this.replyReposistory.save(replyEntity)
        })
    } 

    async deleteReply(writer_email: string, post_id: number): Promise<void> {
        await this.replyReposistory.createQueryBuilder()
        .delete()
        .from(ReplyEntity)
        .where("reply.id = :post_id", { post_id })
        .andWhere("reply.writer_email = :writer_email", { writer_email })
        .execute()
    }

    async getPosts(): Promise<PostEntity | PostEntity[]> {
        return await this.postReposistory.find()
    }

    async increaseThumbsByPost(detail_id: number): Promise<void> {
        await this.postDetailReposistory.createQueryBuilder()
        .update(PostDetailEntity)
        .set({
            thumbs: () => 'thumbs + 1'
        })
        .where('id = :detail_id', { detail_id })
        .execute()
    }

    async increaseThumbsByReply(reply_id: number): Promise<void> {
        await this.replyReposistory.createQueryBuilder()
        .update(ReplyEntity)
        .set({
            thumbs: () => 'thumbs + 1'
        })
        .where('id = :reply_id', { reply_id })
        .execute()
    }

    async modifyReply(reply_id: number, content: string): Promise<void> {
        await this.replyReposistory.createQueryBuilder()
        .update(ReplyEntity)
        .set({
            content: content
        })
        .where('id = :reply_id', { reply_id })
        .execute()
    }

    async modifyPostDetail(detail_id: number, content: string): Promise<void> {
        await this.replyReposistory.createQueryBuilder()
        .update(PostDetailEntity)
        .set({
            content: content
        })
        .where('id = :detail_id', { detail_id })
        .execute()
    }
}