import { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '../components/atoms/button';

const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden flex flex-col'>
      <div className='bg-primary-dark h-screen flex overflow-x-hidden '>
        <Image src='https://w.wallhaven.cc/full/3z/wallhaven-3z2med.jpg' layout='fill' />

        <div className='bg-gradient-to-t from-primary-dark to-transparent flex-1 z-10 absolute h-screen w-full' />
        <div className='container m-8 flex md:mx-auto lg:mx-auto flex-col z-10'>
          <nav className='flex items-center justify-between'>
            <span className='text-white text-2xl font-bold '>Girabel</span>
            <Button>Sign In</Button>
          </nav>

          <div className='my-auto'>
            <div className='text-center text-white'>
              <h1 className='text-4xl lg:text-6xl md:text-6xl animate-fade-in-down'>
                Work at the speed of thought.
              </h1>
              <p className='mt-2 text-sm md:text-lg text-opacity-80 animate-fade-in-down animation-delay-100'>
                Most calendars are designed for teams. Slate is designed for freelancers who want a
                simple way to plan their schedule.
              </p>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 lg:space-y-0 md:space-x-4 lg:space-x-4 animate-fade-in-down animation-delay-200'>
              <Button>Try for free</Button>
              <Button>Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
