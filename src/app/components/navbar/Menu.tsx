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
      </div>
    </div>
  );
};

export default Menu;
