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
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import DeleteModal from "./DeleteModal";

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
                            <TableCell>{todo.title}</TableCell>
                            <TableCell>{todo.body}</TableCell>
                            <TableCell>{todo.completed}</TableCell>
                            <TableCell className="flex justify-start align-middle space-x-4">
                                <Button size={"icon"}>
                                    <Pencil />
                                </Button>
                                <DeleteModal todoId={todo.id}/>
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
