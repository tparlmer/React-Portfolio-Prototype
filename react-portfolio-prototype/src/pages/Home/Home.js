import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <div>
                    <iframe src="https://giphy.com/embed/9bK3VDWSdu1X8VGhlg" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className="prompt">
                    <p>👋 Greetings! I am Thomas.</p>
                    <p>👔 I am a teacher,</p>
                    <p>🧑‍🎨 a well-fed artist,</p>
                    <p>👨‍💻 ...and a software engineer.</p>

                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiOutlineMail />
                </div>
            </div>
        </div>
    )
}

export default Home;