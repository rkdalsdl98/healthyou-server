import { IQuery } from "@nestjs/cqrs";
import { QueryIdentifier } from "./query.identifier";

export class GetPostsQuery extends QueryIdentifier implements IQuery {
    constructor(){
        super(GetPostsQuery.name)
    }
}