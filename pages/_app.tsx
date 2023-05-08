import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from "@/component/layout";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <DefaultLayout>
    <Head>
      <title>DEY</title>
      <link rel="shortcut icon" href="/assets/profile.png" />
    </Head>
    <Component {...pageProps} />
  </DefaultLayout>
}
