"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles"
import Navbar from "../Navbar/page"

export default function SparklesPreview() {
  return (
    <div className="h-[20rem] shadow-xl shadow-neutral-900/10 relative w-full bg-teal-750/50 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={35.2}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#06D6A0"
          
        />
      </div>
      <h1 className="md:text-4xl text-3xl lg:text-4xl font-thin text-center text-neutral-900 relative z-20">
        SHuBHAM_MAuRyA_[]
      </h1>
      <Navbar/>
    </div>
  );
}
