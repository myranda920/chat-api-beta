import React from 'react'
import Header from '../../common/components/Header'
import About from './About/About'
import Chat from './Chat/Chat'

export default function LandingPage() {
    return (
        <div>
            <Header />
            <About />
            <Chat />
        </div>
    )
}
