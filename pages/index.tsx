import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { WorkTimeChrts } from '../components/WorkTimeChrts'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jobcan Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        Jobcan Chart
      </div>

      <main className={styles.main}>
        <WorkTimeChrts />
      </main>
    </div>
  )
}
