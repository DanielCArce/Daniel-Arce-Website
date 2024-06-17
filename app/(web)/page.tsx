import React from "react";
import type { Metadata } from "next";
import SocialWidget from "@/components/SocialWidget";
export const metadata: Metadata = {
  title: "Daniel Campos Arce - Software Developer",
  description: "Websites, Mobile Apps and all your need in software",
};
function page() {
  return (
    <div className="px-4 flex flex-row justify-between">
      <section className="w-1/2 px-2">
        <article className="mb-5">
          <section>
            <header className="mb-6 mt-12">
              <h2 className="font-bold text-3xl text-white">Services</h2>
              <h3 className="font-ligth text-xl text-white">
                Things we can do
              </h3>
            </header>
            <section className="flex flex-row justify-between gap-2">
              <section className="bg-slate-100 pt-10 rounded-lg w-1/2">
                <h3 className="font-semibold text-xl text-black mb-4 text-center uppercase">
                  Web Development
                </h3>
                <picture>
                  <source srcSet="WebDev.webp" />
                  <img src="WebDev.jpg" alt="An image for web development" />
                </picture>
              </section>
              <section className="bg-slate-100 pt-10 rounded-lg w-1/2">
                <h3 className="font-semibold text-xl text-black mb-4 text-center uppercase">
                  App Development
                </h3>
                <picture>
                  <source srcSet="AppDev.webp" />
                  <img src="AppDev.jpg" alt="An image for app development" />
                </picture>
              </section>
            </section>
          </section>
          <section>
            <header className="mb-6 mt-12">
              <h2 className="font-bold text-3xl text-white">Work</h2>
              <h3 className="font-ligth text-xl text-white">Things we did</h3>
            </header>
            <section className="flex flex-row justify-between gap-2">
              <section className="bg-slate-100 pt-10 rounded-lg w-1/2">
                <div className="mb-4">
                  <h3 className="font-semibold text-xl text-black mb-4 text-center uppercase">
                    FINA APP
                  </h3>
                  <p className="text-black text-center text-sm">
                    An app manage all the orders and delivery orders from
                    clients inside the company
                  </p>
                </div>
                <picture>
                  <source srcSet="WebDev.webp" />
                  <img src="WebDev.jpg" alt="An image for web development" />
                </picture>
              </section>
              <section className="bg-slate-100 pt-10 rounded-lg w-1/2">
                <div className="mb-4">
                  <h3 className="font-semibold text-xl text-black mb-4 text-center uppercase">
                    Dist. Catalina Web
                  </h3>
                  <p className="text-black text-center text-sm">
                    An app manage all the orders and delivery orders from
                    clients inside the company
                  </p>
                </div>
                <picture>
                  <source srcSet="AppDev.webp" />
                  <img src="AppDev.jpg" alt="An image for web development" />
                </picture>
              </section>
            </section>
          </section>
        </article>
      </section>
      <section className="w-1/2 bg-cyan-800">
        <article>
          <section className="my-11">
            <h1 className="uppercase text-white font-bold text-7xl text-center">
              Daniel
            </h1>
            <h1 className="uppercase text-white font-bold text-7xl text-center">
              Arce
            </h1>
          </section>
          <section>
            <h3 className="uppercase text-white font-bold text-3xl text-center">
              Your Problem, Our Solution
            </h3>
          </section>
          <SocialWidget />
        </article>
      </section>
    </div>
  );
}

export default page;
