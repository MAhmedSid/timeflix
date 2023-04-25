import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
    <div className={styles.container}>
    <h2>Contact us</h2>
    <ContactCard/>

    <section className={styles.contact_section}>
    <h2>We'd love to hear <span> from you</span></h2>
    <ContactForm />

    </section>


    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28947.02921634445!2d67.05041085485087!3d24.919167453118757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1682434456383!5m2!1sen!2s" width="600" height="450" style={{border:"0"}}  loading="lazy" className={styles.mapping}></iframe>
    </>
  )
}

export default Contact