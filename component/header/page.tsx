import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const [path, setPath] = useState('')
  const [isShowNavbar, setIsShowNavbar] = useState(false)

  useEffect(() => {
    const pathURL = router.pathname.replace(/^./, "");
    setPath(pathURL)
  }, [router])

  function onChangeMenu(route: any) {
    router.push(route)
    setPath(route.substring(1))
    setIsShowNavbar(false)
  }

  return <>
    <header className={`p-0 bg-white z-50 h-[65px] ${isShowNavbar ? '' : 'shadow'}`}>
      <div>
        <Image
          onClick={() => router.push('/')}
          src={'/assets/thumbnail/profile.jpg'}
          alt={'profile'}
          width={50}
          height={50}
          className={'rounded-full object-fill border-double border-4 border-darkblue'}
        />
        <div className={'hidden md:flex flex-row gap-10'}>
          <a
            className={`${path === '' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer transition-all duration-500`}
            onClick={() => onChangeMenu('/')}>Home</a>
          <a
            className={`${path === 'about' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer transition-all duration-500`}
            onClick={() => onChangeMenu('/about')}>About</a>
          <a
            className={`${path.includes('blog') && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer transition-all duration-500`}
            onClick={() => onChangeMenu('/blog')}>Blog</a>
          <a
            className={`${path === 'portfolio' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer transition-all duration-500`}
            onClick={() => onChangeMenu('/portfolio')}>Portfolio</a>
          <a
            className={`${path === 'certificate' && 'bg-darkblue px-43 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer transition-all duration-500`}
            onClick={() => onChangeMenu('/certificate')}>Certificate</a>
        </div>

        <button onClick={() => setIsShowNavbar(!isShowNavbar)} className={'flex flex-row md:hidden delay-75'}>
          {isShowNavbar ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl'/>}
        </button>
      </div>
    </header>

    <div
      className={`z-50 fixed flex flex-col ${isShowNavbar ? 'translate-x-0' : 'translate-x-full'} duration-300 md:hidden gap-10 bg-white h-screen w-full px-5 py-5 mt-16`}>
      <a className={`${path === '' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/')}>Home</a>
      <a className={`${path === 'about' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/about')}>About</a>
      <a className={`${path === 'portfolio' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/portfolio')}>Portfolio</a>
      <a className={`${path === 'certificate' && 'bg-darkblue px-4 rounded-full text-white'} hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`} onClick={() => onChangeMenu('/certificate')}>Certificate</a>
    </div>
  </>
}