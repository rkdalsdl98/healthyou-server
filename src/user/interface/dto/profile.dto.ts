import { Transform } from "class-transformer"
import { IsNumber, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class ProfileDto {
    @IsNumber()
    @IsNotEmpty()
    height: number

    @IsNumber()
    @IsNotEmpty()
    weight: number

    @IsNumber()
    @IsNotEmpty()
    age: number

    @IsOptional()
    @Transform( ({ value }) => value && "Unknown")
    @IsString()
    nickname?: string
}