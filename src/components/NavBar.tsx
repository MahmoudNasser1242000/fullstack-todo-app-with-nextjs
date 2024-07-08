import React from 'react'
import { ModeToggle } from './ModeToggle'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const NavBar = () => {
    return (
        <div className='flex justify-center align-middle mt-8'>
            <nav className='lg:w-[55%] md:w-[70%]  sm:w-[85%] w-full flex justify-between align-middle'>
                <ModeToggle />
                <>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </>
            </nav>
        </div>
    )
}

export default NavBar