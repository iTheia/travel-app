import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Comment } from "../comment";
import { File } from "../files";
import { Post_Categories } from "../post_categories";
import { User_Post } from "../user_post";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    title: string;

    @Column()
    image_id: number;

    @ManyToOne(() => File, (file) => file.posts)
    @JoinColumn({ name: "image_id" })
    image: File;

    @Column()
    description: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    @OneToMany(() => Post_Categories, (post_categorie) => post_categorie.post)
    categories: Post_Categories[];

    @OneToMany(() => User_Post, (user_post) => user_post.post)
    users: User_Post[];
}
