import { getAllTodos } from "@/actions/todos.actions";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import DeleteModal from "./DeleteModal";
import { Badge } from "./ui/badge";

export default async function TodoTable() {
    const todos = await getAllTodos();
    return (
        <div className="container mx-auto px-20 mt-10">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Body</TableHead>
                        <TableHead>Complete</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {todos.map((todo, index) => (
                        <TableRow key={todo.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell >
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild className="flex flex-wrap">
                                            <div>
                                                {todo.title.split(" ").slice(0, 10).join(" ")}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[600px] mx-auto">
                                            {todo.title}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                            <TableCell >
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild className="flex flex-wrap">
                                            <div >
                                                {todo.body?.split(" ").slice(0, 10).join(" ")}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[600px] mx-auto">
                                            {todo.body}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                            <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant="secondary">Uncompleted</Badge>}</TableCell>
                            <TableCell>
                                <div className="flex justify-start items-center space-x-4">
                                    <Button size={"icon"}>
                                        <Pencil />
                                    </Button>
                                    <DeleteModal todoId={todo.id} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter className="w-full">
                    <TableRow className="w-full">
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">{todos?.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
