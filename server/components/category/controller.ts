import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { errorResponse } from "../util";
import { Category } from "./model";
import { validCreateCategory } from "./validation";

export async function createCategory(req: Request, res: Response) {
    try {
        const { name } = await validCreateCategory.validate(req.body);
        await Category.create({ name }).save();
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function getCategory(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const category = await Category.findOne(id);
        res.send(category);
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function updateCategory(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name } = await validCreateCategory.validate(req.body);
        const category = await Category.findOne(id);
        category.name = name;
        await getRepository(Category).save(category);
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function deleteCategory(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await Category.delete(id);
        res.send({ error: false });
    } catch (error) {
        res.send(errorResponse(error));
    }
}
export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.send(errorResponse(error));
    }
}
