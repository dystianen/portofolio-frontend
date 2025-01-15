import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/assets/profile.png" />
        <title>Dystian En Yusgiantoro</title>
        <meta property="og:title" content={"Dystian En"} />
        <meta property="og:image" content={"/assets/thumbnail_share.png"} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Expert frontend developer with proficiency in Vue.js, React.js, and Next.js. I build user-friendly and performant web applications that help businesses grow."
        ></meta>
      </Head>
      <body className="font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
