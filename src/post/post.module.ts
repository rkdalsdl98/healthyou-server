import { Module } from '@nestjs/common';
import { PostReposistory } from './infra/db/reposistory/post_reposistory';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './infra/db/entity/post.entity';
import { PostDetailEntity } from './infra/db/entity/post_detail.entity';
import { ReplyEntity } from './infra/db/entity/reply.entity';
import { PostController } from './interface/post.controller';
import { PostFactory } from './domain/post.factory';
import { RegistPostHandler } from './application/command/regist_post.handler';
import { PostEventHandler } from './application/event/post_event.handler';
import { PostQueryHandler } from './application/query/post.query.handler';
import { DeletePostHandler } from './application/command/delete_post.handler';
import { AddReplyHandler } from './application/command/add_reply.handler';
import { DeleteReplyHandler } from './application/command/delete_reply.handler';
import { IncreaseThumbsPostHanlder } from './application/command/increase_thumbs_post.handler';
import { IncreaseThumbsReplyHandler } from './application/command/increase_thumbs_reply.handler';
import { ModifyPostHandler } from './application/command/modify_post.handler';
import { ModifyReplyHandler } from './application/command/modify_reply.handler';

const repositories = [
    {
        provide: 'PostReposistory',
        useClass: PostReposistory
    },
]
const queryHandlers = [PostQueryHandler]
const eventHandlers = [
    PostEventHandler,
]
const commandHandlers = [
    RegistPostHandler,
    DeletePostHandler,
    AddReplyHandler,
    DeleteReplyHandler,
    IncreaseThumbsPostHanlder,
    IncreaseThumbsReplyHandler,
    ModifyPostHandler,
    ModifyReplyHandler
]

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([
            PostEntity, 
            PostDetailEntity, 
            ReplyEntity,
        ]),
    ],
    controllers: [PostController],
    providers:[
        PostFactory,
        ...repositories,
        ...eventHandlers,
        ...commandHandlers,
        ...queryHandlers,
    ]
})
export class PostModule {}
