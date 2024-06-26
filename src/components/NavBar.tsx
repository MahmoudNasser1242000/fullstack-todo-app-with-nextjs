import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface IProps {

}

const NavBar = ({ }: IProps) => {
    return (
        <div className='flex justify-center align-middle mt-8'>
            <nav className='lg:w-[55%] md:w-[70%]  sm:w-[85%] w-full flex justify-between align-middle'>
                <ModeToggle />

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className='mr-1' />
                            Add Todo
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    defaultValue="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </nav>
        </div>
    )
}

export default NavBar