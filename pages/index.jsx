import Head from 'next/head'
import Landing from './../components/landing'
import Title from './../components/title'
import Resources from '../components/resources'

import data from './../data/citations.json'
import styles from './../styles/Home.module.css'

const siteTitle = "Faust II"

export default function Home( {citations} ) {
  return (
    <div className={styles.container}>
        <Head>
            <title>{siteTitle}</title>
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