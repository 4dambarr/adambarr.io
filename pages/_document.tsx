import Footer from "@/components/footer";
import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" title="Adam Barr">
      <Head />
      <body className="relative min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
