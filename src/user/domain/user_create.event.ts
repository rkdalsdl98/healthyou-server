import { IEvent } from "@nestjs/cqrs";
import { EventIdentifier } from "./event.identifier";

export class UserCreateEvent extends EventIdentifier implements IEvent {
    constructor(readonly email: string) {
        super(UserCreateEvent.name)
    }
}