import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Category } from "../category";
import { Post } from "../post/model";

@Entity()
export class Post_Categories extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category_id: number;

    @ManyToOne(() => Category, (user) => user.post, {
        primary: true,
        cascade: true,
    })
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column()
    post_id: number;

    @ManyToOne(() => Post, (post) => post.categories, {
        primary: true,
        cascade: true,
    })
    @JoinColumn({ name: "post_id" })
    post: Post;
}
