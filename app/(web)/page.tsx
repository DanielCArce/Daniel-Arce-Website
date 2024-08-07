import React from "react";
import type { Metadata } from "next";
import SocialWidget from "@/components/SocialWidget";
import {FaArrowTrendUp} from 'react-icons/fa6'
import Link from "next/link";
export const metadata: Metadata = {
  title: "Daniel Arce - FullStack Developer",
  description: "Websites, Mobile Apps and all your need in software",
};
function page() {
  return (
    <div className="flex md:flex-row gap-5 py-10 sm:flex-col xsm:flex-col flex-col items-center justify-center">
      <section className="md:w-1/2 sm:w-screen xsm:flex sm:flex xsm:items-center xsm:justify-center sm:items-center sm:justify-center xsm:flex-col sm:flex-col">
        <h2 className="text-5xl uppercase text-gray-800 font-black font-sans">Daniel Arce</h2>
        <h3 className="text-2xl text-gray-500 font-medium">Fullstack  Developer</h3>
        <p className="text-black my-3">Developer with a pasion about </p>
        <div className="flex flex-row text-black gap-5">
          <Link href={"/services"} className="capitalize bg-emerald-200 px-3 py-2 rounded-lg hover:border-2 border-gray-300">
            View services
          </Link>
          <Link href={"/contact"} className="capitalize rounded-lg border-2 px-3 py-2 hover:border-2 border-gray-300">
            Contact me
          </Link>
        </div>
      </section>
      <section className="md:1/2 sm:w-screen flex items-center justify-center place-items-center">
        <SocialWidget/>
      </section>
    </div>
  );
}

export default page;
