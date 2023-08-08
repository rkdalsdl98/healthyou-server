import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create_user.command';
import { UserFactory } from 'src/user/domain/user.factory';
import { UserReposistory } from 'src/user/infra/db/reposistory/user.reposistory';
import { Inject } from '@nestjs/common'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        private readonly userFactory: UserFactory,
        @Inject('UserReposistory')
        private readonly userReposistory: UserReposistory,
    ){}

    async execute(command: CreateUserCommand): Promise<any> {
        const { user, accessToken } = this.userFactory.create({
            email: command.email,
            key: command.key
        })
        await this.userReposistory.insertUser(user)
        return accessToken
    }
}