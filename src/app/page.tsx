import Navbar from './components/navbar/Navbar';

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
