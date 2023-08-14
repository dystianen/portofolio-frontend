import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/assets/profile.png" />
        <meta property="og:title" content={"Dystian En"} />
        <meta property="og:image" content={"https://avatars.githubusercontent.com/u/46418294?v=4"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
