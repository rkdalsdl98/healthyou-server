export interface IValidateFactor {
    validReplys(value: any): boolean | Promise<boolean>
    validDetail(value: any): boolean | Promise<boolean>
    validatePost(value: any): boolean | Promise<boolean>
}