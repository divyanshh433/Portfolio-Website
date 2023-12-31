import React from 'react';
import {motion } from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return <div className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-[#CDFF42]'>My Latest <br/> Work.</h2>
            <p className=' max-w-sm mb-16'> Skilled in Front-End and Back-End Development.<br/> Some of my projects are :</p>
            <a href='https://github.com/divyanshh433'><button className='btn btn-sm hover:scale-105 transition-all'>View All Projects</button></a>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className=' group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className=' group-hover:scale-125 transition-all duration-500' src={Img1} alt=''></img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient text-3xl'>Study Notion</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-2xl text-white'>A Full-Stack Web App</span>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 flex flex-col gap-y-10 lg:-mt-8'> 
            
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className=' group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className=' group-hover:scale-125 transition-all duration-500' src={Img3} alt=''></img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient text-3xl'>ClimateX</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-2xl text-white'>Weather Web Application</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className=' group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className=' group-hover:scale-125 transition-all duration-500' src={Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-3xl'>Adventure</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-2xl text-white'>Parallax Website</span>
              </div>
            </div>
        </motion.div>

      </div>
    </div>
  </div>;
};

export default Work;
