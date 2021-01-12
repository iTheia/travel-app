import { Router } from "express";
import { authorizationMiddleware } from "../../middlewares";
import {
    addFavorite,
    deleteFavorite,
    getFavorites,
    isFavorite,
} from "./controller";

export const userRouter = Router();

userRouter.use(authorizationMiddleware);

userRouter.get("/getFavorites", getFavorites);
userRouter.get("/isFavorite/:post_id", isFavorite);
userRouter.get("/addFavorite/:post_id", addFavorite);
userRouter.get("/deleteFavorite/:post_id", deleteFavorite);
