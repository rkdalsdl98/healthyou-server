import { 
    IsString, 
    IsNumber, 
    IsNotEmpty, 
    Length,
} from "class-validator";

export class AddReplyDto {
    @IsNotEmpty()
    @IsString()
    @Length(0, 50)
    readonly content: string

    @IsNotEmpty()
    @IsNumber()
    readonly detail_id: number

    @IsNotEmpty()
    @IsString()
    readonly writer_name: string

    @IsNotEmpty()
    @IsString()
    readonly writer_email: string
}