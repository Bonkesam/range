'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react'

const Section: React.FC<{
    image: StaticImageData;
    tag: string;
    title: string;
    description: string;
}> = ({
    image, tag, title, description
}) => {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])
  return (
    <section ref={sectionRef} className='relative h-screen overflow-hidden'>
      <motion.div className='absolute w-full h-[120%] -z-10' style={{top: y }}>
        <div className='absolute w-full inset-o bg-black/30'/>
        <Image
            src ={image}
            alt={title}
            fill
        />
      </motion.div>

      <div className='flexflex-col gap-4 p-24 text-white'>
        <span className='uppercase text-xs'>{tag}</span>
        <h1 className='font-serif text-3xl max-w-[25ch]'>{title}</h1>
        <p className='max-w-[50ch]'>{description}</p>
      </div>
    </section>
  )
}

export default Section;
