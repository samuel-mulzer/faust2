import Slogan from "./slogan";

import styles from "./landing.module.css"

export default function Landing({ duration }) {
    return(
        <div className={styles.landing}>
            <Slogan name="Größer" duration={duration} index={0} color1={'rgb(0, 120, 242)'} color2={'rgb(0, 220, 222)'} />
            <Slogan name="Besser" duration={duration} index={1} color1={'rgb(150, 0, 200)'} color2={'rgb(236, 118, 242)'} />
            <Slogan name="Schneller" duration={duration} index={2} color1={'rgb(250, 55, 55)'} color2={'rgb(250, 180, 40)'} />
        </div>
    )
}