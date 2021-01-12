import { Router } from "express";
import multer from "multer";
import { authorizationMiddleware, uploadOptions } from "../../middlewares";
import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    getRelated,
    getTrending,
    getQuery,
    updatePost,
} from "./controller";

export const postRouter = Router();

postRouter.use(multer(uploadOptions).single("image"));
postRouter.route("/").get(getPosts).post(createPost);
postRouter.get("/search/:query", getQuery);
postRouter.get("/getTrending", getTrending);
postRouter.get("/getRelated/:id", getRelated);
postRouter
    .route("/:id")
    .get(getPost)
    .put(authorizationMiddleware, updatePost)
    .delete(authorizationMiddleware, deletePost);
