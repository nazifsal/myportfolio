import React from 'react';
import './Works.css';
import work_1 from '../../Assets/work_1.jpg';
import work_2 from '../../Assets/work_2.jpg';
import work_3 from '../../Assets/work_3.jpg';
import work_4 from '../../Assets/work_4.jpg';
import work_5 from '../../Assets/work_5.jpg';
import work_6 from '../../Assets/work_6.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My portfolio</h2>
        <span className='worksDes'>I am good in designing website and giving a good looking pixels in graphic design industry.</span>
        <div className='worksImgs'>
            <img src={work_1} alt='work' className='worksImg' />
            <img src={work_2} alt='work' className='worksImg' />
            <img src={work_3} alt='work' className='worksImg' />
            <img src={work_4} alt='work' className='worksImg' />
            <img src={work_5} alt='work' className='worksImg' />
            <img src={work_6} alt='work' className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works;
