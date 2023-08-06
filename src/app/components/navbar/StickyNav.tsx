'use client';

import { useEffect, useState, useCallback } from 'react';

type NavType = 'productivity' | 'collaboration' | 'security' | '';

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeNav, setActiveNav] = useState<NavType>('');
  const [hoveredNav, setHoveredNav] = useState<NavType>('');
  const [smallNav, setSmallNav] = useState(false);
  const [isFreeTrialHovered, setIsFreeTrialHovered] = useState(false);
  const [isSignupHovered, setIsSignupHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const navElement = document.getElementById('nav');
      const topCoordinate = navElement?.getBoundingClientRect().top;
      const productivityElement = document.getElementById('productivity');
      const productivityTop = productivityElement?.getBoundingClientRect().top;
      const collaborationElement = document.getElementById('collaboration');
      const collaborationTop =
        collaborationElement?.getBoundingClientRect().top;
      const securityElement = document.getElementById('security');
      const securityTop = securityElement?.getBoundingClientRect().top;

      if (topCoordinate) {
        if (topCoordinate < 0) setIsSticky(true);
        if (topCoordinate > 0) setIsSticky(false);
        if (topCoordinate < -20) setIsFixed(true);
        if (topCoordinate > -20) setIsFixed(false);
      }

      if (productivityTop && productivityTop < 10) setActiveNav('productivity');
      if (collaborationTop && collaborationTop < 10)
        setActiveNav('collaboration');
      if (securityTop && securityTop < 10) setActiveNav('security');
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const NavItem = ({ nav }: { nav: NavType }) => {
    return (
      <a
        href={`#${nav}`}
        onMouseEnter={() => setHoveredNav(nav)}
        onMouseLeave={() => setHoveredNav('')}
        className={`max-lg: pt-2 capitalize ${
          hoveredNav === nav ? 'lg:text-blue-500' : ''
        } ${
          activeNav === nav || smallNav
            ? 'lg:text-blue-500 max-lg:pb-6'
            : 'max-lg:hidden'
        }`}
      >
        {nav}
        <div
          className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-300 ${
            hoveredNav === nav || activeNav === nav ? 'scale-100 bg-white' : ''
          }`}
        />
      </a>
    );
  };

  return (
    <div
      id='nav'
      className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${
        isSticky ? 'visible' : 'invisible'
      }`}
    >
      <div className=''></div>
      <div
        className={`w-screen ${
          isFixed ? 'fixed' : 'sticky'
        }  py-2 bg-[#0d1117] shadow-slate-950 shadow-md top-0 `}
      >
        <div className='relative flex items-center px-12 pt-1 pb-2 mx-auto max-w-7xl lg:pb-3 lg:px-3 max-lg:flex-col'>
          <div className='flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4  text-white'>
            <NavItem nav='productivity' />
            <NavItem nav='collaboration' />
            <NavItem nav='security' />
          </div>
          <div
            className={`lg:ml-5 flex items-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5 ${
              smallNav ? '' : 'max-lg:hidden'
            }`}
          >
            <a
              onMouseEnter={() => setIsFreeTrialHovered(true)}
              onMouseLeave={() => setIsFreeTrialHovered(false)}
              href=''
              className='flex items-center max-lg:w-full text-white font-semibold justify-center space-x-2 text-base  border-[1px] border-neutral-500 px-3 py-3 rounded-md'
            >
              Start a free enterprise trail
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={` ml-2 transition ease-in duration-150 ${
                  isFreeTrialHovered ? 'translate-x-0 ' : '-translate-x-1'
                }`}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  fill='currentColor'
                  d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
                ></path>
                <path
                  className={` text-white transition ease-in duration-150 ${
                    isFreeTrialHovered ? ' opacity-100' : 'opacity-0 '
                  }`}
                  stroke='currentColor'
                  d='M1.75 8H11'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>
              </svg>
            </a>
            <a
              onMouseEnter={() => setIsSignupHovered(true)}
              onMouseLeave={() => setIsSignupHovered(false)}
              href=''
              className='flex items-center justify-center px-3 py-3 text-base font-semibold bg-white rounded-md max-lg:w-full'
            >
              Sign up for GitHub
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={` ml-2 transition ease-in duration-150 ${
                  isSignupHovered ? 'translate-x-0 ' : '-translate-x-1'
                }`}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  fill='currentColor'
                  d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
                ></path>
                <path
                  className={` transition ease-in duration-150 ${
                    isSignupHovered ? ' opacity-100' : 'opacity-0 '
                  }`}
                  stroke='currentColor'
                  d='M1.75 8H11'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
