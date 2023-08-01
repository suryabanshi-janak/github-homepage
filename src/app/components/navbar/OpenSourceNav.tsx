'use client';

import { useState } from 'react';

const OpenSourceNav = () => {
  const [show, setShow] = useState<boolean>(false);

  const onMouseEnter = () => {
    if (window.innerWidth > 1024) setShow(true);
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 1024) setShow(false);
  };

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        onClick={() => setShow(!show)}
        type='button'
        className={`flex items-center p-1 max-lg:font-semibold transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          show ? 'lg:text-neutral-300 ' : ''
        }`}
      >
        Open Source
        <svg
          opacity='0.5'
          aria-hidden='true'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
          version='1.1'
          width='16'
          data-view-component='true'
          className={`ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show ? 'lg:mt-1 opacity-40 max-lg:0' : 'mt-0 max-lg:-rotate-90'
          }`}
        >
          <path d='M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z'></path>
        </svg>
      </button>

      <div
        className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[320px] transition ease-in duration-150 ${
          show ? 'opacity-100 visible' : 'opacity-0 hidden'
        }`}
      >
        <div className='lg:border-b-[1px] mb-4 pb-4 pt-4 w-full'>
          <h2 className='text-base font-semibold text-neutral-800 hover:text-blue-600'>
            Github Sponser
          </h2>
          <p className='text-sm font-normal text-neutral-500'>
            Fund open source developers
          </p>
        </div>
        <div className='lg:border-b-[1px] mb-4 pb-4 pt-0 w-full'>
          <h2 className='text-base font-semibold text-neutral-800 hover:text-blue-600'>
            The ReadMe Projects
          </h2>
          <p className='text-sm font-normal text-neutral-500'>
            GitHub community articles
          </p>
        </div>
        <div className='w-full pt-2 pb-0 mb-4'>
          <h2 className='text-base font-semibold text-neutral-800'>
            Repositories
          </h2>
          <ul className='w-full mt-1 text-sm text-neutral-500'>
            <li>
              <a href='' className='block py-2 hover:text-blue-600'>
                Topics
              </a>
            </li>
            <li>
              <a href='' className='block py-2 hover:text-blue-600'>
                Trendings
              </a>
            </li>
            <li>
              <a href='' className='block py-2 hover:text-blue-600'>
                Collections
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default OpenSourceNav;
