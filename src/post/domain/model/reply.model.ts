import { IReplyModel } from "src/common/post/model/ireply.model"

export class ReplyModel implements IReplyModel {
    constructor(
        readonly content: string,
        readonly thumbs: number,
        readonly created_at: Date,
        readonly detail_id: number,
        readonly writer_email: string,
        readonly writer_name: string,
        readonly reply_id: number,
    ){}
}