'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const GithubIssues = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative flex md:pl-10'>
      <img
        alt=''
        aria-hidden='true'
        width='2712'
        height='2712'
        className='absolute top-0 right-0 h-auto pointer-events-none'
        loading='lazy'
        decoding='async'
        src='https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp'
      />
      <div className='relative flex flex-row items-center'>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          className='w-[3px] h-full increase1'
        ></motion.div>
        <img
          alt=''
          aria-hidden='true'
          width='81'
          height='485'
          style={{
            left: 'calc(50% - 2px)',
            height: 'auto',
            maxWidth: '9vw',
            transitionDelay: '100ms',
          }}
          className='absolute left-0 hidden md:block bottom-4'
          loading='lazy'
          decoding='async'
          src='https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg'
        />
      </div>
      <div className='pl-6 lg:pl-24 md:pl-16'>
        <div className='flex items-center pb-6 my-8 max-md:flex-col-reverse lg:gap-x-5 sm:my-12 md:my-16 md:pb-20 md:flex-row'>
          <div className='w-full py-4 mb-2'>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='md:pr-6'
            >
              <h2 className='mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]'>
                <span className='font-semibold text-white'>
                  GitHub Issues and GitHub Projects
                </span>{' '}
                supply flexible project management tools that adapt to your team
                alongside your code.
              </h2>
              <a
                href=''
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='inline-block py-1 text-xl font-semibold text-white'
              >
                Explore GitHube Issue
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${
                    isHovered ? 'translate-x-0 ' : '-translate-x-1'
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
                    className={` text-white transition ease-in duration-150 ${
                      isHovered ? ' opacity-100' : 'opacity-0 '
                    }`}
                    stroke='currentColor'
                    d='M1.75 8H11'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                </svg>
                <div
                  className={` ${
                    isHovered ? 'w-11/12 scale-100' : 'w-0 scale-0'
                  } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                ></div>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='w-full px-6 py-4'
          >
            <div className='relative'>
              <div className='relative'>
                <div className='md:absolute z-[1] top-[-200px] lg:top-[-300px] right-0 shadow-2xl'>
                  <img
                    src='https://github.githubassets.com/images/modules/site/home-campaign/illu-projects.png'
                    alt=''
                    loading='lazy'
                    decoding='async'
                    width='1190'
                    height='1004'
                    className='w-full h-auto rounded-lg d-block'
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className='pb-4 mb-10 md:mb-32'
        >
          <div className='py-4 text-left'>
            <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#ffc2b2] relative font-medium bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text text-transparent'>
              <span className='font-semibold text-[12px]'>Did you know?</span>
            </div>
            <h3 className='text-[#ffa28b] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium'>
              80% reduction
            </h3>
            <p className='mb-3 text-base font-medium text-white md:text-xl'>
              in onboarding time with GitHub<sup>1</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GithubIssues;
