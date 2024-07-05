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

export const addTodo = async ({title, body, completed}: {title: string, body?: string | null, completed?: boolean | undefined}) => {
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

export const updateTodo = async (data: {title: string, body?: string | null | undefined, completed?: boolean | undefined}, id: string | undefined) => {
    await prisma.todo.update({
        where: {
            id
        },
        data
    });
    revalidatePath("/")
}