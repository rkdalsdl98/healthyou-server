import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { PostDetailEntity } from "./post_detail.entity";

@Entity('reply')
export class ReplyEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 10,
        nullable: false
    })
    writer_name: string

    @Column({
        length: 50,
        nullable: true,
        default: ""
    })
    content: string

    @Column({
        nullable: false
    })
    writer_email: string

    @ManyToOne(_=> PostDetailEntity, detail => detail.replys, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({name: 'detail_id'})
    detail: PostDetailEntity

    @Column({
        nullable: false,
        default: 0
    })
    thumbs: number

    @Column()
    @CreateDateColumn()
    created_at: Date
}