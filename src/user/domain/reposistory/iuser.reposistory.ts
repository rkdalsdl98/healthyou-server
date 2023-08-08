import { UserEntity } from "src/user/infra/db/entity/user.entity";
import { UserModel } from "../model/user.model";

export interface IUserReposistory {
    findByEmail(email: string) : Promise<UserEntity>
    insertUser(user: UserModel) : Promise<void>
}