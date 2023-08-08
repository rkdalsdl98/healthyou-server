import { IEvent } from "@nestjs/cqrs";
import { EventIdentifier } from "./event.identifier";

export class AddReplyEvent extends EventIdentifier implements IEvent {
    constructor(){
        super(AddReplyEvent.name)
    }
}