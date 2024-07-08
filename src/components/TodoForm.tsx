import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from './ui/button';
import { addTodo, updateTodo } from '@/actions/todos.actions';
import { Checkbox } from "@/components/ui/checkbox"

import LoadingSpinner from './LoadingSpinner';
import { ITodo } from '@/types';
import { auth } from '@clerk/nextjs/server';
import toast from 'react-hot-toast';

const TodoForm = ({ setOpen, type, todo, userId }: { setOpen: (open: boolean) => void, type: string, todo?: ITodo, userId?: string | null }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const profileFormSchema = z.object({
        title: z
            .string()
            .min(2, {
                message: "Title must be at least 2 characters.",
            })
            .max(50, {
                message: "Username must not be longer than 50 characters.",
            }),
        body: z
            .union([
                z.string()
                .max(100, {
                    message: "Username must not be longer than 100 characters.",
                }),
                z.null(),
            ])
            .optional(),
        completed: z
            .boolean()
            .optional()
    });

    type ProfileFormValues = z.infer<typeof profileFormSchema>;

    // This can come from your database or API.
    const defaultValues: Partial<ProfileFormValues> = {
        title: type === "update" ? todo?.title : "",
        body: type === "update" ? todo?.body : "",
        completed: type === "update" ? todo?.completed : false
    };

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    });
    
    const onSubmit = async (data: ProfileFormValues) => {
        if (type === "create") {
            try {
                setLoading(true)
                await addTodo({ title: data.title, body: data.body, completed: data.completed, userId });
                toast.success('Successfully created!');
                setOpen(false)
            } catch (error) {
                toast.error('SomeThing wrong, Please try again!');
                setOpen(false)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        } else {
            try {
                setLoading(true)
                await updateTodo(data, todo?.id);
                toast.success('Successfully updated!');
                setOpen(false)
            } catch (error) {
                toast.error('SomeThing wrong, Please try again!');
                setOpen(false)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <>
            <Form {...form}>
                <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Body</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...field}
                                        value={field.value === null? "" : field.value}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="completed"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Accept terms and conditions
                                        </label>
                                    </div>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>
                        {
                            loading ? <LoadingSpinner /> : "Add Todo"
                        }
                    </Button>
                </form>
            </Form>
        </>
    )
}

export default TodoForm