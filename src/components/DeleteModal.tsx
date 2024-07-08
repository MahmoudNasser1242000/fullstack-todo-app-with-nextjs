"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2 } from "lucide-react";
import { deleteTodo } from "@/actions/todos.actions";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";

const DeleteModal = ({todoId}: {todoId: string}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    
    const deleteTodoFunc = async () => {
        try {
            setLoading(true)
            await deleteTodo({id: todoId});
            toast.success('Successfully deleted!');
            setOpen(false)
        } catch (error) {
            toast.error('SomeThing wrong, Please try again!');
            setLoading(false)
            setOpen(false)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant={"destructive"} size={"icon"}>
                        <Trash2 />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Delete Todos</DialogTitle>
                        <DialogDescription className="py-3">
                            Are You Sure You Want To Delete This Todo?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose className="space-x-4">
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                            <Button type="button" onClick={() => { deleteTodoFunc() }}>
                                {
                                    loading? <LoadingSpinner/> : "Delete"
                                }
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DeleteModal;
