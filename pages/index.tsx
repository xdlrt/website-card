import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>website-card</title>
        <meta name="description" content="Generated url to a card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to website-card
        </h1>

        <p className={styles.description}>
          coming soon...
        </p>
      </main>

      <div className={styles.bg}></div>
    </div>
  )
}
