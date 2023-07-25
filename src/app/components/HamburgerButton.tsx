interface Props {
  showNav: boolean;
  setShowNav: (show: boolean) => void;
}

const HamburgerButton = ({ showNav, setShowNav }: Props) => {
  const genericHamburgerLine = `w-6 h-0.5 transition ease-in duration-150 bg-white`;

  return (
    <button
      type='button'
      onClick={() => setShowNav(!showNav)}
      className='cursor-pointer lg:hidden'
    >
      <div
        className={`${genericHamburgerLine} ${
          showNav ? 'rotate-45 mb-0  translate-y-[1px]' : 'rotate-0 mb-1'
        } `}
      />
      <div
        className={`${genericHamburgerLine} ${
          showNav ? 'hidden mb-0' : 'mb-1'
        } `}
      />
      <div
        className={`${genericHamburgerLine}  ${
          showNav ? '-rotate-45 mb-0' : 'rotate-0'
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
