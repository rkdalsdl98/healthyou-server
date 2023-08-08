import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToOne, 
    JoinColumn,
    CreateDateColumn,
} from "typeorm";
import { PostDetailEntity } from "./post_detail.entity";

@Entity('post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    writer_email: string

    @Column({
        length: 10,
        nullable: false
    })
    writer_name: string

    @Column({
        length: 20,
        nullable: false
    })
    title: string

    @OneToOne(_=> PostDetailEntity, detail => detail.post, {
        onDelete: "CASCADE",
        cascade: ["insert", "update"],
        eager: true
    })
    detail: PostDetailEntity

    @Column()
    @CreateDateColumn()
    created_at: Date
}