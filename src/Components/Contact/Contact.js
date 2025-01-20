import React, { useRef } from 'react';
import './Contact.css';
import client_1 from '../../Assets/client_1.png';
import client_2 from '../../Assets/client_2.png';
import client_3 from '../../Assets/client_3.png';
import client_4 from '../../Assets/client_4.png';
import facebookIcon from '../../Assets/facebookIcon.png';
import instagramIcon from '../../Assets/instagramIcon.png';
import linkedinIcon from '../../Assets/linkedinIcon.png';
import whatsappIcon from '../../Assets/whatsappIcon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xs8xmi', 'template_asp8ifd', form.current, 'BCtujRZgJ-wCQBrcwlFxO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'> My Clients</h1>
            <p className='clientPageDes'>
                I have got an opportunity to work with a diverse group of people,
                my clients comes from:
            </p>
            <div className='clientImgs'>
                <img src={client_1} alt='' className='clientImg' />
                <img src={client_2} alt='' className='clientImg' />
                <img src={client_3} alt='' className='clientImg' />
                <img src={client_4} alt='' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
        <div className='links'>
            <a href="https://facebook.com/nazagraphics" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Placeholder" />
            </a>
            <a href="https://instagram.com/nazif_salisuofficial" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Placeholder" />
            </a>
            <a href="https://wa.me/+2348125262430" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="Placeholder" />
            </a>
            <a href="https://ng.linkedin.com/in/nazif-salisu-17a895243" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Placeholder" />
            </a>
        </div>
        </div>
            
    </section>
  );
}

export default Contact;
