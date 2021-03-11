import React, { ReactElement } from 'react'
import Link from 'next/link';
interface Props {

}

function Navbar({ }: Props): ReactElement {
    return (
        <div className="bg-gray-500 py-4">

            <nav className="container mx-auto text-gray-100 flex">
                <Link href="/">DG</Link>
                <div className="ml-auto space-x-4">

                    <Link href="/blog">Blog</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
