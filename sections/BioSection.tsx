import React from 'react'

function BioSection() {
  return (
      <section id="me" className="px-2 md:px-7 my-10 w-screen py-6 bg-gray-800 text-white">
          <h3 className="text-2xl font-semibold mb-3 text-center">About Daniel</h3>
          <div className="flex flex-col-reverse justify-items-center items-center sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-3 w-full">
          <div className="gap-3 flex flex-col max-w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-sm md:text-base px-3"> 
          <p className="break-words text-balance">I am a software developer passionate about technology and innovation. Since the age of 10, I discovered the world of programming while managing a fork of the game *Tales of Pirates I & II*, learning <span className="font-black">Lua</span> and <span className="font-black">PHP</span> self-taught. In 2012, I began my career in web development, honing my skills in various technologies.</p>
          <p>During my university years, I collaborated on academic projects, guiding my peers in solving complex tasks and ensuring the correct implementation of requirements.</p>
          <p>Currently, I specialize in create websites & mobile apps with few technologies like <span className="font-black">React, React Native and .Net with C#</span>.
          </p>
          <p>Furthermore, through <span className="font-semibold">HR 4 Humans</span>, we offer premium, specialized human resources management services tailored for small and medium-sized enterprises (Pymes) in Costa Rica. Our goal is to streamline and optimize their processes, allowing them to focus on what truly matters—growing their business and achieving long-term success.</p>
          </div>
          <figure className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <img src="/images/DanielPhoto.jpg" alt="Daniel Arce" className="rounded-lg shadow-lg w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto" />
          </figure>
          </div>
    </section>
  )
}

export default BioSection