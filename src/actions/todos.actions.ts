"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllTodos = async ({userId}: {userId: string | null}) => {
    return await prisma.todo.findMany({
        where: {
            UserId: userId as string
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const addTodo = async ({
    title,
    body,
    completed,
    userId,
}: {
    title: string;
    body?: string | null;
    completed?: boolean | undefined;
    userId: string | null | undefined;
}) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            UserId: userId as string,
            completed,
        },
    });
    revalidatePath("/");
};

export const deleteTodo = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: {
            id,
        },
    });
    revalidatePath("/");
};

export const updateTodo = async (
    data: {
        title: string;
        body?: string | null | undefined;
        completed?: boolean | undefined;
    },
    id: string | undefined
) => {
    await prisma.todo.update({
        where: {
            id,
        },
        data,
    });
    revalidatePath("/");
};
