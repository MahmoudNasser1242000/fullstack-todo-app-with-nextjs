import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
    // todo queries
    // await prisma.todo.createMany({
    //     data: Array.from({length: 25}, () => ({
    //         title: faker.lorem.text(),
    //         body: faker.lorem.paragraph()
    //     }))
    // })

    // post queries
    // await prisma.post.createMany({
    //     data: Array.from({length: 25}, () => ({
    //         slug: faker.lorem.text(),
    //         title: faker.lorem.text(),
    //         body: faker.lorem.paragraph(),
    //         authorId: "1"
    //     }))
    // })

    //user queries
    // await prisma.user.createMany({
    //     data: Array.from({length: 25}, () => ({
    //         email: faker.internet.email(),
    //         name: faker.internet.userName(),
    //         address: {
    //             street: faker.location.street(),
    //             city: faker.location.city(),
    //             state: faker.location.state(),
    //             zip: faker.location.zipCode()
    //         }
    //     }))
    // })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })