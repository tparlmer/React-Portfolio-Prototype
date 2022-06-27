import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

function Footer() {
    return (
        <footer>
            <h2>&#10084;&#65039; I Love You.</h2>
            <div>
                <AiFillGithub />
                <AiFillLinkedin />
                <AiOutlineMail />
                &copy; 2022 Parlmer, Inc.
            </div>
        </footer>

    )
}

export default Footer;