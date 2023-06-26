import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {

    const session = null

    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image src="/logo.svg" alt='Flexibble-logo' width={115} height={43} />
                </Link>
                <ul className='hidden xl:flex text-small gap-7'>
                    {NavLinks.map((item) => (
                        <Link href={item.href} key={item.key}>{item.text}</Link>
                    ))}
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {
                    session ? (
                        <>
                            Userphoto
                            <Link href='/create-project'>
                                Share your work
                            </Link>
                        </>
                    ) : (<AuthProviders />)
                }
            </div>
        </nav>
    )
}

export default Navbar