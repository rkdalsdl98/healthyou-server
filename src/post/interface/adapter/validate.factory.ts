import { ValidateFactory as ExternalValidateFactory } from "src/common/post/validate/validate.factory";
import { IValidateFactor } from "src/user/domain/adapter/ivalidate.factory";

export class ValidateFactory implements IValidateFactor {
    constructor(
        private readonly validateFactory : ExternalValidateFactory
    ){}

    validDetail(value: any): boolean | Promise<boolean> {
        return this.validateFactory.validDetail(value)
    }
    validReplys(value: any): boolean | Promise<boolean> {
        return this.validateFactory.validReplys(value)
    }
    validatePost(value: any): boolean | Promise<boolean> {
        return this.validateFactory.validatePost(value)
    }
}