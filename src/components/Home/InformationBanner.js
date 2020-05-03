import React from 'react'
import styles from '../../css/infobanner.module.css'

const InformationBanner = () => {
    return (
        <section className={styles.innerContent}>
            <div>
                <h4>Creative & Unique Sixteen Products</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
            </div>
            <div>
                <button type="button" className={styles.infoButton}>Purchase Now</button>
            </div>
        </section>
    )
}

export default InformationBanner
