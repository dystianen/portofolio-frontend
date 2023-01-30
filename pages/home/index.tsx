import React from "react";

const Home = () => {
  return (
    <div className={'flex flex-col-reverse md:flex-row gap-10 w-full'}>
      <div className={'flex flex-col w-3/4 gap-10'}>
        <div className={'flex flex-col gap-2'}>
          <h1 className={'text-3xl'}>Hello my name is <span className={'font-bold'}>Dystian En Yusgiantoro</span></h1>
          <h1 className={'title text-2xl'}>I&#39;m a <span className={'text-orange-500 italic font-bold'}>Frontend Developer!</span></h1>
        </div>

        <p className={'text-lg'}>I&#39;m a Frontend Developer with strong curiosity. I like to produce clean code. I
          strive to stay up-to-date with the latest technology.</p>

        <button className={'bg-orange-500 text-white rounded-full shadow-lg w-[200px] p-2'}>Download CV</button>
      </div>
      <div className={'w-1/4'}>
        <img src={''} alt={'image'} />
      </div>
    </div>
  )
}

export default Home;