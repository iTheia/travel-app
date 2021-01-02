import { Request, Response } from "express";
import { extname } from "path";
import { Like } from "typeorm";
import { config } from "../../config";
import { File } from "../files";
import { Post_Categories } from "../post_categories";
import { errorResponse } from "../util";
import { Post } from "./model";

export async function createPost(req: Request, res: Response) {
    try {
        const { categories, latitude, longitude, title } = req.body;
        const { filename, size, originalname } = req.file;
        const image = await File.create({
            name: filename,
            size: size.toString(),
            path: `${config.host}/images`,
            type: extname(originalname),
        }).save();
        const post = await Post.create({
            image_id: image.id,
            latitude,
            longitude,
            title,
        }).save();
        categories.forEach(
            async (category: { category: string; id: number }) => {
                await Post_Categories.create({
                    category_id: category.id,
                    post_id: post.id,
                }).save();
            }
        );
        res.send({ error: true });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function getPost(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const post = await Post.findOne({
            where: [{ id }],
            relations: ["image", "categories", "categories.category"],
        });
        res.send({
            ...post,
            image: `${post.image.path}/${post.image.name}`,
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
        const posts = await Post.find({
            take: 30,
            relations: ["image", "categories", "categories.category"],
        });
        res.send(
            posts.map((post) => ({
                ...post,
                image: `${post.image.path}/${post.image.name}`,
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
        let post: any = await Post_Categories.find({
            where: [{ post_id: id }],
            relations: ["category"],
        });
        const related = await Post_Categories.find({
            where: post.map((item) => ({ category_id: item.category_id })),
            take: 7,
            relations: ["post", "post.image"],
        });
        res.send(
            related.map(({ post }) => ({
                ...post,
                image: `${post.image.path}/${post.image.name}`,
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
            order: { id: "DESC" },
        });
        res.send(
            posts.map((post) => ({
                ...post,
                image: `${post.image.path}/${post.image.name}`,
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
                image: `${post.image.path}/${post.image.name}`,
                categories: post.categories.map(
                    (category) => category.category
                ),
            }))
        );
    } catch (error) {
        res.send(errorResponse(error));
    }
}
