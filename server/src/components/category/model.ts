import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from "typeorm";
import { Post_Categories } from "../post_categories";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(
        () => Post_Categories,
        (post_categorie) => post_categorie.category
    )
    post: Post_Categories[];
}
