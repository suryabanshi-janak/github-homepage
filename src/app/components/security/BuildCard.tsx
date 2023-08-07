'use client';

import { motion } from 'framer-motion';

import HoverCard from '../ui/HoverCard';

const Build = () => {
  return (
    <li className='flex items-center justify-between mb-6'>
      <div className='flex items-center'>
        <svg
          aria-hidden='true'
          height='24'
          fill='#3fb950'
          viewBox='0 0 24 24'
          version='1.1'
          width='24'
          data-view-component='true'
          className='mr-2 octicon octicon-check-circle-fill color-fg-success'
        >
          <path d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z'></path>
        </svg>
        <span className='font-medium text-white'>Build</span>
      </div>
      <span className='text-[14px] text-[#7d8590]'>1m 21s</span>
    </li>
  );
};

const BuildCard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <HoverCard backgroundColor='#939aff' direction='' left='0'>
      <div className='flex flex-col w-10/12 mx-auto'>
        <div className='text-[#7d8590] p-6'>
          <p className='font-medium'>cmake.yml</p>
          <p className='text-[12px] f6'>on: push</p>
        </div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          className='relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-10/12 mx-auto md:gap-10'
        >
          <motion.div
            variants={item}
            transition={{ type: 'tween' }}
            className='w-full animate'
          >
            <div
              className='p-6 mb-10 rounded-md md:mt-8 box-shadow-mktg-xl'
              style={{ background: 'rgba(235, 245, 255, 0.2)' }}
            >
              <ul className='-mb-6'>
                <Build />
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            transition={{ type: 'tween' }}
            className='absolute md:top-12 lg:left-[47%] md:left-[46%] max-md:top-[88px] z-[1] flex items-center max-md:rotate-90'
          >
            <div
              className='inline-block rounded-full p-1 bg-[#6e7681]'
              style={{ boxShadow: '0 0 0 2px #444D56' }}
            />
            <div
              style={{ width: '37px', height: '2px', background: '#D1D5DA' }}
            />
            <div
              className='inline-block rounded-full p-1 bg-[#6e7681]'
              style={{ boxShadow: '0 0 0 2px #444D56' }}
            />
          </motion.div>
          <motion.div
            variants={item}
            transition={{ type: 'tween' }}
            className='w-full animate'
          >
            <div
              className='pt-2 pb-1 px-6 text-[15px] rounded-t-md inline-block font-medium text-white'
              style={{ background: 'rgba(235, 245, 255, 0.2)' }}
            >
              Steps
            </div>
            <div
              className='p-6 mb-10 rounded-md rounded-tl-none box-shadow-mktg-xl'
              style={{ background: 'rgba(235, 245, 255, 0.2)' }}
            >
              <ul className='-mb-6'>
                {Array.from({ length: 3 }, (_, index) => (
                  <Build key={`build-${index}`} />
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </HoverCard>
  );
};

export default BuildCard;
