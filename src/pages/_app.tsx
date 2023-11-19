import type { AppProps } from "next/app";
import "../styles/primeflex.min.css";
import "../styles/primeicons.css";
import "../styles/primereact-main.css";
// import "../styles/lara-light-indigo_theme.css"
import { PageLayout } from "src/components/layout/page-layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
