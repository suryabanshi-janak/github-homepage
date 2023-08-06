import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import Productivity from './components/productivity/Productivity';
import StickyNav from './components/navbar/StickyNav';

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
        </div>
      </div>
    </div>
  );
}
