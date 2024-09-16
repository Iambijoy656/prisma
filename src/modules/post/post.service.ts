import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
    const result = await prisma.post.create({
        data, include: {
            author: true,
            category: true
        }
    });
    return result;
}


const getAllPosts = async (options: any) => {
    const { sortBy, sortOrder, searchTerm, page, limit } = options
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 5


    return await prisma.$transaction(async (tx) => {
        const result = await tx.post.findMany({
            skip, take,
            include: {
                author: true,
                category: true
            },
            // orderBy: {
            //     createdAt: "desc"
            // }
            // orderBy: {
            //     [sortBy]: sortOrder
            // }

            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            } : {
                createdAt: "desc"
            },
            where: {
                // title: {
                //     contains: searchTerm,
                //     mode: 'insensitive'
                // }
                OR: [
                    {
                        title: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        author: {
                            name: {
                                contains: searchTerm,
                                mode: 'insensitive'
                            }
                        }
                    }
                ]
            }
        })

        const total = await tx.post.count()

        return { data: result, total }
    })


}


export const PostService = {
    createPost,
    getAllPosts
}