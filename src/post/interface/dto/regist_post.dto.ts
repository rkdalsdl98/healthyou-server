import { 
    IsString, 
    IsNotEmpty,
    Length,
    IsNumber,
    IsOptional,
} from "class-validator";
import { Transform,  } from "class-transformer";

export class RegistPostDto {
    constructor({
        writer_name,
        title,
        content,
        writer_email,
    })
    {
        this.writer_name = writer_name
        this.title = title
        this.content = content
        this.writer_email = writer_email
    }

    @IsNotEmpty()
    @IsNumber()
    readonly writer_email: string

    @IsNotEmpty()
    @IsString()
    @Length(2, 10)
    readonly writer_name: string

    @IsNotEmpty()
    @Transform(({value}) => value ?? "")
    @IsString()
    @Length(0, 20)
    readonly title: string

    @IsOptional()
    @Transform(({value}) => value ?? "")
    @IsString()
    @Length(200)
    readonly content?: string
} 