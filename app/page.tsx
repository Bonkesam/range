'use client';

import Image from "next/image";
import Hero from "./_components/Hero";
import Section from "./_components/Section";

import comfort from "/public/images/comfort.jpg";
import exterior from "/public/images/exterior.jpg";
import engine from "/public/images/engine.jpg";
import seats from "/public/images/seats.jpg"
import sunroof from "/public/images/sunroof.jpg";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },[]);
  return (
    <main>
      <Hero />
      <Section 
      image={seats} 
      title="Sink into the haven of handcrafted luxury, where every journey is an oasis of serenity."
      tag="Comfort"
      description="Experience the pinnacle of comfort. Exquisite materials and meticulous craftsmanship create a haven of serenity for every drive."
      />
      <Section 
      image={exterior} 
      title="Sink into the haven of handcrafted luxury, where every journey is an oasis of serenity."
      tag="Exterior"
      description="Experience the pinnacle of comfort. Exquisite materials and meticulous craftsmanship create a haven of serenity for every drive."
      />
      <Section 
      image={engine} 
      title="Sink into the haven of handcrafted luxury, where every journey is an oasis of serenity."
      tag="Engine"
      description="Experience the pinnacle of comfort. Exquisite materials and meticulous craftsmanship create a haven of serenity for every drive."
      />
      <Section 
      image={comfort} 
      title="Sink into the haven of handcrafted luxury, where every journey is an oasis of serenity."
      tag="Seats"
      description="Experience the pinnacle of comfort. Exquisite materials and meticulous craftsmanship create a haven of serenity for every drive."
      />

    </main>
  );
}
