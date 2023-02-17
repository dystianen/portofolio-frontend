import React from "react";

const Home = () => {
  return (
    <div className={'flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 w-full mt-20'}>
      <div className={'flex flex-col md:w-1/2 gap-10 items-center md:items-start'}>
        <div className={'flex flex-col gap-2'}>
          <h1 className={'text-3xl text-center md:text-left'}>Hello my name is <span className={'font-bold'}>Dystian En Yusgiantoro</span></h1>
          <h1 className={'animasi-teks title text-2xl text-center md:text-left'}>I&#39;m a <span className={'text-orange-500 italic font-bold'}>Frontend Developer!</span></h1>
        </div>

        <p className={'text-lg text-center md:text-left'}>I&#39;m a Frontend Developer with strong curiosity. I like to produce clean code. I
          strive to stay up-to-date with the latest technology.</p>

        <button className={'bg-orange-500 text-white rounded-full shadow-lg w-[200px] p-4 text-xl'}>Download CV</button>
      </div>
      <div className={'relative md:w-2/5'}>
        <div className="absolute h-max ml-10">
          <img className="z-0 -mt-16 md:-mt-20 h-[28vh] md:h-[50vh]" src={'/profile2.png'} alt={'image'} />
          <div className="absolute h-10 -mb-1 w-full bottom-0 rounded-lg bg-gradient-to-t from-violet-500 to-transparent"></div>
        </div>
        <div className="z-10 w-72 h-60 md:h-96 md:w-full rounded-custom-profile bg-gradient-to-t from-violet-500 to-fuchsia-500"></div>
      </div>
    </div>
  )
}

export default Home;