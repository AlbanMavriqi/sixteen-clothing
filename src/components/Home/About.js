import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="About Us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutInfo}>
                    <p className={styles.aboutTitle}>Looking for the best products?</p>
                    <p>This template is free to use for your business websites. 
                    However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info.</p>
                    <ul className={styles.aboutList}>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur an adipisicing elit</li>
                        <li>It aquecorporis nulla aspernatur</li>
                        <li>Corporis, omnis doloremque</li>
                        <li>Non cum id reprehenderit</li>
                    </ul>
                    <button type="button" className="btn-primary">Read more</button>
                </article>
                <article className={styles.aboutImg}>
                    <img src="https://i.imgur.com/dVds9pF.jpg" alt="about"></img>
                </article>
            </div>
        </section>
    )
}

export default About
