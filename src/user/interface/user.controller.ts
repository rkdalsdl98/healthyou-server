import { 
    Controller, 
    Post, 
    Body, 
    UsePipes, 
    ValidationPipe, 
    Param,
    Request
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserReceiveCommand } from '../application/command/create_user_receive.command';
import { CreateUserReceiveDto } from './dto/create_user_receive.dto';
import { CreateUserCommand } from '../application/command/create_user.command';
import { LoginUserDto } from './dto/login_user.dto';
import { LoginQuery } from '../application/query/login.query';
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from './auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    @Post('create')
    @UsePipes(ValidationPipe)
    async createReceive(@Body() receiveDto : CreateUserReceiveDto) : Promise<void> {
        const command : CreateUserReceiveCommand = new CreateUserReceiveCommand(
            receiveDto.email,
            receiveDto.password,
            receiveDto.nickname,
            receiveDto.height,
            receiveDto.weight,
            receiveDto.age
        )
        return this.commandBus.execute(command)
    }

    @Post('create/verify/:email')
    async verifyUser(@Body() code, @Param('email') email: string) : Promise<any> {
        const key = code['secret-code']
        const command = new CreateUserCommand(email, key)
        return this.commandBus.execute(command)
    }

    @UseGuards(AuthGuard)
    @Post('profile')
    async getProfile(@Request() req) : Promise<any> {
        return req.profile
    }

    @Post('login')
    async login(@Body() loginDto: LoginUserDto) : Promise<any> {
        return this.queryBus.execute(new LoginQuery(loginDto.email, loginDto.password))
    }
}
