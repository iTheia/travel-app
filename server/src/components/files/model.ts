import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from "typeorm";
import { Post } from "../post";
import { User } from "../users";

@Entity()
export class File extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: false })
    type: string;

    @Column({ nullable: false })
    size: string;

    @Column()
    path: string;

    @OneToMany(() => Post, (post) => post.image)
    posts: User[];

    @OneToMany(() => User, (userInfo) => userInfo.avatar)
    users: User[];
}
