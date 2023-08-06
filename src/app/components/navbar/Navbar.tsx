'use client';

import { useState } from 'react';
import Link from 'next/link';

import Container from '../ui/Container';
import HamburgerButton from '../ui/HamburgerButton';
import Menu from './Menu';
import { Icons } from '../ui/Icons';

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
            <Link className='' href='/'>
              <Icons.logo />
            </Link>
            <HamburgerButton showNav={showNav} setShowNav={setShowNav} />
          </div>
          <Menu showNav={showNav} />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
