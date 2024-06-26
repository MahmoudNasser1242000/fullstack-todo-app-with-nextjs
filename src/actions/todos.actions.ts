"use server"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllTodos = async () => {
    return await prisma.todo.findMany();
}