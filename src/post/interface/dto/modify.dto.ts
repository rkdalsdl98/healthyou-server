import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class ModifyDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number

    @IsNotEmpty()
    @IsString()
    readonly content: string
}