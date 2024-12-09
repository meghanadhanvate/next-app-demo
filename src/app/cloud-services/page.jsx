import { SplashHeading } from "../../Component/cloudPageComponent/cloudSplashanimation"
import Indian_text from '../../images/cloud/india text.svg'
import ButtonComponent from '../../Component/ButtonComponent'
import Image from "next/image"
import styles from './cloudService.module.css'
export default function CloudService() {
    return (
        <div className={styles.cloud_container}>
           <SplashHeading />
           <section id='Cloud-banner' className={styles.Cloud_banner}>
                    <div className={styles.cloud_inner_div}>
                        <div className={styles.cloud_banner_text}>
                            <h3 className={styles.head_text}>Handing The Power Of Indian Cloud In Your Hands</h3>
                            <div className={styles.india_text}><Image src={Indian_text} alt="indian text" /></div>
                            <div className={styles.cloud_banner_cta}>
                               <ButtonComponent />
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}