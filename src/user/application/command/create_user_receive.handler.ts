import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserReceiveCommand } from './create_user_receive.command';
import { UnprocessableEntityException, Inject } from '@nestjs/common';

import { UserFactory } from 'src/user/domain/user.factory';
import { UserReposistory } from 'src/user/infra/db/reposistory/user.reposistory';

require('dotenv').config()

@CommandHandler(CreateUserReceiveCommand)
export class CreateUserReceiveHandler implements ICommandHandler<CreateUserReceiveCommand> {
    constructor(
        @Inject('UserReposistory') 
        private readonly userResposistory: UserReposistory,
        private readonly userFactory: UserFactory,
    ){
    }

    async execute(command: CreateUserReceiveCommand): Promise<any> {
        const entity = await this.userResposistory.findByEmail(command.email)
        if(entity !== null) throw new UnprocessableEntityException('중복된 이메일 입니다')
        
        this.userFactory.createReceive({
            ...command, 
        })
    }
}