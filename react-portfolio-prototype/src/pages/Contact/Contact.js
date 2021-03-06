// Use module 20.4 to create the contact component

import React from 'react';

function Contact() {
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div className='one'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div className='two'>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div className='three'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;