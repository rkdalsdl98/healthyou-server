import { IEvent } from "@nestjs/cqrs";
import { EventIdentifier } from "./event.identifier";

export class UserCreateReceiveEvent extends EventIdentifier implements IEvent{
    constructor(readonly email: string, readonly secretCode: string){
        super(UserCreateReceiveEvent.name)
    }
}