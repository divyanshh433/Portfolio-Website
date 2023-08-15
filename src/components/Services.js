import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import Js from '../assets/Javascript.svg'
import react from '../assets/React.png'
import Node from '../assets/NodeJs.svg'
import Redux from '../assets/Redux.svg'
import tailwind from '../assets/Tailwind.png'
import express from '../assets/Express.png'
import mdb from '../assets/MongoDB.svg'
import git from '../assets/Git.svg'
import github from '../assets/Github.svg'
import vercel from '../assets/Vercel.svg'
import {Link} from 'react-scroll';




const Services = () => {
  return <div className='section' id='services'>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row'>
        <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 mb-12 lg:mb-0'>
          <h2 className='h2 text-[#CDFF42] mb-6'>My Tech Stack</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Front-end Development : HTML, CSS, Javascript, React, Tailwind, Redux<br/>Back-end Development: Node.js, Express.js<br/>Databases: MongoDB
          </h3>
          <Link to='work' smooth={true}><button className='btn btn-sm hover:scale-105 transition-all'>See My Work</button></Link>
        </motion.div>
        <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1'>
          <div className='flex flex-wrap gap-12 max-w-lg'> 
                            <img src={HTML} className='h-[75px] hover:scale-110 transition-all' alt="html" />
                            <img src={CSS} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img  src={Js} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img src={react} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img  src={Node} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img src={Redux} className='h-[75px] hover:scale-110 transition-all' alt="html" />
                            <img src={tailwind} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img  src={express} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img src={mdb} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img  src={git} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img  src={github} className='h-[75px] hover:scale-110 transition-all' alt="" />
                            <img  src={vercel} className='h-[75px] hover:scale-110 transition-all' alt="" />
            {/* {services.map((service,index)=>{
              const {name,description,link}=service;
              return(
                <div className=' border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight/>
                    </a>
                    <a href='' className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
              )
            })} */}
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Services;
