import React from 'react';
import Logo from '../assets/favicon.png'
import {Link} from 'react-scroll';

const Header = () => {
  return <div className= 'py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href=''>
          <img src={Logo} alt="logo" className='h-36'/>
        </a>
        <Link to='contact' smooth={true}>
          <button className='btn btn-sm hover:scale-105 transition-all'>
            Work With Me
          </button>
        </Link>
      </div>

    </div>

  </div>;
};

export default Header;
