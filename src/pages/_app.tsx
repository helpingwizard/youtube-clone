import AppBar from "@/components/appbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AppBar></AppBar>
  <Component {...pageProps} />
  </>);
}
