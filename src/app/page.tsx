import Navbar from './components/navbar/Navbar';
import Productivity from './components/productivity/Productivity';
import StickyNav from './components/navbar/StickyNav';
import Collaboration from './components/collaboration/Collaboration';
import Hero from './components/ui/Hero';
import Security from './components/security/Security';
import Connect from './components/Connect';
import Globe from './components/Globe';

export default function Home() {
  return (
    <div>
      <div className='relative'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>

      <div>
        <div className='overflow-hidden'>
          <Hero />
          <StickyNav />
          <Productivity />
          <Collaboration />
          <Security />
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
          </div>
        </div>
      </div>
    </div>
  );
}
