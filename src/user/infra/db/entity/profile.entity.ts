import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";


@Entity('profile')
export class ProfileEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(_=> UserEntity, user => user.profile, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    user: UserEntity

    @Column({
        type: 'smallint',
        nullable: false,
    })
    height: number

    @Column({
        type: 'smallint',
        nullable: false,
    })
    weight: number

    @Column({
        type: 'tinyint',
        nullable: false,
    })
    age: number

    @Column({
        nullable: true,
        length: 10,
        default: "Unknown"
    })
    nickname: string
}