import React, { PropsWithChildren, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MdLightMode, MdDarkMode, MdMenu } from 'react-icons/md';

const DefaultLayout = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  function onDarkMode() {
    let element = document.body;
    element.classList.toggle('dark');
    if (element.classList.value === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }

  return (
    <div className={'container-body'}>
      <header className={'shadow p-5'}>
        <div>
          <h1>Tian Dev</h1>
          <div className={'hidden md:flex flex-row gap-10'}>
            <a onClick={() => router.push('/home')}>Home</a>
            <a onClick={() => router.push('/about')}>About</a>
            <a onClick={() => router.push('/portfolio')}>Portfolio</a>
            <a onClick={() => router.push('/contact')}>Contact</a>
          </div>

          <a href='https://github.com/dystianen' target={'_blank'} rel='noreferrer' className={`hidden md:flex flex-row items-center gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} rounded-lg px-5 py-2`}>
            <span className={`${isDarkMode ? 'text-black' : 'text-white'} font-bold text-lg`}>Github</span>
            {isDarkMode ? <Image src='/github-mark.png' width={25} height={25} alt='github' /> : <Image src='/github-mark-white.png' width={25} height={25} alt='github' />}
          </a>

          <button onClick={() => setIsShowNavbar(!isShowNavbar)} className={'flex flex-row md:hidden'}>
            <MdMenu className='text-4xl' />
          </button>
        </div>
      </header>

      <div className={`z-50 absolute flex flex-col ${isShowNavbar ? 'flex' : 'hidden'} md:hidden gap-10 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} min-h-40 w-full mt-20 rounded-b-[20px] p-10 shadow-2xl`}>
        <a onClick={() => router.push('/home')}>Home</a>
        <a onClick={() => router.push('/about')}>About</a>
        <a onClick={() => router.push('/portfolio')}>Portfolio</a>
        <a onClick={() => router.push('/contact')}>Contact</a>
      </div>

      <main>
        <div>{children}</div>
      </main>
      <button onClick={onDarkMode} className='fixed bottom-5 right-5 bg-slate-400 rounded-full w-10 h-10 grid place-items-center'>
        {isDarkMode ? <MdLightMode className='text-xl' /> : <MdDarkMode className='text-xl' />}
      </button>
    </div>
  );
};

export default DefaultLayout;
