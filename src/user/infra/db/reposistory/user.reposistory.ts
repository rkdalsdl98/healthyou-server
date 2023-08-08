import { InjectRepository } from "@nestjs/typeorm";
import { IUserReposistory } from "src/user/domain/reposistory/iuser.reposistory";
import { UserModel } from "src/user/domain/model/user.model";
import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
import { ProfileEntity } from "../entity/profile.entity";

export class UserReposistory implements IUserReposistory {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userReposistory: Repository<UserEntity>,
    ) {}

    async findByEmail(email: string): Promise<UserEntity> {
        const entity : UserEntity = await this.userReposistory.findOneBy({email})
        
        if(!entity) return null
        return entity
    }

    async insertUser(user: UserModel): Promise<void> {
        const profileEntity : ProfileEntity = new ProfileEntity()
        profileEntity.age = user.getAge()
        profileEntity.height = user.getHeight()
        profileEntity.weight = user.getWeight()
        profileEntity.nickname = user.getNickName()

        const userEntity : UserEntity = new UserEntity()
        userEntity.email = user.getEmail()
        userEntity.password = user.getPassword()
        userEntity.profile = profileEntity
        userEntity.salt = user.getSalt()
        
        await this.userReposistory.save(userEntity)
    }
}