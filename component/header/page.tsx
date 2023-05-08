import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const [path, setPath] = useState('')
  const [isShowNavbar, setIsShowNavbar] = useState(false)

  function onChangeMenu(route: any) {
    router.push(route)
    setPath(route.substring(1))
    setIsShowNavbar(false)
  }

  return <>
    <header className={`shadow p-0 bg-white z-50 h-[65px]`}>
      <div>
        <Image
          onClick={() => router.push('/home')}
          src={'/assets/thumbnail/profile.jpg'}
          alt={'profile'}
          width={50}
          height={50}
          className={'rounded-full object-fill border-double border-4 border-darkblue'}
        />
        {/*<h1 className={'logo'} onClick={() => router.push('/home')}>DEY.</h1>*/}
        <div className={'hidden md:flex flex-row gap-10'}>
          <a
            className={`${path === '' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer`}
            onClick={() => onChangeMenu('/')}>Home</a>
          <a
            className={`${path === 'about' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer`}
            onClick={() => onChangeMenu('/about')}>About</a>
          <a
            className={`${path === 'portfolio' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer`}
            onClick={() => onChangeMenu('/portfolio')}>Portfolio</a>
          <a
            className={`${path === 'certificate' && 'bg-darkblue px-43 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer`}
            onClick={() => onChangeMenu('/certificate')}>Certificate</a>
        </div>

        <a href='https://github.com/dystianen' target={'_blank'} rel='noreferrer'
           className={`hidden md:flex flex-row items-center gap-4 bg-darkgreen rounded-lg px-5 py-2`}>
          <span className={`text-white font-bold text-[16px]`}>Github</span>
          <Image src='/assets/github-mark-white.png' width={20} height={20} alt='github'/>
        </a>

        <button onClick={() => setIsShowNavbar(true)} className={'flex flex-row md:hidden'}>
          <MdMenu className='text-4xl'/>
        </button>
      </div>
    </header>

    <div
      className={`z-50 fixed flex flex-col ${isShowNavbar ? 'translate-x-0' : '-translate-x-[100rem]'} duration-300 md:hidden gap-10 bg-white h-screen w-full px-10 py-5 shadow-2xl`}>
      <div className={'flex flex-row justify-between items-center'}>
        <h1 className={'logo'} onClick={() => router.push('/home')}>DEY.</h1>
        <button onClick={() => setIsShowNavbar(false)} className={'flex flex-row md:hidden'}>
          <MdClose className='text-4xl'/>
        </button>
      </div>
      <a className={`${path === '' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/')}>Home</a>
      <a className={`${path === 'about' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/about')}>About</a>
      <a className={`${path === 'portfolio' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/portfolio')}>Portfolio</a>
      <a className={`${path === 'certificate' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/certificate')}>Certificate</a>
      <a href='https://github.com/dystianen' target={'_blank'} rel='noreferrer'
         className={`md:hidden flex flex-row items-center gap-4 bg-darkgreen rounded-lg px-5 py-2 w-max`}>
        <span className={`text-white font-bold text-lg`}>Github</span>
        <Image src='/assets/github-mark-white.png' width={25} height={25} alt='github'/>
      </a>
    </div>
  </>
}