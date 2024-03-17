import React from 'react'

import Top from '../header/Top'
import Logo from '../header/Logo'
import Menu from '../header/Menu'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <Top />
            <Logo />
            <Menu />
        </header>
    )
}

export default Header