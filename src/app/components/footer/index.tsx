import Connect from './Connect';
import Globe from './Globe';
import FooterContent from './Footer';

const Footer = () => {
  return (
    <div className='relative overflow-hidden'>
      <Connect />
      <Globe />

      <img
        className='absolute bottom-0 left-0 object-cover w-full h-full pointer-events-none d-block'
        width='801'
        height='807'
        loading='lazy'
        decoding='async'
        alt=''
        aria-hidden='true'
        src='https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg'
      />

      <div className='flex items-center justify-center relative z-[2] mt-[-200px]'>
        <img
          alt='Mona looking at the galaxy'
          width='801'
          height='807'
          className='pointer-events-none  w-[400px] object-cover h-[403px]'
          src='https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png'
        />
      </div>
      <div className='max-w-[1280px] mx-auto relative z-[2]  px-5'>
        <ul className='lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1'>
          <li>
            <sup id='footnote-1'>1</sup> The Total Economic Impact™ Of GitHub
            Enterprise Cloud and Advanced Security, a commissioned study
            conducted by Forrester Consulting, 2022. Results are for a composite
            organization based on interviewed customers.
          </li>
          <li>
            <sup id='footnote-2'>2</sup> GitHub, Octoverse 2022 The state of
            open source software.
          </li>
        </ul>
      </div>

      <FooterContent />
    </div>
  );
};

export default Footer;
