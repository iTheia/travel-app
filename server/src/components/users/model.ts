import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Comment } from "../comment";
import { File } from "../files";
import { User_Post } from "../user_post";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, default: "tester" })
    name: string;

    @Column({ nullable: true, default: 1 })
    avatar_id: number;

    @ManyToOne(() => File, (file) => file.users)
    @JoinColumn({ name: "avatar_id" })
    avatar: File;

    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[];

    @OneToMany(() => User_Post, (user_post) => user_post.user)
    favorites: User_Post[];
}
