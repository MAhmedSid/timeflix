import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@/app/styles/navbar.module.css"
import Nav from './Nav'

const Header = () => {
  return (
<header className={styles.main_header}>
    <div className={styles.navbar_brand}>
        <Link href="/">
        <Image
        priority
        src="/original_logo.png"
        alt="brand logo"
        width={200}
        height={50}
        />
        </Link>
    </div>


    <Nav />
</header>
  )
}

export default Header