import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from 'react-icons/md';

const DefaultLayout = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [path, setPath] = useState('home')

  function onChangeMenu(route: any) {
      router.push(route)
      setPath(route.substring(1))
      setIsShowNavbar(false)
  }

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
    <div id='container' className='container-body'>
      <header className={`shadow p-5 bg-white z-50`}>
        <div>
          <h1 className={'logo'} onClick={() => router.push('/home')}>DEY.</h1>
          <div className={'hidden md:flex flex-row gap-10'}>
            <a className={`hover:scale-110 ${path === 'home' && 'scale-110 text-darkgreen'} hover:cursor-pointer hover:text-darkgreen duration-300`} onClick={() => onChangeMenu('/home')}>Home</a>
            <a className={`hover:scale-110 ${path === 'about' && 'scale-110 text-darkgreen'} hover:cursor-pointer hover:text-darkgreen duration-300`} onClick={() => onChangeMenu('/about')}>About</a>
            <a className={`hover:scale-110 ${path === 'portfolio' && 'scale-110 text-darkgreen'} hover:cursor-pointer hover:text-darkgreen duration-300`} onClick={() => onChangeMenu('/portfolio')}>Portfolio</a>
            <a className={`hover:scale-110 ${path === 'certificate' && 'scale-110 text-darkgreen'} hover:cursor-pointer hover:text-darkgreen duration-300`} onClick={() => onChangeMenu('/certificate')}>Certificate</a>
          </div>

          <a href='https://github.com/dystianen' target={'_blank'} rel='noreferrer' className={`hidden md:flex flex-row items-center gap-4 bg-darkgreen rounded-lg px-5 py-2`}>
            <span className={`text-white font-bold text-lg`}>Github</span>
            <Image src='/assets/github-mark-white.png' width={25} height={25} alt='github' />
          </a>

          <button onClick={() => setIsShowNavbar(true)} className={'flex flex-row md:hidden'}>
            <MdMenu className='text-4xl' />
          </button>
        </div>
      </header>

      <div className={`z-50 fixed flex flex-col ${isShowNavbar ? 'translate-x-0' : '-translate-x-[100rem]'} duration-300 md:hidden gap-10 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} h-screen w-full rounded-b-[20px] px-10 py-5 shadow-2xl`}>
        <div className={'flex flex-row justify-between items-center'}>
        <h1 className={'logo'} onClick={() => router.push('/home')}>DEY.</h1>
          <button onClick={() => setIsShowNavbar(false)} className={'flex flex-row md:hidden'}>
            <MdClose className='text-4xl' />
          </button>
        </div>
        <a onClick={() => onChangeMenu('/home')}>Home</a>
        <a onClick={() => onChangeMenu('/about')}>About</a>
        <a onClick={() => onChangeMenu('/portfolio')}>Portfolio</a>
        <a onClick={() => onChangeMenu('/certificate')}>Certificate</a>
        <a href='https://github.com/dystianen' target={'_blank'} rel='noreferrer' className={`md:hidden flex flex-row items-center gap-4 bg-darkgreen rounded-lg px-5 py-2 w-max`}>
          <span className={`text-white font-bold text-lg`}>Github</span>
          <Image src='/assets/github-mark-white.png' width={25} height={25} alt='github' />
        </a>
      </div>

      <main>{children}</main>
      {/* <button onClick={onDarkMode} className='fixed bottom-5 right-5 bg-slate-400 rounded-full w-10 h-10 grid place-items-center'>
        {isDarkMode ? <MdLightMode className='text-xl' /> : <MdDarkMode className='text-xl' />}
      </button> */}
    </div>
  );
};

export default DefaultLayout;
