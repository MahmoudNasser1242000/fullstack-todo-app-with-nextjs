import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

interface IProps {

}

const NavBar = ({ }: IProps) => {
    return (
        <div className='flex justify-center align-middle mt-8'>
            <nav className='lg:w-[55%] md:w-[70%]  sm:w-[85%] w-full flex justify-between align-middle'>
                <ModeToggle/>
                <Button>
                    <Plus className='mr-1'/>
                    Add Todo
                </Button>
            </nav>
        </div>
    )
}

export default NavBar