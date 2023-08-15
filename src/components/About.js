import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import {Link} from 'react-scroll';
const About = () => {
  const [ref, inView] = useInView({threshold:0.5});

  return <div className='min-h-[85vh] lg:min-h-[78vh]'  id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row items-center lg:gap-x-20 lg:gap-y-0 h-screen -mt-36 lg:mt-0 '>
        <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'> </motion.div>
        <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1'>
          <h2 className='h2 text-[#CDFF42]'>About Me</h2>
          <h3 className='h3 mb-4'>Hi there! I'm Divyanshh, a versatile full stack web developer with a passion for creating
intuitive and visually appealing web applications.</h3>
          <p className='mb-6'></p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            {/* <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={13} duration={3}/>:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/> Experience
              </div>
            </div> */}
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={5} duration={3}/>:null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/> Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={12} duration={3}/>:null}k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Lines of<br/> Code
              </div>
            </div>
            
          </div>
          <div>
            <Link to='contact' smooth={true}><button className='btn btn-lg hover:scale-105 transition-all'>Contact Me</button></Link>
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default About;
