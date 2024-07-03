"use server"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllTodos = async () => {
    return await prisma.todo.findMany();
}

export const addTodo = async ({title, body}: {title: string, body?: string | undefined}) => {
    return await prisma.todo.create({
        data: {
            title,
            body
        }
    });
}