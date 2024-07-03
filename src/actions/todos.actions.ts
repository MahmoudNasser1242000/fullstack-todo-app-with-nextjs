"use server"

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

export const getAllTodos = async () => {
    return await prisma.todo.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
}

export const addTodo = async ({title, body}: {title: string, body?: string | undefined}) => {
    return await prisma.todo.create({
        data: {
            title,
            body
        }
    });
}

export const deleteTodo = async ({id}: {id: string}) => {
    await prisma.todo.delete({
        where: {
            id
        }
    });
    revalidatePath("/")
}