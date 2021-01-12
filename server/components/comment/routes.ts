import { Router } from "express";
import { createComment, deleteComment, getComments } from "./controller";
import { authorizationMiddleware } from "../../middlewares";
export const commentRouter = Router();

commentRouter
    .route("/post/:id")
    .get(getComments)
    .post(authorizationMiddleware, createComment);

commentRouter
    .route("/:id")
    .put()
    .delete(authorizationMiddleware, deleteComment);
