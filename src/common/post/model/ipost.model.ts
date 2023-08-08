import { IPostDetailModel } from "./ipost_detail.model";

export interface IPostModel {
    readonly writer_email: string
    readonly writer_name: string
    readonly title: string
    readonly detail: IPostDetailModel
}