import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LoginQuery } from "./login.query";
import { Inject } from "@nestjs/common/decorators";
import { UserReposistory } from "src/user/infra/db/reposistory/user.reposistory";
import { NotFoundException } from "@nestjs/common";
import { UserAuthManager } from "../auth/user_auth.manager";
import { UserDto } from "src/user/interface/dto/user.dto";

@QueryHandler(LoginQuery)
export class LoginHandler implements IQueryHandler<LoginQuery> {
    constructor(
        @Inject('UserReposistory')
        private readonly userReposistory: UserReposistory,
        @Inject('UserAuthManager')
        private readonly userAuthManager: UserAuthManager
    ){}
    
    async execute(query: LoginQuery): Promise<any> {
        const { email, pass } = query
        const entity = await this.userReposistory.findByEmail(email)
        if(entity === null || entity === undefined) throw NotFoundException

        const res = this.userAuthManager.verifyPass(
            entity.password,
            pass,
            entity.salt,
        )
        if(res) {
            const user : UserDto = new UserDto()
            user.email = entity.email
            user.profile = user.profile
            return {
                accessToken: this.userAuthManager.publishToken(user)
            }
        }
        throw new Error('VerifyFailed')
    }
}