import Head from 'next/head'
import styles from './layout.module.css'

const siteTitle = "Faust II"

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>
                <>
                    <div id={styles.landingContainer}>
                       <span className={styles.landingItem}>Größer.</span>
                       <span className={styles.landingItem}>Besser.</span>
                       <span className={styles.landingItem}>Schneller.</span>
                    </div>

                    <div id={styles.titleContainer}>
                        <h1 id={styles.title}>Faust II</h1>
                    </div>

                    {children}
                </>
            </main>
        </div>
    )
}