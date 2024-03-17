import React from 'react'
import logo from '../../assets/img/pic/logo.png'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <a href='/'>
                <img className="logo__img" alt="" src={logo} />
                <em aria-hidden='true'></em>
                <div className="logo__text">
                    <div className="text__first">경북대학교 물리교육과</div>
                    <div className="text_second">발광물리</div>
                </div>
            </a>
        </h1>
    )
}

export default Logo