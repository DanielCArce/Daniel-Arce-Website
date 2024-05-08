import React from "react";
// import Link from "next/link";
import Navigation from "./Navigation";
function PageHeader() {
  return (
    <header className="flex flex-row justify-between mb-5">
      <div>
        <h2 className="font-semibold text-3xl leading-9 mb-4">Daniel C. Arce</h2>
        <h3 className="text-xl">Frontend Developer</h3>
      </div>
      <Navigation />
    </header>
  );
}

export default PageHeader;
