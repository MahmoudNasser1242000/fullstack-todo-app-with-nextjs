"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import TodoForm from "./TodoForm";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

const Modal = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>
                        <Plus className="mr-1" />
                        Add Todo
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-[28px] mb-[24px]">Edit profile</DialogTitle>
                    </DialogHeader>
                    <TodoForm setOpen={setOpen}/>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Modal;
