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
    <div>
      <section>
        <h2 className="text-3xl text-gray-800 font-black font-sans text-center">Daniel Arce</h2>
      </section>
    </div>
  );
}

export default page;
