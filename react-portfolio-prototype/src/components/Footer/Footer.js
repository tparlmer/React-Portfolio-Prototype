import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <h2>&#10084;&#65039; I Love You.</h2>
            <div>
                <AiFillGithub />
                <AiFillLinkedin />
                <AiOutlineMail />
            </div>
        </footer>

    )
}

export default Footer;