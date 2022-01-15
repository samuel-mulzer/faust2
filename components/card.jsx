import Image from "next/image"
import Link from "next/link"

import styles from './card.module.scss'

export default function Card({name, alt, href, src}) {
    return (
        <a href={href} target={'_blank'} rel={'noreferrer'}>
            <div className={styles.card}>
                <Image
                    className={styles.image}
                    alt={alt}
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center bottom"
                />
                <span className={styles.text}>{name}</span>
            </div>
        </a>
    )
}