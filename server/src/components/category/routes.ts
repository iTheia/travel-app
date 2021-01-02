import { Router } from "express";
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategory,
    updateCategory,
} from "./controller";

export const categoryRouter = Router();

categoryRouter.route("/").get(getCategories).post(createCategory);

categoryRouter
    .route("/:id")
    .get(getCategory)
    .delete(deleteCategory)
    .put(updateCategory);
