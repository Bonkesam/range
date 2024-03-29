import { Button } from '@nextui-org/react';
import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className='relative h-screen flex flex-col justify-center'>
        {/**NavBar */}
        <Navbar />
        {/**Background video */}
        <div className='absolute inset-o -z-10'>
            <div className='absolute inset-0 bg-black/50 z-10'/>
            <video className='w-[100vw] h-[100vh] object-cover' autoPlay muted loop>
                <source src="/bgvid.mp4" type="video/mp4" />
            </video>
        </div>
        {/**Text Content */}
        <div className='flex flex-col items-center gap-24 text-white'>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-4xl max-w-[35ch] text-center font-serif'>
                    Buy 2 cars: Comfort and Offroad, or<br/>
                    Buy a <span className='text-center text-rose-900 uppercase font-bold'>Range Rover</span>
                </h1>
                <p className='font-serif text-xl'>
                    The choice is yours!
                </p>
                <Button className='bg-black rounded-xl p-3' color='secondary' variant='bordered'>
                    Stay tuned
                </Button>
            </div>
            <div className='flex justify-between w-3/5 max-w-[900px] font-sans'>
                <Highlight title='Projected Range' content='Over 440 mi'/>
                <div className='h-full w-[2px] bg-white'/>
                <Highlight title='Peak Power' content='Over 800HP'/>
                <div className='h-full w-[2px] bg-white'/>
                <Highlight title='Seating' content='Upto 7'/>
                <div className='h-full w-[2px] bg-white'/>
                <Highlight title='Happy Clients' content='100%'/>
            </div>
        </div>
      
    </section>
  )
}

const Highlight: React.FC<{title: string; content: string}> = ({title, content}) => {
    return(
        <div className='flex flex-col items-center gap-4'>
           <span className='uppercase text-sm'>{title}</span> 
           <p className='text-2xl'>{content}</p>
        </div>
    )
}

export default Hero;
