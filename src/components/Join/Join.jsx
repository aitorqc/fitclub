import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Join.css';

export default function Join() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t86jojk', 'template_zvoa6zc', form.current, 'iIfzOEAUN34j8E6As')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='join'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span className='stroke-text'>YOUR BODY</span>
                    <span> WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your Name' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}
