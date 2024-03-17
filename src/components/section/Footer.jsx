import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className='developer__sns'>
                <a href='https://www.instagram.com/on_dizzy/'>
                    <AiOutlineInstagram />
                    <span>MY INSTAGRAM</span>
                </a>
            </div>
            <div className='developer__info'>
                <span>Email : mikhailvelm05@gmail.com / T.010-3815-2053<br />Copyright ⓒ Kim Tae Hyeong. All rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer