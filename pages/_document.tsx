import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/assets/profile.png" />
        <meta property="og:title" content={"Dystian En"} />
        <meta property="og:image" content={"https://nos.wjv-1.neo.id/asy-syifa/compress_thumbnail.png"} />
      </Head>
      <body className="font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
