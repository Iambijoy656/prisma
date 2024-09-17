
import { Request, Response } from "express"
import { PostService } from "./post.service"



const createPost = async (req: Request, res: Response) => {
    try {
        const result = await PostService.createPost(req.body)
        res.send({
            success: true,
            message: "Post Create Successfully",
            data: result
        })
    } catch (e) {
        res.send(e)
    }
}

const getPosts = async (req: Request, res: Response) => {
    // console.log(req.query);
    const options = req.query
    try {
        const result = await PostService.getAllPosts(options);
        res.send({
            success: true,
            message: "Get all posts Successfully",
            total: result.total,
            data: result.data
        })

    } catch (e) {
        res.send(e)

    }
}


const updatePost = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

    try {
        const result = await PostService.updatePost(id, req.body);
        res.send({
            success: true,
            message: "update posts Successfully",
            data: result
        })

    } catch (e) {
        res.send(e)

    }
}



const deletePost = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

    try {
        const result = await PostService.deletePost(id);
        res.send({
            success: true,
            message: "Delete post Successfully",
            data: result
        })

    } catch (e) {
        res.send(e)

    }
}


const learnAggregateAndGrouping = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

    try {
        const result = await PostService.learnAggregateAndGrouping();
        res.send({
            success: true,
            message: "Results!!",
            data: result
        })

    } catch (e) {
        res.send(e)

    }
}




export const PostController = {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    learnAggregateAndGrouping
}