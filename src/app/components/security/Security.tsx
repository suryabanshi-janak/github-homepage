'use client';

import { motion } from 'framer-motion';

import BuildCard from './BuildCard';
import GithubAdvancedSecurity from './GithubAdvancedSecurity';
import GithubSponsors from './GithubSponsors';

const Security = () => {
  return (
    <div
      id='security'
      className='px-4 pt-8 pb-16 overflow-hidden home-campaign-productivity'
    >
      <div className='mx-auto max-w-7xl'>
        <motion.div className='flex space-x-3 md:pl-7 md:space-x-10'>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='relative'
            >
              <svg
                aria-hidden='true'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                version='1.1'
                width='24'
                data-view-component='true'
                className='text-white octicon octicon-lock'
              >
                <path d='M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z'></path>
              </svg>
              <span className='absolute top-0 left-0 w-full h-full home-campaign-glowing-icon-glow-3 z-3' />
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ delay: 0.8 }}
              className=' h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent'
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: 'tween' }}
            className='mb-24 md:w-10/12'
          >
            <h2
              className='text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate'
              style={{ transitionDelay: '200ms' }}
            >
              Security
            </h2>
            <h3
              className='text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate'
              style={{ transitionDelay: '300ms' }}
            >
              <p className='text-[#939aff]'>
                Embed security into the developer workflow.
              </p>
              With GitHub, developers can secure their code in minutes and
              organizations can automatically comply with regulations.
            </h3>
          </motion.div>
        </motion.div>

        <BuildCard />

        <GithubAdvancedSecurity />

        <GithubSponsors />
      </div>
    </div>
  );
};

export default Security;
