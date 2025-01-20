import React from 'react';
import './Intro.css';
import main_img from '../../Assets/main_img.png';
import { Link } from 'react-scroll';
import btnImg from '../../Assets/btnImg.png';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'am <span className='introName'>Nazif</span> <br />Website designer</span>
          <p className='introPara'>A Graphic Designer with 7 years of experience.<br /> I can provide a clean graphic and perfect design.</p>
          <a href="https://instagram.com/nazif_salisuofficial"><button className='btn'>Hire Me</button></a>
        </div>
        <img src={main_img} alt='' className='bg' />
    </section>
  );
}

export default Intro;
