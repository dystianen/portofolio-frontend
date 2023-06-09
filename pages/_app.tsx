import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from "@/component/layout";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const disableRightClick = (e: any) => {
      e.preventDefault(); // Prevent the default context menu
    };

    const disableInspect = (e: any) => {
      if (e.keyCode === 123) {
        e.preventDefault(); // Prevent F12 key from opening the browser console
      }

      if (e.ctrlKey && e.shiftKey && e.code === 'KeyI') {
        e.preventDefault(); // Prevent Ctrl + Shift + I from opening the browser console
      }
    };

    // Add event listeners to the document
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableInspect);

    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableInspect);
    };
  }, []);

  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}
