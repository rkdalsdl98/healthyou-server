import { IEvent } from "@nestjs/cqrs";
import { EventIdentifier } from "./event.identifier";

export class DeleteReplyEvent extends EventIdentifier implements IEvent {
    constructor(){
        super(DeleteReplyEvent.name)
    }
}