import { IEvent } from "@nestjs/cqrs";
import { EventIdentifier } from "./event.identifier";

export class RegistPostEvent extends EventIdentifier implements IEvent {
    constructor(){
        super(RegistPostEvent.name)
    }
}