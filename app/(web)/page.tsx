import React from "react";
import type { Metadata } from "next";
import SocialWidget from "@/components/SocialWidget";
import {FaArrowTrendUp} from 'react-icons/fa6'
import Link from "next/link";
export const metadata: Metadata = {
  title: "Daniel Campos Arce - Software Developer",
  description: "Websites, Mobile Apps and all your need in software",
};
function page() {
  return (
    <div className="px-4 flex flex-row justify-between">
      <section className="flex flex-col items-center justify-center gap-2 w-1/2">
        <div>
          <h2 className="text-5xl uppercase font-black text-black">Daniel</h2>
          <h2 className="text-5xl uppercase font-black text-black">Arce</h2>
        </div>
      </section>
      <section className="flex flex-col items justify-around h-screen gap-2 w-1/2">
      <div>
          <h3 className="font-medium text-xl text-black text-center">Fullstack Developer</h3>
          <h4 className="text-lg font-light text-black text-center">
            <div className="text-center"> Building digital solutions that looks like</div>
            <div className="text-center"><span className="font-semibold">websites</span>, <span className="font-semibold">mobile apps</span> and more</div>
          </h4>
          <SocialWidget />
          <Link href="/services" className="text-[#]">
            <div className="flex flex-row gap-2 text-center justify-center mt-3">
              
            <span className="text-[#FF9800]">Services & Projects</span> <FaArrowTrendUp size="2rem" color="#FF9800"/>
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default page;
