import Head from "next/head";
import localFont from "next/font/local";
import { Container } from "@mui/material";

import styles from "@/styles/Home.module.css";

import Search from "./components/Search";
import Details from "./components/Details";
import Nearby from "./components/Nearby";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Search</title>
        <meta name="description" content="Mozio test: Travel destination search application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Container>
          <h1>Travel Search</h1>
        </Container>
      </header>

      <main className={styles.main}>

        <Container>
          <Search/>

          <Details/>

          <Nearby/>
        </Container>
        
      </main>

      <footer className={styles.footer}>
        <Container>
          <p>2024 &copy; Copyright.</p>
        </Container>
      </footer>
    </>
  );
}
