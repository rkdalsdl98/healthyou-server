import { IPostModel } from "src/common/post/model/ipost.model";
import { PostDetailModel } from "./post_detail.model";

export class PostModel implements IPostModel {
    constructor(
        readonly writer_email: string,
        readonly writer_name: string,
        readonly title: string,
        readonly detail: PostDetailModel,
    ) {}
}