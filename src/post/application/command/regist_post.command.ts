import { ICommand } from "@nestjs/cqrs";
export class RegistPostCommand implements ICommand {
    constructor(
       readonly writer_name: string,
       readonly title: string,
       readonly content: string,
       readonly writer_email: string,
    ){}
}