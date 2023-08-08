import { 
    IsString, 
    IsNumber, 
    Length, 
} from "class-validator";

export class CreateUserReceiveDto {
    @IsString()
    readonly email: string

    @IsString()
    readonly password: string

    @IsString()
    @Length(2, 10)
    readonly nickname: string

    @IsNumber()
    readonly height: number

    @IsNumber()
    readonly weight: number

    @IsNumber()
    readonly age: number
}