import Head from 'next/head'
import Landing from './../components/landing'
import Title from './../components/title'
import Resources from '../components/resources'

import data from './../public/citations.json'
import styles from './../styles/Home.module.css'

const siteTitle = "Faust II"

export default function Home( {citations} ) {
  return (
    <div id="container" className={styles.container}>
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="icon" href="/favicon.png" type="image/png"/>
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="rgb(12,12,12)" />
        </Head>
        <main>
            <Landing duration={9} />

            <Title citations={citations} />

            <Resources />
        </main>
    </div>
  )
}

export function getStaticProps() {
  let citations = data.citations
  // console.log(citations);
  // console.log(citations.length);

  return {
      props: {
          citations
      }
  }
}