import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";

const DefaultLayout = ({children}: PropsWithChildren<unknown>): JSX.Element => {
  const router = useRouter();

  return (
    <div className={'container'}>
      <header className={'shadow-lg p-5'}>
        <h1>Tian Dev</h1>
        <div className={'flex flex-row gap-10'}>
          <a href="javascript:void(0);" onClick={() => router.push('/home')}>Home</a>
          <a href="javascript:void(0);" onClick={() => router.push('/about')}>About</a>
          <a href="javascript:void(0);" onClick={() => router.push('/portfolio')}>Portfolio</a>
          <a href="javascript:void(0);" onClick={() => router.push('/contact')}>Contact</a>
        </div>
      </header>
      <main>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}

export default DefaultLayout;