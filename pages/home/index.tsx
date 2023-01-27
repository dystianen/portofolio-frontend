import React from "react";

const Home = () => {
  return (
    <div className={'flex flex-row gap-10'}>
      <div className={'flex flex-col w-3/4 gap-20'}>
        <div className={'flex flex-col gap-2'}>
          <h1 className={'text-2xl'}>Hello My Name is <span className={'text-orange-500 italic'}>Dystian En Yusgiantoro</span></h1>
          <h1 id={'typing'} className={'text-3xl'}>I&#39;m a Frontend Developer ! <div id={'crow'}>|</div></h1>
        </div>

        <p className={'text-lg'}>I&#39;m a Frontend Developer with strong curiosity. <br /> I like to produce clean code. I
          strive to stay up-to-date with the latest technology.</p>

        <button className={'bg-orange-500 rounded-2xl shadow-lg w-[200px] p-2'}>Download CV</button>
      </div>
      <div className={'w-1/4'}>
        lskdlskldkslkl
      </div>
    </div>
  )
}

export default Home;