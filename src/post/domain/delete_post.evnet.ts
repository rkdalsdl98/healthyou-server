import { IEvent } from "@nestjs/cqrs";
import { EventIdentifier } from "./event.identifier";

export class DeletePostEvent extends EventIdentifier implements IEvent {
    constructor(){
        super(DeletePostEvent.name)
    }
}