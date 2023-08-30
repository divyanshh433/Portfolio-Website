import React from 'react';
import Image from '../assets/DivyanshhPicTR.png'
import {FaGithub , FaLinkedin} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation'
import {motion } from 'framer-motion'
import {fadeIn} from '../variants'
import {Link} from 'react-scroll';

const Banner = () => {
  return <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto' >
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 items-center' >
          <div className=' flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
              DIVYANSHH <span>MITRA</span>
            </motion.h1>
            <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='mb-6 text-[24px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] mt-6 lg:mt-0'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={['Full-Stack Developer',2000,'Front-End Developer',2000,'Back-End Developer']} speed={50} className='text-[#CDFF42]' wrapper='span' repeat={Infinity}/>
            </motion.div>
            <motion.p variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>I'm a software developer and here is my portfolio website. Here you'll
                        learn about my journey as a software developer.</motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact' smooth={true}><button className='btn btn-lg hover:scale-105 transition-all'>Contact Me</button></Link>
              <motion.div variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex lg:text-[40px] text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <div className=' hover:scale-110 transition-all'>
                <a href='https://github.com/divyanshh433'>
                  <FaGithub/>
                </a>
              </div>
              <div className=' hover:scale-110 transition-all'>
                <a href='https://www.linkedin.com/in/divyanshhm/'>
                  <FaLinkedin/>
                </a>
              </div>
              </motion.div>
            </motion.div>
            
          </div>
          <motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} ><img src={Image} alt='profile' className=' h-[500px] relative lg:bottom-20 bottom-12'/></motion.div>
        </div>
    </div>
  </div>;
};

export default Banner;
