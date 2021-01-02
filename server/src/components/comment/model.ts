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
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author_id: number;

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({ name: "author_id" })
    author: User;

    @Column()
    post_id: number;
    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({ name: "post_id" })
    post: Post;

    @Column({ nullable: false })
    comment: string;
}
