import React, { ReactElement } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

interface Props {
    children: React.ReactNode
}

function Layout({ children }: Props): ReactElement {
    return (
        <>
            <Head>
                <title>Diego Giuliani | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className="container mx-auto px-4">

                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layout
