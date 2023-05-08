import React, { PropsWithChildren, useState, useEffect } from 'react';
import { Header } from "@/component/header/page";

const DefaultLayout = ({children}: PropsWithChildren<unknown>): JSX.Element => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [typeof window !== "undefined" && window.location.pathname]);

  return (
    <div id='container' className='container-body'>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header/>
          <main>{children}</main>
        </>
      )}
    </div>
  );
};

export default DefaultLayout;
