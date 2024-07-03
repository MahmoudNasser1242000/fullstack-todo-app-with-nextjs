import React from 'react'
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
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from './ui/button';
import { addTodo } from '@/actions/todos.actions';

const TodoForm = () => {
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
            .string()
            .max(100, {
                message: "Username must not be longer than 100 characters.",
            })
            .optional(),
    });

    type ProfileFormValues = z.infer<typeof profileFormSchema>;

    // This can come from your database or API.
    const defaultValues: Partial<ProfileFormValues> = {
        title: "",
        body: "",
    };

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    });

    const onSubmit = async (data: ProfileFormValues) => {
        const res = await addTodo({ title: data.title, body: data.body })
        console.log(res);
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
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...field}
                                    />
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
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
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

                    <Button type='submit'>Add Todo</Button>
                </form>
            </Form>
        </>
    )
}

export default TodoForm