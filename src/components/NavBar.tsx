import React from 'react'
import { ModeToggle } from './ModeToggle'
import Modal from './Modal'

interface IProps {

}

const NavBar = ({ }: IProps) => {
    return (
        <div className='flex justify-center align-middle mt-8'>
            <nav className='lg:w-[55%] md:w-[70%]  sm:w-[85%] w-full flex justify-between align-middle'>
                <ModeToggle />
                <Modal/>
            </nav>
        </div>
    )
}

export default NavBar