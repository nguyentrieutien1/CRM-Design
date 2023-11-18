/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="stylesheet"
        href="https://unpkg.com/primeicons/primeicons.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/primereact/resources/primereact.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css"
      />

      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
