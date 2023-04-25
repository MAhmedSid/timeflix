import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/common.module.css'

const NotFound = () => {
  return (
    <section  className={styles.container}>
        <div className={styles.error_page}>
            <h2>404</h2>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" >
                <button>
                    Go to Home Page
                </button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound