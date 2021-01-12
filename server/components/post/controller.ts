import { Request, Response } from "express";
import { extname } from "path";
import { getRepository, Like } from "typeorm";
import { config } from "../../config";
import { File } from "../files";
import { Post_Categories } from "../post_categories";
import { errorResponse, normalizeImage } from "../util";
import { Post } from "./model";

export async function createPost(req: Request, res: Response) {
    try {
        let { categories, latitude, longitude, title, description } = req.body;
        categories = JSON.parse(categories);
        const { filename, size, originalname } = req.file;
        const image = await getRepository(File)
            .create({
                name: filename,
                size: size.toString(),
                path: `${config.host}/images`,
                type: extname(originalname),
            })
            .save();
        const post = await getRepository(Post)
            .create({
                description,
                image_id: image.id,
                latitude,
                longitude,
                title,
            })
            .save();
        categories.forEach(async (category: number) => {
            await getRepository(Post_Categories)
                .create({
                    category_id: category,
                    post_id: post.id,
                })
                .save();
        });
        res.send({ error: false });
    } catch (error) {
        console.log(error);
        res.send(errorResponse(error));
    }
}
export async function getPost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const post = await getRepository(Post).findOne({
            where: [{ id }],
            relations: ["image", "categories", "categories.category"],
        });
        res.send({
            ...post,
            image: normalizeImage(post.image),
            categories: post.categories.map((category) => category.category),
        });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function deletePost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Post.delete(id);
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function updatePost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const body = req.body;
        let post = await Post.findOne(id);
        post = { ...body };
        await Post.save(post);
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function getPosts(_: Request, res: Response) {
    try {
        const posts = await getRepository(Post).find({
            take: 30,
            relations: ["image", "categories", "categories.category"],
        });
        res.send(
            posts.map((post) => ({
                ...post,
                image: normalizeImage(post.image),
                categories: post.categories.map(
                    (category) => category.category
                ),
            }))
        );
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function getRelated(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const post_categories = await Post_Categories.findOne({
            where: [{ post_id: id }],
        });
        const related = await Post_Categories.createQueryBuilder(
            "post_category"
        )
            .where("post_category.category_id = :category", {
                category: post_categories.category_id,
            })
            .andWhere("post_category.post_id != :post_id", { post_id: id })
            .take(7)
            .leftJoinAndSelect("post_category.post", "post")
            .leftJoinAndSelect("post.image", "image")
            .getMany();
        res.send(
            related.map(({ post }) => ({
                ...post,
                image: normalizeImage(post.image),
            }))
        );
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function getTrending(_: Request, res: Response) {
    try {
        const posts = await Post.find({
            relations: ["image", "categories", "categories.category"],
            take: 7,
            order: { id: "ASC" },
        });
        res.send(
            posts.map((post) => ({
                ...post,
                image: normalizeImage(post.image),
                categories: post.categories.map(
                    (category) => category.category
                ),
            }))
        );
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function getQuery(req: Request, res: Response) {
    try {
        const { query } = req.params;
        const posts = await Post.find({
            where: { title: Like(`%${query}%`) },
            relations: ["image", "categories", "categories.category"],
        });
        res.send(
            posts.map((post) => ({
                ...post,
                image: normalizeImage(post.image),
                categories: post.categories.map(
                    (category) => category.category
                ),
            }))
        );
    } catch (error) {
        res.send(errorResponse(error));
    }
}
