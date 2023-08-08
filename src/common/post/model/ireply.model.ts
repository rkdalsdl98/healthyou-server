export interface IReplyModel {
    readonly content: string,
    readonly thumbs: number,
    readonly created_at: Date,
    readonly detail_id: number,
    readonly writer_email: string,
    readonly writer_name: string,
    readonly reply_id: number,
}