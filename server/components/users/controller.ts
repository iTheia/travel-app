import { Response } from "express";
import { IRequest } from "../types";
import { User_Post } from "../user_post";
import { errorResponse } from "../util";

export async function getFavorites(req: IRequest, res: Response) {
    try {
        const { id } = req.userInfo;
        const favorites = await User_Post.find({
            where: [{ user_id: id }],
            relations: ["post", "post.image"],
        });
        if (!favorites) {
            return res.send([]);
        }
        res.send(favorites);
    } catch (error) {
        console.log(error);
        res.send(errorResponse(error));
    }
}

export async function isFavorite(req: IRequest, res: Response) {
    try {
        const { id } = req.userInfo;
        const { post_id } = req.params;
        const x = await User_Post.findOneOrFail({
            where: [{ user_id: id, post_id }],
        });
        console.log(x);
        res.send(true);
    } catch (error) {
        res.send(false);
    }
}

export async function addFavorite(req: IRequest, res: Response) {
    try {
        const { id } = req.userInfo;
        const { post_id } = req.params;
        await User_Post.create({
            user_id: id,
            post_id: parseInt(post_id),
        }).save();
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function deleteFavorite(req: IRequest, res: Response) {
    try {
        const { id } = req.userInfo;
        const { post_id } = req.params;
        await User_Post.delete({ user_id: id, post_id: parseInt(post_id) });
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
