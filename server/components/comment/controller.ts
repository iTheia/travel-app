import { Request, Response } from "express";
import { IRequest } from "../types";
import { errorResponse } from "../util";
import { Comment } from "./model";
import { validCommentSchema } from "./validation";

export async function createComment(req: IRequest, res: Response) {
    try {
        const { id: post_id } = req.params;
        const { comment } = await validCommentSchema.validate(req.body);
        const { id } = req.userInfo;
        await Comment.create({
            comment,
            post_id: parseInt(post_id),
            author_id: id,
        }).save();
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}

export async function deleteComment(req: IRequest, res: Response) {
    try {
        const { id } = req.params;
        const { id: author_id } = req.userInfo;
        await Comment.delete({ id: parseInt(id), author_id });
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function getComments(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const comments = await Comment.find({
            where: [{ post_id: id }],
            relations: ["author", "author.avatar"],
            take: 10,
        });
        const numComments = await Comment.find({
            where: [{ post_id: id }],
        });

        res.send({
            comments: comments.map(({ comment, author }) => ({
                comment: comment,
                author: {
                    name: author.name,
                    avatar: `${author.avatar.path}/${author.avatar.name}.${author.avatar.type}`,
                },
            })),
            numComments: numComments.length,
        });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
