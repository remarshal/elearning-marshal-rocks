import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eLearning Marshal Rocks</title>
        <meta name="description" content="eLearning with Marshal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          eLearning with <span className="hero">Marshal!</span>
        </h1>

        <h4 className={styles.description}>
          Let's learning <span className="hero">coding</span> together
        </h4>
      </main>
      
    </div>
  );
}
