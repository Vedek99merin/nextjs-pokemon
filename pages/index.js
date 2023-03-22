import React, { useState } from 'react'
import search from '../styles/Search.module.css'
import Link from 'next/link'
import Head from "next/head"
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const resp = await fetch ("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");

  return {
      props: {
          pokemon: await resp.json(),
      }
  }
}

export default function Home({pokemon}) {

  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

  const filteredData = pokemon.filter((el) => {
    if (inputText === '') {
        return el;
    }else {
        return el.name.toLowerCase().includes(inputText)
    }
})
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon list</title>
      </Head>

      <div className={search.container}>
        <h1>Search</h1>
        <div>
            <input onChange={inputHandler} value={inputText} className={search.input} placeholder='Find your pokemon' type="text" />
        </div>
    </div>

      <div className={styles.grid}>
            {filteredData.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
                <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
                <a>
                    <img className={styles.img} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt="" />
                    <h3>{pokemon.name}</h3>
                </a>
                </Link>
            </div>
            ))}
        </div>

    </div>
  )
}
