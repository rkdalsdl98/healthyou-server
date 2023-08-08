import { IPostDetailModel } from "src/common/post/model/ipost_detail.model";
import { ReplyModel } from "./reply.model"

export class PostDetailModel implements IPostDetailModel {
    constructor(
        readonly content: string,
        readonly replys: ReplyModel[],
    ) {}
}