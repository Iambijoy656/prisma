import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // const getAllUsers = await prisma.user.findMany();
    // console.log(getAllUsers);


    const postUser = await prisma.user.create(
        {
            data: {
                email: 'bijoy@gmail.com',
                name: 'Bijoy Das',
                age: 18
            }
        }
    )


    console.log('postUser--', postUser);

}

main()