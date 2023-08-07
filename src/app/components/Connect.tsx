'use client';

import { useState } from 'react';

const Connect = () => {
  const [isSignupHovered, setIsSignupHovered] = useState(false);
  const [isFreeTrailHovered, setIsFreeTrailHovered] = useState(false);

  return (
    <div className='max-w-7xl mx-auto relative z-[2]'>
      <div className='relative flex flex-col my-8 text-center md:my-16 sm:my-12 md:items-center'>
        <div className='flex flex-col items-center justify-center py-3 mb-2'>
          <h2 className='px-4 mx-auto mb-4 text-3xl font-bold text-white md:w-9/12 lg:text-5xl md:text-4xl'>
            The place for anyone from anywhere to build anything
          </h2>
          <p className='mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12'>
            Whether you’re scaling your startup or just learning how to code,
            GitHub is your home. Join the world’s largest developer platform to
            build the innovations that empower humanity. Let’s&nbsp;build
            from&nbsp;here.
          </p>
          <div className='flex items-center justify-center lg:ml-5 lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5'>
            <a
              onMouseEnter={() => setIsSignupHovered(true)}
              onMouseLeave={() => setIsSignupHovered(false)}
              href=''
              className='flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]'
            >
              Sign up for GitHub
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={` ml-2 transition ease-in duration-150 ${
                  isSignupHovered ? 'translate-x-2 ' : '-translate-x-0'
                }`}
                width='20'
                height='20'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  fill='currentColor'
                  d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
                ></path>
                <path
                  className={`  transition ease-in duration-150 ${
                    isSignupHovered ? ' opacity-100' : 'opacity-0 '
                  }`}
                  stroke='currentColor'
                  d='M1.75 8H11'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>
              </svg>
            </a>
            <a
              onMouseEnter={() => setIsFreeTrailHovered(true)}
              onMouseLeave={() => setIsFreeTrailHovered(false)}
              href=''
              className='flex items-center text-white font-bold justify-center space-x-2 text-[20px]  border-[1px] border-neutral-500 px-4 py-3 rounded-md'
            >
              Start a free enterprise trail
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={` ml-2 transition ease-in duration-150 ${
                  isFreeTrailHovered ? 'translate-x-2 ' : '-translate-x-0'
                }`}
                width='20'
                height='20'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  fill='currentColor'
                  d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
                ></path>
                <path
                  className={` text-white transition ease-in duration-150 origin-right ${
                    isFreeTrailHovered ? ' opacity-100' : 'opacity-0 '
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

export default Connect;
