import { ICommand } from '@nestjs/cqrs';

export class CreateUserReceiveCommand implements ICommand {
    constructor(
        readonly email: string,
        readonly password: string,
        readonly nickname: string,
        readonly height: number,
        readonly weight: number,
        readonly age: number,
    ) {}
}