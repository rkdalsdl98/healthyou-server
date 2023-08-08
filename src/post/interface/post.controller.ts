import { 
    Controller, 
    Post, 
    Body, 
    Get, 
    Param,
    Delete,
    Put,
    Patch,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegistPostDto } from './dto/regist_post.dto';
import { RegistPostCommand } from '../application/command/regist_post.command';
import { DeletePostCommand } from '../application/command/delete_post.command';
import { AddReplyCommand } from '../application/command/add_reply.command';
import { PostDto } from './dto/post.dto';
import { GetPostsQuery } from '../application/query/get_posts.query';
import { DeletePostDto } from './dto/delete_post.dto';
import { DeleteReplyDto } from './dto/delete_reply.dto';
import { DeleteReplyCommand } from '../application/command/delete_reply.command';
import { AddReplyDto } from './dto/add_reply.dto';
import { IncreaseThumbsPostCommand } from '../application/command/increase_thumbs_post.command';
import { IncreaseThumbsReplyCommand } from '../application/command/increase_thumbs_reply.command';
import { ModifyPostCommand } from '../application/command/modify_post.command';
import { ModifyDto } from './dto/modify.dto';

@Controller('post')
export class PostController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ){}

    @Post('regist')
    async registPost(@Body() postDto: RegistPostDto) : Promise<void> {
        return this.commandBus.execute(new RegistPostCommand(
            postDto.writer_name,
            postDto.title,
            postDto.content,
            postDto.writer_email,
        ))
    }

    @Delete('delete')
    async deletePost(@Body() deleteDto: DeletePostDto) : Promise<void> {
        return this.commandBus.execute(new DeletePostCommand(deleteDto.email, deleteDto.postId))
    }

    @Get('list')
    async getPosts() : Promise<PostDto | PostDto[]> {
        return this.queryBus.execute(new GetPostsQuery())
    }

    @Put('reply/add')
    async addReplyOnPost(@Body() replyDto: AddReplyDto) : Promise<void> {
        return this.commandBus.execute(new AddReplyCommand(
            replyDto.writer_name,
            replyDto.content,
            replyDto.detail_id,
            replyDto.writer_email
        ))
    } 

    @Delete('reply/delete')
    async deleteReply(@Body() deleteDto: DeleteReplyDto) : Promise<void> {
        return this.commandBus.execute(new DeleteReplyCommand(deleteDto.writer_email, deleteDto.reply_id))
    }

    @Patch('increase/:id')
    async increaseThumbsByPost(@Param('id') id: number): Promise<void> {
        return this.commandBus.execute(new IncreaseThumbsPostCommand(id))
    }

    @Patch('reply/increase/:id')
    async increaseThumbsByReply(@Param('id') id: number): Promise<void> {
        return this.commandBus.execute(new IncreaseThumbsReplyCommand(id))
    }

    @Patch('modify')
    async modifyPostDetail(@Body() modifyDto: ModifyDto): Promise<void> {
        return this.commandBus.execute(new ModifyPostCommand(modifyDto.id, modifyDto.content))
    }

    @Patch('reply/modify')
    async modifyReply(@Body() modifyDto: ModifyDto): Promise<void> {
        return this.commandBus.execute(new ModifyPostCommand(modifyDto.id, modifyDto.content))
    }
}
