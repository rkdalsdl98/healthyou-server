import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    OneToOne,
    OneToMany,
    JoinColumn,
} from "typeorm";
import { PostEntity } from "./post.entity";
import { ReplyEntity } from "./reply.entity";

@Entity('post_detail')
export class PostDetailEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true,
        default: ""
    })
    content: string

    @OneToOne(_=> PostEntity, post => post.detail,{
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    post: PostEntity

    @OneToMany(_=> ReplyEntity, reply => reply.detail, {
        eager: true,
        onDelete: 'CASCADE',
        cascade: ['insert', 'update']
    })
    replys: ReplyEntity[]

    @Column({
        nullable: false,
        default: 0
    })
    thumbs: number
}