import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <div className='relative'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>

      <div></div>
    </div>
  );
}
