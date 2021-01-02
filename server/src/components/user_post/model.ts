import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Post } from "../post";
import { User } from "../users";

@Entity()
export class User_Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => User, (user) => user.favorites)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    post_id: number;

    @ManyToOne(() => Post, (post) => post.users)
    @JoinColumn({ name: "post_id" })
    post: Post;
}
