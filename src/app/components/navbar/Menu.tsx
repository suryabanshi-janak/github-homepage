import OpenSourceNav from './OpenSourceNav';
import ProductNav from './ProductNav';
import SolutionNav from './SolutionNav';

interface Props {
  showNav: boolean;
}

const Menu = ({ showNav }: Props) => {
  return (
    <div
      className={`flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40 ${
        showNav
          ? 'max-lg:translate-x-0 max-lg:scale-100'
          : 'max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4'
      }`}
    >
      <div className='flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-80 lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg'>
        <nav className='px-3 mt-0 mb-0 text-base lg:px-6 max-lg:py-10 max-lg:px-5'>
          <ul className='flex overflow-y-auto lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto'>
            <ProductNav />
            <SolutionNav />
            <OpenSourceNav />
            <li>
              <a
                href=''
                className='flex items-center p-1 max-lg:font-semibold hover:text-neutral-300'
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className='lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4'>
          <div className='lg:flex mb-2 lg:mb-0 relative max-lg:mr-4'>
            <input
              placeholder='Search GitHub'
              className='glass max-lg:bg-neutral-50 max-lg:w-full  w-[240px] lg:px-2 h-[38px] max-lg:h-[41px] p-[3.5px] whitespace-nowrap overflow-hidden placeholder:text-[14px] max-lg:placeholder:text-[16px] font-medium placeholder:pl-2 focus:z-10 text-[14px] focus:outline-none focus:bg-white focus:text-black border-[1px] lg:border-neutral-500 max-lg:border-neutral-300 rounded-md'
              type='text'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='20'
              aria-hidden='true'
              className='mr-1 absolute right-0 top-[10px] max-lg:hidden'
            >
              <path
                fill='none'
                stroke='#979A9C'
                opacity='.4'
                d='M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z'
              ></path>
              <path fill='#979A9C' d='M11.8 6L8 15.1h-.9L10.8 6h1z'></path>
            </svg>
          </div>
          <div className='max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-neutral-800'>
            <a
              href=''
              className='hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold '
            >
              Sign in
            </a>
          </div>
          <a
            href=''
            className='max-lg:hidden px-2 py-[5px] border-[1px] rounded-md hover:text-neutral-400 '
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
