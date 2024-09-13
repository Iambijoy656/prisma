import { Request, Response } from "express"
import { UserService } from "./user.service"


const createUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.createUser(req.body)
        res.send({
            success: true,
            message: "User Create Successfully",
            data: result
        })
    } catch (e) {
        res.send(e)
    }
}

const insertOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertOrUpdateProfile(req.body)
        res.send({
            success: true,
            message: "Profile Create/Update Successfully",
            data: result
        })
    } catch (e) {
        res.send(e)
    }
}


const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUsers()
        res.send({
            success: true,
            message: "Get Users Successfully",
            data: result
        })

    } catch (e) {
        res.send(e)

    }
}


const getSingleUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getSingleUser(parseInt(req.params.id))
        res.send({
            success: true,
            message: "Get User Successfully",
            data: result
        })

    } catch (e) {
        res.send(e)

    }
}



export const userController = {
    createUser,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}