import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  const url = process.env.RAPID_URL! ;

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "3a7326966amshfe3c141cbcfe76ep1d6689jsnb349f4c209a0",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((item: any) => {
              return <MovieCard key={item.jawSummary.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
