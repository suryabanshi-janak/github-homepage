'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import HoverCard from '../ui/HoverCard';

const sponsors = [
  {
    name: 'Homebrew',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/homebrew.png',
  },
  {
    name: 'Directus',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/directus.png',
  },
  {
    name: 'Nick DeJesus',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/dayhaysoos.jpeg',
  },
  {
    name: 'Samuel',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/imolorhe.jpeg',
  },
  {
    name: 'CommandPost',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/commandpost.png',
  },
  {
    name: 'kazuya kawaguchi',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/kazupon.jpeg',
  },
  {
    name: 'Nikema',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/prophen.jpeg',
  },
  {
    name: 'sindresorhus',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/sindresorhus.jpeg',
  },
  {
    name: 'ESLint',
    imgSrc:
      'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/eslint.png',
  },
];

const SponsorItem = ({
  name,
  imgSrc,
  altText = '',
}: {
  name: string;
  imgSrc: string;
  altText?: string;
}) => {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      transition={{ type: 'tween' }}
      className='w-1/3'
    >
      <a
        href=''
        target='_blank'
        className='rounded-md bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6'
      >
        <img
          alt={altText}
          width='96'
          height='96'
          className='rounded-md d-block'
          loading='lazy'
          decoding='async'
          src={imgSrc}
        />
        <div className='text-[#7d8590] my-2'>{name}</div>
        <button type='button' className=' bg-[#21262d] rounded-md '>
          <span className='flex items-center justify-between px-2 py-1 space-x-2'>
            <svg
              aria-hidden='true'
              height='16'
              viewBox='0 0 16 16'
              fill='currentColor'
              version='1.1'
              width='16'
              data-view-component='true'
              className='octicon octicon-heart text-[#c9d1d9]'
            >
              <path d='m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z'></path>
            </svg>
            <span className='Button-label text-[#c9d1d9]'>Sponsor</span>
          </span>
        </button>
      </a>
    </motion.div>
  );
};

const GithubSponsors = () => {
  const [isHovered, setIsHovered] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <HoverCard backgroundColor='#ffa28b' direction='' left=''>
      <div className='flex-col justify-between flex-1 p-10 py-20 md:flex md:space-y-20'>
        <p className=' text-xl md:text-2xl mb-6 font-medium text-[#7d8590]'>
          <span className='font-medium text-white'>GitHub Sponsors</span> lets
          you support your favorite open source maintainers and projects.
        </p>
        <div>
          <a
            href=''
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='inline-block py-1 text-xl font-semibold text-white'
          >
            Check out pull request
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
            />
          </a>
        </div>
      </div>

      <div className='overflow-hidden rounded-s-lg z-[1] flex-1'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          className='flex flex-wrap w-full relative -top-[120px] -rotate-12 -right-6 -mt-6  p-6 max-h-[480px]'
        >
          {sponsors.map(({ name, imgSrc }) => (
            <SponsorItem key={name} name={name} imgSrc={imgSrc} />
          ))}
        </motion.div>
      </div>
    </HoverCard>
  );
};

export default GithubSponsors;
