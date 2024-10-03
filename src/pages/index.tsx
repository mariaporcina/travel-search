import Head from "next/head";
import { Container } from "@mui/material";

import styles from "@/styles/Home.module.css";

import Search from "./components/Search";

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
        <Container sx={{ py: 3 }}>
          <h1>Travel Search</h1>
        </Container>
      </header>

      <main className={styles.main}>

        <Container>
          <Search/>
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
