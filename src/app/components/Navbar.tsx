'use client';

import { useState } from 'react';
import { Icons } from './Icons';
import Container from './ui/Container';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      <div className='py-5 text-white bg-transparent'>
        <div className='flex items-center max-lg:justify-between max-lg:flex-row-reverse'>
          <div className='flex items-center justify-between max-lg:w-full'>
            <div className='lg:hidden'>
              <a
                href=''
                className='px-2 py-[6px] border rounded-md hover:text-neutral-400'
              >
                Sign Up
              </a>
            </div>
            <a className='' href='https://github.com'>
              <Icons.logo />
            </a>
            <HamburgerButton showNav={showNav} setShowNav={setShowNav} />
          </div>
          <HamburgerMenu showNav={showNav} />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
