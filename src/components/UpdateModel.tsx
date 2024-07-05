"use client"

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Pencil } from "lucide-react";
import TodoForm from "./TodoForm";
import { Button } from "./ui/button";
import { ITodo } from "@/types";

const UpdateModel = ({todo}: {todo: ITodo}) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button size={"icon"}>
                        <Pencil />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-[28px] mb-[24px]">Edit profile</DialogTitle>
                    </DialogHeader>
                    <TodoForm setOpen={setOpen} type={"update"} todo={todo}/>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default UpdateModel;
