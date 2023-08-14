import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/assets/profile.png" />
        <meta property="og:title" content={"Dystian En"} />
        <meta property="og:image" content={"/assets/thumbnail/profile.jpg"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
