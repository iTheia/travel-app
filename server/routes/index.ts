import { Router } from "express";
import { authRoutes, userRouter } from "../components";
import { categoryRouter } from "../components/category";
import { commentRouter } from "../components/comment";
import { postRouter } from "../components/post";

export const router = Router();

router.use("/auth", authRoutes);
router.use("/comments", commentRouter);
router.use("/categories", categoryRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);
