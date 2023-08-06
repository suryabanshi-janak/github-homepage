'use client';

import { motion } from 'framer-motion';
import CodeEditor from './CodeEditor';
import CodeSpace from './CodeSpace';
import CopilotFeature from './CopilotFeature';
import GithubServiceCard from '../ui/GithubServiceCard';

const Productivity = () => {
  return (
    <section
      id='productivity'
      className='px-4 pt-8 overflow-hidden home-campaign-productivity'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='flex space-x-3 md:pl-10 md:space-x-10'>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false }}
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
                className='text-white octicon octicon-briefcase'
              >
                <path d='M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z'></path>
              </svg>
              <span className='absolute top-0 left-0 w-full h-full home-campaign-glowing-icon-glow-1 z-3' />
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className=' h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]'
            ></motion.div>
          </div>
          <div className='mb-24 md:w-10/12'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: false }}
              className='text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate'
              style={{ transitionDelay: '200ms' }}
            >
              Productivity
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              viewport={{ once: false }}
              className='text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate'
              style={{ transitionDelay: '300ms' }}
            >
              <span className='text-[#7ee787]'>
                Accelerate high-quality software development.
              </span>
              Our AI-powered platform drives innovation with tools that boost
              developer velocity.
            </motion.h3>
          </div>
        </div>

        <CodeEditor />
        <CodeSpace />
        <CopilotFeature />

        <div className='flex justify-between md:space-x-10 max-md:flex-col'>
          <GithubServiceCard
            bgColor='#7ee787'
            service='GitHub Actions'
            description='automates your build, test, and deployment workflow with simple and secure CI/CD.'
            buttonText='Discover GitHub Actions'
            imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png'
          />
          <GithubServiceCard
            bgColor='#7ee787'
            service='GitHub Mobile'
            description='fits your projects in your pocket, so you never miss a beat while on the go.'
            buttonText='Get GitHub Mobile'
            imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png'
            leftHover='-400px'
          />
        </div>

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '160px' }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
          className='md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]'
        ></motion.div>
      </div>
    </section>
  );
};

export default Productivity;
