import { 
    IsString, 
    IsNotEmpty,
    IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { PostDetailModel } from "src/post/domain/model/post_detail.model";

export class PostDto {
    @IsNotEmpty()
    @IsNumber()
    readonly post_id: number

    @IsNotEmpty()
    @IsString()
    readonly writer_name: string

    @IsNotEmpty()
    @IsString()
    readonly writer_email: string

    @IsNotEmpty()
    @Type(_=> PostDetailModel)
    readonly detail: PostDetailModel
}