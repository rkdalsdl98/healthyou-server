import { IsString, IsNumber, IsNotEmpty } from "class-validator"

export class DeletePostDto {
    @IsNotEmpty()
    @IsString()
    readonly email: string

    @IsNotEmpty()
    @IsNumber()
    readonly postId: number
}