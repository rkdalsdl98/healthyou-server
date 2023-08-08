import { 
    IsString,
    IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";
import { ProfileDto } from "./profile.dto";


export class UserDto {
    @IsString()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @Type(_=> ProfileDto)
    profile: ProfileDto
}
