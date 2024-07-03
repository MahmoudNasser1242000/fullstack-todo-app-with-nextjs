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

export const addTodo = async ({title, body, completed}: {title: string, body?: string | undefined, completed?: boolean | undefined}) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed
        }
    });
    revalidatePath("/")
}

export const deleteTodo = async ({id}: {id: string}) => {
    await prisma.todo.delete({
        where: {
            id
        }
    });
    revalidatePath("/")
}