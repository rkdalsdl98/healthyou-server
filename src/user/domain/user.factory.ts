import { Inject, Injectable } from '@nestjs/common'
import { EventBus } from '@nestjs/cqrs'
import { UserModel } from './model/user.model'
import { UserCreateEvent } from './user_create.event'
import { UserCreateReceiveEvent } from './user_create_receive.event'
import { UserAuthManager } from '../application/auth/user_auth.manager'


@Injectable()
export class UserFactory {
    private temporaryAccounts : Map<string, UserModel>

    constructor(
        private readonly eventBus: EventBus,
        @Inject('UserAuthManager') 
        private readonly authManager: UserAuthManager,
    ){
        this.temporaryAccounts = new Map<string, UserModel>()
    }

    public create({
        email,
        key,
    }) : { user: UserModel, accessToken: string | Promise<string> } {
        if(this.temporaryAccounts.has(key)) {
            const user : UserModel = this.temporaryAccounts.get(key)
            this.temporaryAccounts.delete(key)
            this.eventBus.publish(new UserCreateEvent(email))
            return { 
                user, 
                accessToken: this.authManager.publishToken({
                    email, 
                    profile: {
                        nickname: user.getNickName(),
                        height: user.getHeight(),
                        weight: user.getWeight(),
                        age: user.getAge(),
                    }
                }) 
            }
        }
        throw Error('NotValidKey')
    }
    
    public reconstitute({
        email,
        password,
        nickname,
        height,
        weight,
        age,
        salt,
    }) : UserModel {
        return new UserModel(
            email, 
            password, 
            nickname, 
            height, 
            weight, 
            age,
            salt
        )
    }

    public createReceive({
        email,
        password,
        nickname,
        height,
        weight,
        age,
    }) : void {
        const key = this.authManager.createVerifyCode(6)
        if(this.temporaryAccounts.has(key)) 
            this.createReceive({
                email,
                password,
                nickname,
                height,
                weight,
                age,
            })
        this.eventBus.publish(new UserCreateReceiveEvent(email, key))
        const { hashcode, salt } = this.authManager.encryption(password)
        this.temporaryAccounts.set(
            key,
            new UserModel(
                email, 
                hashcode, 
                nickname, 
                height, 
                weight, 
                age,
                salt,
            )
        )
    }
}