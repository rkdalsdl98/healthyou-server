import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToOne
} from "typeorm";
import { ProfileEntity } from "./profile.entity";


@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    uid : number

    @Column({
        nullable: false,
        length: 50,
        unique: true,
    })
    email: string

    @Column({
        nullable: false,
    })
    password: string

    @Column({
        nullable: false,
    })
    salt: string

    @OneToOne(_=> ProfileEntity, profile=> profile.user, {
        onDelete: "CASCADE",
        cascade: ["insert", "update"],
        eager: true
    })
    profile: ProfileEntity
}