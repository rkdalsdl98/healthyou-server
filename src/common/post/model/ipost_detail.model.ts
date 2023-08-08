import { IReplyModel } from "./ireply.model";

export interface IPostDetailModel {
    readonly content: string,
    readonly replys: IReplyModel[],
}