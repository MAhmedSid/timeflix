import React, { FC } from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const inter = Mulish({ subsets: ["latin"] });

const Herosection: FC<{ title: string; imageUrl: string }> = ({
  title,
  imageUrl,
}) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus at sint perferendis a tempora neque quibusdam ea
              deserunt suscipit, commodi, repudiandae cupiditate dignissimos
              aliquam consequuntur ipsa praesentium dolorum aperiam autem
              ratione iusto modi eius.
            </p>
            <Link href={"/movie"}>
              <button className={inter.className}>Explore Movies</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image
              src={imageUrl}
              alt="watching netflix"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>

      <div className={styles["custom-shape-divider-bottom-1682416881"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosection;
