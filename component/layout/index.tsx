import React, { PropsWithChildren } from 'react';
import { Header } from "@/component/header/page";

const DefaultLayout = ({children}: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <div id='container' className='container-body'>
      <Header/>
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
