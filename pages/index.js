import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Image />
          <Link href='/'>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/about-us'>About us</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {data.map(ev => {
          return(
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <img width={200} height={'100%'} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>
                {ev.description}
              </p>
            </Link>
          )
        })}
      </main>
      <footer></footer>
    </>
  )
}


export const getServerSideProps = async () => {
  const {events_categories} = await import('/data/data.json')

  return {
    props:{
      data: events_categories,
    }
  }
}