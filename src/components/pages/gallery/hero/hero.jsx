import React from 'react';

const TITLE = 'Photo Gallery';

const DESCRIPTION =
  'Explore moments from previous Cloud Native Community Days Amsterdam events. Browse through our collection of photos capturing the vibrant community, engaging talks, and memorable experiences.';

const Hero = () => (
  <section className="safe-paddings safe-paddings overflow-hidden  bg-opacity-10 pb-20 pt-24">
    <div className="container relative mt-4 text-center text-primary-1">
      <div className="absolute -top-1/2 left-1/2 h-[503px] w-[503px] -translate-x-1/2 bg-white blur-[100px] md:-left-[30%] md:h-[350px] md:w-[350px]" />
      <div className="relative">
        <h1 className="text-6xl font-bold leading-denser ">{TITLE}</h1>
        <p className="mx-auto mt-8 max-w-[1008px] text-2xl leading-normal">{DESCRIPTION}</p>
      </div>
    </div>
  </section>
);

export default Hero;
