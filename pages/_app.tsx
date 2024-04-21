import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { usePathname } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
  const pathName = usePathname();
  return (
    <>
      <Head>
        <title>Adam Barr (.io)</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website of Adam Barr, a software engineer and volleyball player living and working in London."
          key="desc"
        />
      </Head>
      <Header currentPage={pathName.split('/')[1]} />
      <Component {...pageProps} />
      <Footer />
    </>);
}
