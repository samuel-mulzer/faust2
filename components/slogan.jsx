import styles from './slogan.module.css'

export default function Slogan( {name, color1, color2, duration, index} ) {
    return(
        <div className={styles.slogan}>
            <span style={{animationDuration: `${duration}s`, animationDelay: `${index * (duration / 3)}s`}} className={`${styles.foreground} ${styles.text}`}>{name}.</span>
            <span style={{backgroundImage: `linear-gradient(90deg, ${color1}, ${color2})`}} className={`${styles.background} ${styles.text}`}>{name}.</span>
        </div>
    )
}