import React from 'react';
import './Skills.css';
import uiDesign from '../../Assets/uiDesign1.jpg';
import webDesign from '../../Assets/webDesign1.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDes'>I can provide a clean graphic and perfect design. At Naza graphics we offers services: Logo Design, Mockup Design, Product Package Design, Poster Design, Flyer, Sticker, Stationery Design, Company Profile, and Photo Editing. A responsive design makes your brand more and more Attractive and eye-catching, Naza Graphics got your back for this. "BE CREATIVE" is our title.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={uiDesign} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI Design</h2>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={webDesign} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Web Design</h2>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={webDesign} alt='' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Skills
