import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

function header() {
    return (
        <div className='fixed top-0'>
            <nav>
                <Link href="/">
                    <Image />
                </Link>
            </nav>



            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

    )
}

export default header