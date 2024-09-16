import { PrismaClient } from "@prisma/client";
import express, { Application } from 'express';
import cors from 'cors'
import { userRoute } from "./modules/user/user.route";
import { categoryRoute } from "./modules/category/category.route";
import { postRoute } from "./modules/post/post.route";

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1/user/", userRoute)
app.use("/api/v1/category/", categoryRoute)
app.use("/api/v1/post/", postRoute)




export default app;