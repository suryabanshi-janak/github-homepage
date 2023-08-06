'use client';

import { motion } from 'framer-motion';

import GithubIssues from './GithubIssues';
import GithubServiceCard from '../ui/GithubServiceCard';
import GithubSponsors from './GithubSponsors';

const Collaboration = () => {
  return (
    <div
      id='collaboration'
      className='px-4 pt-8 overflow-hidden home-campaign-productivity'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='flex space-x-3 md:pl-7 md:space-x-10'>
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
                version='1.1'
                width='24'
                fill='currentColor'
                data-view-component='true'
                className='text-white '
              >
                <path d='M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z'></path>
              </svg>
              <span className='absolute top-0 left-0 w-full h-full home-campaign-glowing-icon-glow-2 z-3'></span>
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ delay: 0.8 }}
              className=' h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent'
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
              Collaboration
            </h2>
            <h3
              className='text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate'
              style={{ transitionDelay: '300ms' }}
            >
              <span className='text-[#ffa28b]'>Supercharge collaboration.</span>
              We provide unlimited repositories, best-in-class version control,
              and the world’s most powerful open source community—so your team
              can work more efficiently together.
            </h3>
          </motion.div>
        </div>
        <img
          className='w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]  '
          width='2500'
          height='1500'
          loading='lazy'
          decoding='async'
          alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
          src='https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png'
        />
        <GithubIssues />

        <div className='flex justify-between md:space-x-10 max-md:flex-col'>
          <GithubServiceCard
            bgColor='#ffa28b'
            service='GitHub Discussions'
            description='create space to ask questions and have open-ended conversations.'
            buttonText='Enable GitHub Discussions'
            imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/illu-discussions.png'
          />
          <GithubServiceCard
            bgColor='#ffa28b'
            service='Pull requests'
            description='allow real-time communication and collaboration about code changes.'
            buttonText='Check out pull requests'
            imgSrc='https://github.githubassets.com/images/modules/site/home-campaign/illu-pull-requests.png'
            leftHover='-400px'
          />
        </div>

        <GithubSponsors />

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '160px' }}
          transition={{ delay: 0.2 }}
          className=' md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]'
        ></motion.div>
      </div>
    </div>
  );
};

export default Collaboration;
