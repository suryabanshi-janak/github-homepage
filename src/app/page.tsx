import Navbar from './components/navbar/Navbar';
import Productivity from './components/productivity/Productivity';
import StickyNav from './components/navbar/StickyNav';
import Collaboration from './components/collaboration/Collaboration';
import Hero from './components/ui/Hero';
import Security from './components/security/Security';

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
        </div>
      </div>
    </div>
  );
}
