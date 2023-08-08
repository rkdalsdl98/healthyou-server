import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddReplyEvent } from "src/post/domain/add_reply.event";
import { DeletePostEvent } from "src/post/domain/delete_post.evnet";
import { DeleteReplyEvent } from "src/post/domain/delete_reply.event";
import { RegistPostEvent } from "src/post/domain/regist_post.event";


@EventsHandler(RegistPostEvent, DeletePostEvent, AddReplyEvent, DeleteReplyEvent)
export class PostEventHandler implements IEventHandler<RegistPostEvent | DeletePostEvent | AddReplyEvent | DeleteReplyEvent> {
    async handle(event: RegistPostEvent | DeletePostEvent | AddReplyEvent | DeleteReplyEvent) : Promise<void> {
        switch(event.eventname) {
            case RegistPostEvent.name:
                console.log('게시글 생성 완료.')
                break
            case DeletePostEvent.name:
                console.log('게시글 삭제 완료.')
                break
            case AddReplyEvent.name:
                console.log('댓글 등록 완료.')
                break
            case DeleteReplyEvent.name:
                console.log('댓글 삭제 완료.')
                break
        }
    }
}