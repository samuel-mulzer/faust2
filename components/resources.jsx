import Card from "./card"
import styles from "./resources.module.css"

export default function Resources() {
    return(
        <div id="resources" className={styles.resourceContainer}>
            <h2 className={styles.resourceHeading}>resources</h2>
            <div className={styles.cardContainer}>
                <Card name={"Keynote"} alt={"Dubai"} href={"https://www.icloud.com/keynote/0c3QoyCFUAjzaVcakgGMiSVpA#Faust2"} src={"/img/dubai.png"}/>
                <Card name={"Handout"} alt={"Congress"} href={"https://www.icloud.com/pages/09fdyXhOI-fHvc9ww2I_R0-yA#Faust2"} src={"/img/congress.png"}/>
                <Card name={"Zeichnungen Gerhard Kraaz"} alt={"Faust am Boden"} href={"https://nat.museum-digital.de/objects?style=grid&s=persinst%3A12104&&style=grid&startwert=0"} src={"/img/faust.png"}/>
                <Card name={"Zeichnungen Max Beckmann"} alt={"Walpurgisnacht"} href={"https://nat.museum-digital.de/objects?style=grid&s=institution%3A487+collection%3A2752&suinin=487&suinsa=2752&&style=grid&startwert=0"} src={"/img/walpurgis.png"}/>
                <Card name={"SWR2 Audio"} alt={"Theater"} href={"https://swr2.app/s/goethes-faust-ii-gutes-wollen-boeses-tun-100"} src={"/img/swr.png"}/>
                <Card name={"getAbstract Text"} alt={"Biotechnologie"} href={"https://www.getabstract.com/de/zusammenfassung/faust-ii/15103"} src={"/img/dna.png"}/>
            </div>
        </div>
    )
}