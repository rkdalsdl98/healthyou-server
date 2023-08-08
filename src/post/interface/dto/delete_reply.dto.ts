import { 
    IsString, 
    IsNumber,
    IsNotEmpty,
} from "class-validator";

export class DeleteReplyDto {
    @IsNotEmpty()
    @IsString()
    readonly writer_email: string

    @IsNotEmpty()
    @IsNumber()
    readonly reply_id: number
}