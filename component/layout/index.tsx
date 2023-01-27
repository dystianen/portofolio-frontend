import React, { PropsWithChildren } from "react";
import { useRouter  } from "next/router";

const DefaultLayout = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  const router = useRouter();

  return (
    <div className={'container'}>
      <aside>
        <a href="javascript:void(0);" onClick={() => router.push('/home')}>Home</a>
        <a href="javascript:void(0);" onClick={() => router.push('/about')}>About</a>
        <a href="javascript:void(0);" onClick={() => router.push('/portfolio')}>Portofolio</a>
        <a href="javascript:void(0);" onClick={() => router.push('/contact')}>Contact</a>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout;