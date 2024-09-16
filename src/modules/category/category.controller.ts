import { Request, Response } from "express"
import { CategoryService } from "./category.service"



const createCategory = async (req: Request, res: Response) => {
    try {
        const result = await CategoryService.createCategory(req.body)
        res.send({
            success: true,
            message: "Category Create Successfully",
            data: result
        })
    } catch (e) {
        res.send(e)
    }
}


export const CategoryController = {
    createCategory
}