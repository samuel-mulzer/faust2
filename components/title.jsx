import Citation from './citation'
import styles from './title.module.css'

export default function Title( { citations } ) {
    return(
        <div id="title" className={styles.titleContainer}>
            <h1 className={styles.title}>Faust II</h1>
            <Citation citations={citations} />
        </div>
    )
}